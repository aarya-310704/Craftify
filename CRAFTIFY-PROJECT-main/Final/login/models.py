from django.db import models

# Create your models here.

class Login(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=30)  

    def __str__(self):
        return self.email


class Contact(models.Model):
    name = models.CharField(max_length=30)
    email = models.EmailField()
    subject = models.CharField(max_length=300)
    desc = models.TextField()

    def __str__(self):
        return self.name+" - "+self.email   

    
    