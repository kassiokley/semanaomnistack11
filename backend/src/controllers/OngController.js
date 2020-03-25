//Importando o crypto (usando para segurança)
const crypto = require('crypto');

//Importando o connection
const connection = require('../database/connection');

//Exportando método cadastrar, listar
module.exports = {

  //Listar
  async index(request, response) {
    const ongs = await connection('ongs').select('*');

    return response.json(ongs);
  },

  //Cadastrar
  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    //Criando um random em string em hexadecimal
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf,
    });

    return response.json({ id });
  }
};