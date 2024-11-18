const express = require('express');
const morgan = require('morgan');
const app = express();
const calendarRoutes = require('./routes/calendarRoutes');

app.use(morgan('dev'));

// /api/todos
// app.use('/api/todos', todoRoutes)

const knex = require('./db/knex');

app.get('/api/field', async (req, res) => {
  try {
    const field = await knex('field').select('*');
    console.log(field);
    res.status(200).json(field);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: `Failed to get field` });
  }
});

app.get('/api/goal', async (req, res) => {
  try {
    const todos = await knex('goal').select('*');
    console.log(todos);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: 'Failed to get todos' });
  }
});

app.get('/api/task', async (req, res) => {
  try {
    const todos = await knex('task').select('*');
    console.log(todos);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: 'Failed to get todos' });
  }
});

app.get('/api/note', async (req, res) => {
  try {
    const todos = await knex('note').select('*');
    console.log(todos);
    res.status(200).json(todos);
  } catch (err) {
    console.log(err.stack);
    res.status(500).json({ error: 'Failed to get todos' });
  }
});

app.post('/api/goals');

module.exports = app;
