// { id: x, title: xxxx, completed: true/false}
exports.up = function (knex) {
  return knex.schema.createTable('field', (table) => {
    table.increments('field_id').primary();
    table.string('field_name').notNullable();
    table.string('image_color').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('field');
};
