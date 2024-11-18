/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('note').del();
  await knex('note').insert([
    {
      date: '2024-11-18',
      note_text: '土日にもう少しだけでもアプリ開発やっておくんだった。。。',
    },
    { date: '2024-11-19', note_text: 'アプリ開発案どうしよ。。' },
    { date: '2024-11-20', note_text: 'たまには出社するか。。。' },
  ]);
};
