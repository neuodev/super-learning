from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import gensim
MODEL_DIR = './models/word-embedding/'

class MostSimilar(APIView):
    def post(self, request):
        word = request.data.get('word', '')
        model = gensim.models.Word2Vec.load(MODEL_DIR + "word2vec-amazon-reviews.model")
        try:
            words = model.wv.most_similar(word)
        except:
            return Response({'error': 'Word Not Found'}, status=400 )
        return Response(words)