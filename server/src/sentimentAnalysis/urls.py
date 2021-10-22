from django.urls import path
from .views import UserTweetAnalysis, LatestTweetsAnalysis


urlpatterns = [
    path('', UserTweetAnalysis.as_view(), name='twitter-sentiment-analysis'),
    path('latest/', LatestTweetsAnalysis.as_view(), name='latest-tweets-analysis')

]