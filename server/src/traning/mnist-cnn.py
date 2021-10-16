# Import Libraries
import os
import json
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
import numpy as np
import tensorflow as tf
import tensorflow.keras.layers  as KL
import tensorflow.keras.models  as KM
import matplotlib.pyplot as plt

## Dataset
mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train/255.0, x_test/255.0
x_train, x_test = np.expand_dims(x_train, axis=-1), np.expand_dims(x_test, axis=-1)

## Model
inputs = KL.Input(shape=(28, 28, 1))
c = KL.Conv2D(32, (3, 3), padding="valid", activation=tf.nn.relu)(inputs)
m = KL.MaxPool2D((2, 2), (2, 2))(c)
d = KL.Dropout(0.5)(m)
c = KL.Conv2D(64, (3, 3), padding="valid", activation=tf.nn.relu)(d)
m = KL.MaxPool2D((2, 2), (2, 2))(c)
d = KL.Dropout(0.5)(m)
c = KL.Conv2D(128, (3, 3), padding="valid", activation=tf.nn.relu)(d)
f = KL.Flatten()(c)
outputs = KL.Dense(10, activation=tf.nn.softmax)(f)

model = KM.Model(inputs, outputs)
model.summary()
model.compile(optimizer="adam",
                loss="sparse_categorical_crossentropy",
                metrics=["accuracy"])

e = model.fit(x_train, y_train, validation_data=(x_test, y_test), epochs=25)
print(f'Model Evaluation:\n{model.evaluate(x_test, y_test)}')

# Prediction test
idx = 120
y_pred = model.predict(np.array([x_test[idx]]))
plt.imshow(x_test[idx], cmap='gray')
plt.title(f'Label is {y_test[idx]}; Prediction is {np.argmax(y_pred)}')
plt.axis('off')
plt.show()
# Save the losses and the accuracy across epochs 
data = {
    'loss': e.history['loss'],
    'val_loss': e.history['val_loss'],
    'accuracy': e.history['accuracy'],
    'val_accuracy': e.history['val_accuracy'],
}
with open('../models/mnist/cnn-history.json', 'w') as f:
    f.write(json.dumps(data))

plt.plot(data['loss'], label='Loss')
plt.plot(data['val_loss'], label='Valdiation Loss')
plt.legend()
plt.show()

plt.plot(data['accuracy'], label='Accuracy')
plt.plot(data['val_accuracy'], label='Validation Acuuracy')
plt.legend()
plt.show()

# model.save('../models/mnist/mnist-cnn.h5')
print('Model Saved.')