# Conversor de Moedas com API - Frontend e Backend

## Descrição

Este projeto consiste em um **conversor de moedas** que utiliza uma **API pública** para obter as taxas de câmbio entre diversas moedas, permitindo que o usuário realize a conversão entre duas moedas em tempo real. O sistema é composto por:

- **Frontend:** Um aplicativo simples baseado em **HTML**, **CSS**, e **JavaScript** (com o uso de **jQuery** e **AJAX**) para interagir com o backend e exibir os resultados dinamicamente.
- **Backend:** Uma **API RESTful** construída com **FastAPI** que consome a **ExchangeRate-API** para buscar as taxas de câmbio e realizar as conversões entre moedas.

## Funcionalidades

- **Conversão de Moedas:** Permite a conversão entre diferentes moedas (como USD, EUR, BRL, etc.) em tempo real.
- **Seleção Dinâmica de Moedas:** As moedas disponíveis são carregadas automaticamente no carregamento da página.
- **Conversão Automática:** Quando o usuário seleciona as moedas, o valor convertido é atualizado automaticamente.
- **API para Conversão:** A API de backend expõe um endpoint que retorna as taxas de câmbio entre duas moedas.

## Tecnologias Utilizadas

### Frontend
- **HTML/CSS/JS**: Estrutura, estilo e interatividade da página.
- **jQuery**: Biblioteca JavaScript para facilitar a manipulação do DOM e comunicação assíncrona com o backend (AJAX).
- **AJAX**: Para realizar requisições assíncronas ao backend sem recarregar a página.

### Backend
- **FastAPI**: Framework Python para criar APIs rápidas e robustas.
- **Requests**: Biblioteca Python para fazer requisições HTTP à ExchangeRate-API.

### API de Taxas de Câmbio
- **ExchangeRate-API**: API pública que fornece taxas de câmbio de várias moedas.

## Instalação e Configuração

### Backend

1. Clone o repositório do projeto:
    ```bash
    git clone https://github.com/seu-usuario/conversor-de-moedas.git
    ```

2. Navegue até o diretório do backend:
    ```bash
    cd conversor-de-moedas
    ```

3. Crie um ambiente virtual:
    ```bash
    python -m venv venv
    ```

4. Ative o ambiente virtual:
    - **Windows:**
        ```bash
        venv\Scripts\activate
        ```
    - **Linux/MacOS:**
        ```bash
        source venv/bin/activate
        ```

5. Instale as dependências:
    ```bash
    pip install -r requirements.txt
    ```

6. Execute a API:
    ```bash
    uvicorn main:app --reload
    ```

   O servidor estará rodando em `http://127.0.0.1:8000`.

### Frontend

1. Navegue até o diretório do frontend:
    ```bash
    cd conversor-de-moedas/frontend
    ```

2. Abra o arquivo `index.html` em seu navegador.

   O frontend irá automaticamente se conectar à API para carregar as moedas e realizar as conversões.

## Como Usar

1. **Selecione as moedas**: Ao abrir a página, você verá dois menus suspensos (dropdowns) para selecionar a moeda de origem e a moeda de destino.
   
2. **Conversão automática**: Quando você seleciona as moedas, a conversão será realizada automaticamente, e o valor convertido será exibido na tela.

3. **Exibição de Taxa de Câmbio**: A taxa de conversão entre as duas moedas selecionadas será exibida ao lado do campo de resultado.

4. **Resultado da conversão**: O valor convertido é mostrado em um campo de entrada, permitindo que o usuário copie ou use o valor convertido diretamente.

## Exemplo de Uso

- Se você escolher **USD** como a moeda de origem e **BRL** como a moeda de destino, e inserir um valor de **10 USD**, o sistema retornará o valor convertido para BRL com a taxa de câmbio mais recente.
  
## Melhorias Futuras

- **Interface de Usuário Melhorada**: Melhorias na UI/UX, como adicionar gráficos ou mostrar histórico de conversões anteriores.
  


