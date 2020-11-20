
exports.up = function(knex) {
    return knex.schema.withSchema('todo').table('todos', (table) => {
      table.boolean('done');
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.withSchema('todo').table('todos', (table) => {
      table.dropColumn('done');
    })
  };
  