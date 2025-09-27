const { addDays, format } = require("date-fns");

function performDateOperations() {
  const now = new Date();

  const futureDate = addDays(now, 5);
  const formatted = format(futureDate, "yyyy-MM-dd HH:mm:ss");

  console.log("Current date:", now);
  console.log("After 5 days:", formatted);
}

module.exports = performDateOperations;
