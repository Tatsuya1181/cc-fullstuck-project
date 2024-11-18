exports.up = function (knex) {
  return knex.schema.createTable('task', (table) => {
    table.increments('task_id').primary();
    table.string('task_name').notNullable();
    table.timestamp('start_date').notNullable();
    table.timestamp('end_date').notNullable();
    table.string('start_time');
    table.string('end_time');
    table.integer('parent_task_id');
    table.integer('related_goal_id');
    table.string('task_state').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('task');
};
