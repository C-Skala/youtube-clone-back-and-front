from django import views
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Comment
from .serializers import CommentSerializer
from Comment import serializers
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes

@api_view(['GET'])
def comment_list(request):
        
    if request.method == 'GET':    
        video_id = request.query_params.get('video_id_lookup')
        queryset = Comment.objects.all()
       
        if video_id:
           queryset = queryset.filter(vider_id__id = video_id)

        serializer = CommentSerializer(queryset, many=True)
        return Response(serializer.data)
    

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def comment_functions(request, video_id):
    video_id = get_object_or_404(Comment, video_id = video_id)
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
