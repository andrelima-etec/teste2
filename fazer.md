- criar comando npm run start

"start": "node src/index.js",

- instalar o nodemon -D

- criar comando npm run dev

"dev": "nodemon src/index.js"

- criar constante para a porta
- importar dotenv
- criar o arquivo .env

PORT=

MYSQL_PORT=
MYSQL_DATABASE=
MYSQL_ROOT_PASSWORD=

- criar o arquivo .env.example
- adicionar no topo de index.js:

require('dotenv').config();

- acertar a constante da porta
- mostrar como utilizar o request 

const name = request.query.nome || 'visitante';

- instalar a extensão REST Client

- criar arquivo client.http

### Teste
GET http://localhost:3000?nome=João

### Somar
GET http://localhost:3000/operacoes/somar?num1=100&num2=200

### Subtração
GET http://localhost:3000/operacoes/subtrair?num1=100&num2=200

### Somar com POST
POST http://localhost:3000/operacoes/somar
Content-Type: application/json

{
    "num1": 50,
    "num2": 40
}

@baseUrl = http://localhost:3000

GET {{baseUrl}}/operacoes/somar