from django.urls import path
from .views import UsersSearch


urlpatterns = [
    path('search/', UsersSearch.as_view(), name='users-search')
]