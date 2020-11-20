exports.up = (knex) => {
    return knex.schema
      .createTable('todos', (table) => {
        table.increments('id').unsigned().unique().notNullable();
        table.string('todo_title').notNullable();
      });
  };
  
  exports.down = (knex) => {
    return knex.schema
      .dropTable('todos');
  };