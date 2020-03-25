//Importando o connection
const connection = require('../database/connection');

//Exportando método cadastrar, listar
module.exports = {

  //Listar
  async index(request, response) {
    const { page = 1 } = request.query;

    //Retorna o total de Casos existentes
    const [count] = await connection('incidents').count();

    //Aparecem no frontend somente 5 em 5 cadastros buscados
    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*', 
        'ongs.name', 
        'ongs.email', 
        'ongs.whatsapp', 
        'ongs.city', 
        'ongs.uf'
      ]);

    response.header('X-Total-Count', count['count(*)']);

    return response.json(incidents);
  },

  //Cadastrar
  async create(request, response) {
    const {title, description, value} = request.body;

    //Pegando o id da ONG cadastrada
    const ong_id = request.headers.authorization;

    //Cadastrando e retornando o ID
    const { id } = await connection('incidents').insert({
      title,
      description,
      value,
      ong_id,
    });

    return response.json({ id });
  },

  //Deletar
  async delete(request, response) {
    const { id } = request.params;

    //Pegando o id da ONG cadastrada
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .where('id', id)
      .select('ong_id')
      .first();

      
    if(incident.ong_id != ong_id) {
      return response.status(401).json({ error: 'Operation not permitted.' });
    }

    await connection('incidents').where('id', id).delete();

    return response.status(204).send();
  },
};