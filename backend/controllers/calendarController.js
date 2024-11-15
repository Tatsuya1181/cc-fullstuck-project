const goalModel = require('../models/goalModel');

exports.getAllGoals = async (req, res) => {
  try {
    const todos = await todoModel.findAll();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ error: 'Failed to get goals' });
  }
};
