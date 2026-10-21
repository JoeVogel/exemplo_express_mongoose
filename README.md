## Demonstração Express + Mongoose

Exemplo didático de API NodeJS com Express e Mongoose 

### Configuração

> Deverá ser criado um arquivo `.env` que contenha a variável `MONGODB_URI` que contenha a string de conexão do banco de dados MongoDB.

### Instalação

```
npm install
node src/app.js
```

### Endpoints

- GET /users
- GET /users/:id
- POST /users — {"name":"Ana", "email":"ana@email.com"}
- PUT /users/:id — {"name":"Ana Maria", "email":"ana@email.com"}
- DELETE /users/:id

### Testes

```
curl -i -X POST http://localhost:3000/users -H 'Content-Type: application/json' -d '{"name":"Ana", "email":"ana@email.com"}'

curl -i http://localhost:3000/users

curl -i -X PUT http://localhost:3000/users/<id> -H 'Content-Type: application/json' -d '{"name":"Ana Maria", "email":"ana@email.com"}'

curl -i -X DELETE http://localhost:3000/users/<id>
```