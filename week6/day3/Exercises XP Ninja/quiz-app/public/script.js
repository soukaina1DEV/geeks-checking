let currentQuestionIndex = 0;
let score = 0;
let questions = [];

async function loadQuestions() {
  const res = await fetch("/api/questions");
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const container = document.getElementById("quiz-container");
  const q = questions[currentQuestionIndex];
  container.innerHTML = `
    <h3>${q.question}</h3>
    ${q.options
      .map(
        (opt) => `
        <div>
          <input type="radio" name="option" value="${opt.id}" />
          <label>${opt.option_text}</label>
        </div>
      `
      )
      .join("")}
  `;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  const selected = document.querySelector('input[name="option"]:checked');
  if (!selected) return alert("Please select an answer!");

  const current = questions[currentQuestionIndex];
  if (parseInt(selected.value) === current.correct_answer) {
    score++;
    alert("✅ Correct!");
  } else {
    alert("❌ Wrong!");
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById("quiz-container").innerHTML =
      "<h2>Quiz Finished!</h2>";
    document.getElementById(
      "score"
    ).innerText = `Your Score: ${score}/${questions.length}`;
    document.getElementById("nextBtn").style.display = "none";
  }
});

loadQuestions();
