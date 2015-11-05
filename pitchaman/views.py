# Create your views here.

from django.shortcuts import render, render_to_response, redirect
from django.shortcuts import RequestContext
from django.http import HttpRequest, HttpResponse
from pitchaman.models import *
from django.contrib.auth.models import User


def index(request):
    return render(request, 'index.html')


def profile(request):
    if request.user.is_authenticated():
        user_id = request.user.id
        userModel = User.objects.get(id=user_id)
        try:
            profile = Profile.objects.get(user=userModel)
            if profile.getIfComplete():
                return render(request, 'profile.html')
            else:
                return redirect('/profile/new/')
        except:
            return redirect('/profile/new/')

    else:
        return redirect('/')


def createaccount(request):
    if request.user.is_authenticated():
        return render(request, 'createaccount.html')
    else:
        return redirect('/')
