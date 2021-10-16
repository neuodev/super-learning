from rest_framework.views import APIView
from rest_framework.response import Response
import numpy as np 
import tensorflow as tf 
import json

MNIST_DIR = './models/mnist/'
class MnistView(APIView):
    def post(self, request):
        data = request.data
        CNN = tf.keras.models.load_model(MNIST_DIR + 'mnist-cnn.h5')
        ANN = tf.keras.models.load_model(MNIST_DIR + 'mnist-ann.h5')
        x = np.array(data['data']).reshape(28, 28, -1) / 255.0
        cnn_preds = CNN.predict(np.array([x]))
        ann_preds = ANN.predict(np.array([x]))
        
        return Response({
            'cnn': {
                'preds': cnn_preds[0],
                'number': np.argmax(cnn_preds),
            },
            'ann': {
                'preds': ann_preds[0],
                'number': np.argmax(ann_preds),
            },
        })

class MnistHistoryView(APIView):
    def get(slef, request):
        with open(MNIST_DIR + 'cnn-history.json', 'r') as f:
            cnn_history = json.loads(f.read())
        with open(MNIST_DIR + 'ann-history.json') as f:
            ann_history = json.loads(f.read())
        return Response({
            'cnn_history': cnn_history,
            'ann_history': ann_history,
        })