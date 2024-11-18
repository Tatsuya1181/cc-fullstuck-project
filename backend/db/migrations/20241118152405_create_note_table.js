exports.up = function (knex) {
  return knex.schema.createTable('note', (table) => {
    table.timestamp('date').primary();
    table.string('note_text').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('note');
};
