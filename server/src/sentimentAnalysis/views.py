from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

import requests
import environ

env = environ.Env()


url = 'https://api.twitter.com/1.1/users/search.json'
config = {}
headers = {"Authorization": f"Bearer {env('TWITTER_BEARER_TOKEN')}"}
class UsersSearch(APIView):
    def get(self, request):
        query = request.query_params.get('q', None)
        page = request.query_params.get('page', 1)
        count = request.query_params.get('count', 1)
        if not query:
            return Response({ 'error': 'Query Param is required' }, status=400,)

        res = requests.get(url, params={'q': query, 'page': page, 'count': count}, headers=headers).json()
        users = []
        for user in res:
            users.append({
                'profile_image_url': user['profile_image_url'],
                'name': user['name'],
                'username': user['screen_name'],
                'verified': user['verified']
            })
        return Response(users)
