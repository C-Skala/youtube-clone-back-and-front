from django.urls import path
from . import views

urlpatterns = [
    path('', views.comment_list),
    path('<str:video_id>/', views.comment_functions),

]