from typing import Union

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


import requests

url= f'https://v6.exchangerate-api.com/v6/20865582e6b10b4310a9b895/latest/USD'

app = FastAPI()


# Habilitar CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite qualquer origem
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/names")
def read_root():
    response = requests.get(url)
    data = response.json()
    currency = list(data["conversion_rates"].keys())
    
    return{"currency": currency}


@app.get("/converter")
def convert(moeda1, moeda2):
    url = f'https://v6.exchangerate-api.com/v6/20865582e6b10b4310a9b895/pair/{moeda1}/{moeda2}'
    response = requests.get(url)
    data = response.json()
    conversion = data["conversion_rate"]
    return {'conversion_rate': conversion}

