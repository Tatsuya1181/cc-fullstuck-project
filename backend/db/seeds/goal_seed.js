/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('goal').del();
  await knex('goal').insert([
    {
      goal_id: 1,
      goal_name: '個人開発アプリデモ完成',
      start_date: '2024-11-19',
      end_date: '2024-11-19',
      field_id: 1,
      parent_goal_id: null,
      goal_type: 'day',
    },
    {
      goal_id: 2,
      goal_name: '素振り10000回',
      start_date: '2024-11-19',
      end_date: '2024-11-19',
      field_id: 2,
      parent_goal_id: null,
      goal_type: 'day',
    },
    {
      goal_id: 3,
      goal_name: '打ちっぱなし5時間',
      start_date: '2024-11-19',
      end_date: '2024-11-19',
      field_id: 3,
      parent_goal_id: null,
      goal_type: 'day',
    },
    {
      goal_id: 4,
      goal_name: '開発チームメンバーと仲良くなる',
      start_date: '2024-11-17',
      end_date: '2024-11-23',
      field_id: 1,
      parent_goal_id: null,
      goal_type: 'week',
    },
    {
      goal_id: 5,
      goal_name: 'サーブスピード250キロ',
      start_date: '2024-11-17',
      end_date: '2024-11-23',
      field_id: 2,
      parent_goal_id: null,
      goal_type: 'week',
    },
    {
      goal_id: 6,
      goal_name: 'ドライバーで500ヤード飛ばせるようになる',
      start_date: '2024-11-17',
      end_date: '2024-11-23',
      field_id: 3,
      parent_goal_id: null,
      goal_type: 'week',
    },
    {
      goal_id: 7,
      goal_name: 'アジャイルアプリ開発をマスターする',
      start_date: '2024-10-27',
      end_date: '2024-11-30',
      field_id: 1,
      parent_goal_id: null,
      goal_type: 'month',
    },
    {
      goal_id: 8,
      goal_name: '錦織圭と対戦',
      start_date: '2024-10-27',
      end_date: '2024-11-30',
      field_id: 2,
      parent_goal_id: null,
      goal_type: 'month',
    },
    {
      goal_id: 9,
      goal_name: '松山英樹と対戦',
      start_date: '2024-10-27',
      end_date: '2024-11-30',
      field_id: 3,
      parent_goal_id: null,
      goal_type: 'month',
    },
  ]);
};
