from django.urls import path
from . import views

urlpatterns = [
    path('all/', views.all_comments),
    path('', views.comment_functions),

]