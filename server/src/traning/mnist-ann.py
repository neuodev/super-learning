import os 
import json
os.environ["TF_CPP_MIN_LOG_LEVEL"] = "2"
import numpy as np 
import tensorflow as tf 
from tensorflow.keras import layers 
from tensorflow.keras.models import Sequential
import matplotlib.pyplot as plt 

mnist = tf.keras.datasets.mnist
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train/255.0, x_test/255.0

print(f'X_train Shape : {x_train.shape}; y_train Shape: {y_train.shape}')

model = Sequential([
    layers.Flatten(input_shape=(28, 28)),
    layers.Dense(200, activation='relu'),
    layers.Dense(200, activation='relu'),
    layers.Dense(200, activation='relu'),
    layers.Dense(10, activation='softmax'),
])

model.compile(optimizer="adam",
                loss="sparse_categorical_crossentropy",
                metrics=["accuracy"])
model.summary()

e = model.fit(
    x_train, y_train, epochs=25,
    validation_data=(x_test, y_test)
)

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
with open('../models/mnist/ann-history.json', 'w') as f:
    f.write(json.dumps(data))

plt.plot(data['loss'], label='Loss')
plt.plot(data['val_loss'], label='Valdiation Loss')
plt.legend()
plt.show()

plt.plot(data['accuracy'], label='Accuracy')
plt.plot(data['val_accuracy'], label='Validation Acuuracy')
plt.legend()
plt.show()

print('Traning History Stored')
# Save the model 
model.save('../models/mnist/mnist-ann.h5')
print('Model Saved.')

