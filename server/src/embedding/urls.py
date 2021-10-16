from django.urls import path
from .views import MostSimilar

urlpatterns = [
    path('', MostSimilar.as_view(), name='similar')    
]