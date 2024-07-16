const knex = require('knex')({
    client: 'pg',
    connection: {
      host: 'isabelle.db.elephantsql.com',
      port: 5432,
      user: 'gzewbamh',
      password: '3Q6nl8206I3IFJrmCqIg0j6H1YxBNF7q',
      database: 'gzewbamh'
    }
  });
  
  module.exports = knex;
  