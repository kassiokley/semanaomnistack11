//Importando o express
const express = require('express');

//Importando o Cors (segurança)
const cors = require('cors')

//Importando as rotas (routes)
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333);


/*
* Rota / Recurso 
*/

/*
* Métodos HTTP:
* 
* GET: Buscar ou listar uma informação do backende
* POST: Criar uma informação no backend
* PUT: Alterar uma informação no backend
* DELETE: Deletar uma informação no backend
*/

/*
* Tipos de Parâmentos:
*  
* Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
* Route Params: Parâmetros utilizados para identificar recursos
* Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
*/

/*
* SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
* NoSQL: MongoDB CouchDB, etc ... 
*/

/*
* Driver: SELECT * FROM users
* 
* Query Builder: table('users').select('*').where('')
*/

/*
 * ./ referi-se a um arquivo que esta na mesma pasta
 *
 * ../ referi-se a volta uma pasta
 */