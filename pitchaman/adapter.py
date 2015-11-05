from django.conf import settings
from allauth.socialaccount.adapter import DefaultSocialAccountAdapter
import logging
from django.shortcuts import redirect


class PitchamanAccountAdapter(DefaultSocialAccountAdapter):
    def get_login_redirect_url(self, request):
        assert request.user.is_authenticated()
        path = "/createaccount/{user}/"
        logging.debug("social account here", request.user)
        return path.format(user=request)


    def get_connect_redirect_url(self, request, socialaccount):
        assert request.user.is_authenticated()
        url = "http://fufrfff.vo  njkkj"
        return url
