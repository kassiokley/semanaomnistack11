//Importando o express
const express = require('express');

//Importando OngController
const OngController = require('./controllers/OngController');

//Importando IncidentController
const IncidentController = require('./controllers/IncidentController');

//Importando ProfileController
const profileController = require('./controllers/ProfileController');

//Importando SessionController
const sessionController = require('./controllers/SessionController');

//Criando as rotas (routes)
const routes = express.Router();

//Rota de Login
routes.post('/sessions', sessionController.create);

//Rota Buscar ou listar ONGS
routes.get('/ongs', OngController.index);
//Rota Cadastrar ONGS
routes.post('/ongs', OngController.create);

//Rota Buscar ou listar Casos da ONG
routes.get('/incidents', IncidentController.index);
//Rota Cadastrar Casos da ONG
routes.post('/incidents', IncidentController.create);
//Rota Delete Casos da ONG
routes.delete('/incidents/:id', IncidentController.delete);

//Rota Buscar ou listar Casos específicos
routes.get('/profile', profileController.index);

//Exportando as rotas (routes)
module.exports = routes;