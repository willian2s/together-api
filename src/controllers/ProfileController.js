const connection = require('../database/connection');

module.exports = {
  async index(req, res) {
    const ongId = req.headers.authorization;

    const incidents = await connection('incidents')
      .where('ongId', ongId)
      .select('*');

    return res.json(incidents);
  },
};
