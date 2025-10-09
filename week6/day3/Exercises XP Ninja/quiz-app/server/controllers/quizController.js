const Question = require("../models/questionModel");

const getQuestions = async (req, res, next) => {
  try {
    const questions = await Question.getAllQuestions();
    res.json(questions);
  } catch (err) {
    next(err);
  }
};

module.exports = { getQuestions };
