const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '..', '.env')});

module.exports = {
    development: {
      client: 'mysql',
      connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME
      },
      migrations: {
        directory: `${__dirname}/migrations`,
      },
    },

    production: {
      client: 'pg',
      connection: {
        host : process.env.DB_HOST,
        port: process.env.DB_PORT,
        user : process.env.DB_USER,
        password : process.env.DB_PASS,
        database : process.env.DB_NAME,
        ssl: {
            rejectUnauthorized: false
        }
      },
      migrations: {
        directory: `${__dirname}/migrations`,
      },
    },
  };