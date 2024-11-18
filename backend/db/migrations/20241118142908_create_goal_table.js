exports.up = function (knex) {
  return knex.schema.createTable('goal', (table) => {
    table.increments('goal_id').primary();
    table.string('goal_name').notNullable();
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date').notNullable();
    table.integer('field_id').notNullable();
    table.integer('parent_goal_id');
    table.string('goal_type').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('goal');
};
