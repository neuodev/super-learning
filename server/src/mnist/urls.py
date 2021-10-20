from django.urls import path
from .views import MnistView, MnistHistoryView

urlpatterns = [
    path('', MnistView.as_view(), name='mnist'),
    path('history/', MnistHistoryView.as_view(), name='mnist-history')
]