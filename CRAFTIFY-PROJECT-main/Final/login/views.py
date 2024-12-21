from django.shortcuts import render, HttpResponseRedirect
from login.models import Login
from login.models import Contact



# Create your views here.
def login(request):
    if request.method=="POST":
        password = request.POST['password']
        email = request.POST['email']
        #print(name, email, sub, desc)
        login = Login(email=email, password=password)
        login.save()
        print("The Data Has been Written to DBS.")
        return HttpResponseRedirect('/index.html')
    else:
        return render(request, 'login.html')

def home(request):
    return render(request, 'index.html')

def shop(request):
    return render(request, 'shopping.html')

def blog(request):
    return render(request, 'blog.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    #return HttpResponse("This is Contact Page.")
    if request.method=="POST":
        name = request.POST['name']
        email = request.POST['email']
        desc = request.POST['desc']
        subject = request.POST['subject']
        #print(name, email, sub, desc)
        contact = Contact(name=name, email=email, desc=desc, subject=subject)
        contact.save()
        print("The Data Has been Written to DBS.")
        return HttpResponseRedirect('/contact.html')
    else:
        return render(request, 'contact.html')
    
def sproduct1(request):
    return render(request, 'sproduct1.html')

def sproduct2(request):
    return render(request, 'sproduct2.html')

def sproduct3(request):
    return render(request, 'sproduct3.html')

def sproduct4(request):
    return render(request, 'sproduct4.html')

def sproduct5(request):
    return render(request, 'sproduct5.html')

def sproduct6(request):
    return render(request, 'sproduct6.html')

def sproduct7(request):
    return render(request, 'sproduct7.html')

def sproduct8(request):
    return render(request, 'sproduct8.html')

def sproduct9(request):
    return render(request, 'sproduct9.html')

def sproduct10(request):
    return render(request, 'sproduct10.html')

def sproduct11(request):
    return render(request, 'sproduct11.html')

def sproduct12(request):
    return render(request, 'sproduct12.html')

def sproduct13(request):
    return render(request, 'sproduct13.html')

def sproduct14(request):
    return render(request, 'sproduct14.html')

def sproduct15(request):
    return render(request, 'sproduct15.html')

def sproduct16(request):
    return render(request, 'sproduct16.html')    

def transaction(request):
    return render(request, 'transaction.html')

def receipt(request):
    return render(request, 'receipt.html')    