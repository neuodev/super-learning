import requests
from sentimentAnalysis.utils import (
    get_user_tweets,
    get_user_details, 
    clean_tweets, 
    analyse_tweets,
    extreme_tweets,
    batch_tweets,
    extract_numbers_from_tweets,
)

# 3rd party 
from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import environ

class UserTweetAnalysis(APIView):
    def get(self, request):
        username = request.query_params.get('username', None)
        token = request.query_params.get('token', None)
        max_results = request.query_params.get('max_results', None)
        if not username:
            return Response({ 'error': 'Missing Query Paramter' }, status=400)

        user_res = get_user_details(username)
        
        if user_res.get('errors', None):
            return Response({'error': f'User with id of "{username}" is not found'})
        
        user_id = user_res['data']['id'] 

        tweets_res = get_user_tweets(user_id, token, max_results)
        cleaned_tweets = clean_tweets(tweets_res.get('data', []))
        analyed_tweets = analyse_tweets(cleaned_tweets)
        extreme = extreme_tweets(user_id)
        return Response({'user': user_res['data'], 'tweets': { 'all_tweets': analyed_tweets, 'extreme_tweets': extreme, 'meta': tweets_res['meta'] }})

class LatestTweetsAnalysis(APIView):
    def get(self, request):
        username = request.query_params.get('username', None) 
        number_of_tweets = request.query_params.get('number_of_tweets', 100)
        if not username:
            return Response({ 'error': 'Missing Query Paramter' }, status=400)
        user_res = get_user_details(username)
        if user_res.get('errors', None):
            return Response({'error': f'User with id of "{username}" is not found'})
        user_id = user_res['data']['id']  
        all_tweets = batch_tweets(user_id, number_of_tweets)
        cleaned_tweets = clean_tweets(all_tweets)
        analyed_tweets = analyse_tweets(cleaned_tweets)
        numbers = extract_numbers_from_tweets(analyed_tweets)
        return Response(numbers)
        