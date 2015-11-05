from django.db import models
from django.contrib.auth.models import User


# Create your models here.


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    country = models.CharField(max_length=100)
    street = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    phone_number = models.IntegerField()
    zip_code = models.IntegerField()
    birth_date = models.DateField()

    def getIfComplete(self):
        if not (
             self.country and self.state
        ):
            return False
