from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from django.template import loader

#
# def index(request):
#     return HttpResponse("Hello, world. You're at the polls index.")


def index(request):
    template = loader.get_template('Homecare_service/index.html')
    context = {}
    return HttpResponse(template.render(context, request))
