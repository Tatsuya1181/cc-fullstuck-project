/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('task').del();
  await knex('task').insert([
    {
      task_id: 1,
      task_name: 'JavaScript書籍シリーズ読破',
      start_date: '2024-10-27',
      end_date: '2024-11-30',
      start_time: null,
      end_time: null,
      parent_task_id: null,
      related_goal_id: 1,
      task_state: 'backlog',
    },
    {
      task_id: 2,
      task_name: 'JavaScript書籍第1部読破',
      start_date: '2024-11-17',
      end_date: '2024-11-23',
      start_time: null,
      end_time: null,
      parent_task_id: 1,
      related_goal_id: 1,
      task_state: 'backlog',
    },
    {
      task_id: 3,
      task_name: 'JavaScript書籍第1章読破',
      start_date: '2024-11-19',
      end_date: '2024-11-19',
      start_time: null,
      end_time: null,
      parent_task_id: 2,
      related_goal_id: 1,
      task_state: 'backlog',
    },
  ]);
};
