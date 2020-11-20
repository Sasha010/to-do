const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '..', '.env')});
const environment = process.env.ENVIRONMENT || 'development';
const config = require('../db/knexfile')[environment];
const knex = require('knex')(config);

module.exports = {
    getTodos: () => knex('todos').orderBy('id'),
    /**
     * @param data
     * @param data.title
     * @param data.done
     * @return {Promise<*>}
     */
    createTodo: (data) => knex('todos').insert(data).returning('id'),
    changeTodoStatus: (id, status) => knex('todos').update('done', status).where('id', id)
}