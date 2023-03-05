const asyncHandler = require('express-async-handler')

const getGoals = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add text field')
    }
  console.log(req.body);
  res.status(200).json({ message: `getting goals` });
});

const setGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `setting goals` });
});

const updateGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `updating goal ${req.params.id}` });
});

const deleteGoal = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `deleting goal ${req.params.id}` });
});

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
