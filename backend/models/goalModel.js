const knex = require('../db/knex');

module.exports = {
  async findAll() {
    return knex('goals').select('*');
  },
};
