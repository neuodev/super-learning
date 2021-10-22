from django.urls import path
from .views import UsersSearch


urlpatterns = [
    path('', UsersSearch.as_view(), name='twitter-sentiment-analysis')
]