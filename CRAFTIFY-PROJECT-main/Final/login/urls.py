from django.contrib import admin
from django.urls import path, include
from login import views
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = "Craftify's E-regsiter"
admin.site.site_title = "Welcome to Craftify Supplier Dashboard."
admin.site.index_title = "Welcome to this portal."

urlpatterns = [
    path('', views.login, name='login'),
    path('index.html', views.home, name='home'),
    path('shopping.html', views.shop, name='shop'),
    path('blog.html', views.blog, name='blog'),
    path('about.html', views.about, name='about'),
    path('contact.html', views.contact, name='contact'),
    path('sproduct1.html', views.sproduct1, name='sproduct1'),
    path('sproduct2.html', views.sproduct2, name='sproduct2'),
    path('sproduct3.html', views.sproduct3, name='sproduct3'),
    path('sproduct4.html', views.sproduct4, name='sproduct4'),
    path('sproduct5.html', views.sproduct5, name='sproduct5'),
    path('sproduct6.html', views.sproduct6, name='sproduct6'),
    path('sproduct7.html', views.sproduct7, name='sproduct7'),
    path('sproduct8.html', views.sproduct8, name='sproduct8'),
    path('sproduct9.html', views.sproduct9, name='sproduct9'), 
    path('sproduct10.html', views.sproduct10, name='sproduct10'),
    path('sproduct11.html', views.sproduct11, name='sproduct11'),
    path('sproduct12.html', views.sproduct12, name='sproduct12'),
    path('sproduct13.html', views.sproduct13, name='sproduct13'),
    path('sproduct14.html', views.sproduct14, name='sproduct14'),
    path('sproduct15.html', views.sproduct15, name='sproduct15'),
    path('sproduct16.html', views.sproduct16, name='sproduct16'),
    path('login.html', views.login, name='login'),  
    path('transaction.html', views.transaction, name='transaction'), 
    path('receipt.html', views.receipt, name='receipt'), 
] 