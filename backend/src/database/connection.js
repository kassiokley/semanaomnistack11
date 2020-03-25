//Importando o Knex
const knex = require('knex');

//Importando o knexfile
const configuration = require('../../knexfile');

//Criando a conexão com o "database"
const connection = knex(configuration.development);

//Exportando a conexão
module.exports = connection;