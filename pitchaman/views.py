# Create your views here.

from django.shortcuts import render, render_to_response
from django.shortcuts import RequestContext
from django.http import HttpRequest, HttpResponse


def index(request):
    return render(request, 'index.html')


def profile(request):
    return render(request, 'profile.html')
