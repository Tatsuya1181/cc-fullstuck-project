/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('field').del();
  await knex('field').insert([
    { field_id: 1, field_name: 'IT', image_color: 'white' },
    { field_id: 2, field_name: 'Tennis', image_color: 'blue' },
    { field_id: 3, field_name: 'Golf', image_color: 'green' },
  ]);
};
