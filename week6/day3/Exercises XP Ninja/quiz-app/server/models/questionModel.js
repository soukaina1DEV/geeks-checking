const db = require("../config/db");

const getAllQuestions = async () => {
  const questions = await db("questions").select("*");

  const result = [];
  for (const q of questions) {
    const options = await db("questions_options")
      .join("options", "questions_options.option_id", "options.id")
      .where("questions_options.question_id", q.id)
      .select("options.id", "options.option_text");
    result.push({ ...q, options });
  }
  return result;
};

module.exports = { getAllQuestions };
