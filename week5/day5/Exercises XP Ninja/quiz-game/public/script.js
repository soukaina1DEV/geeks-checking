let questions = [];
let currentIndex = 0;
let score = 0;

async function loadQuestions() {
  const res = await fetch("/api/questions");
  questions = await res.json();
  showQuestion();
}

function showQuestion() {
  const q = questions[currentIndex];
  document.getElementById("question").textContent = q.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt, q.answer);
    optionsDiv.appendChild(btn);
  });

  document.getElementById("feedback").textContent = "";
  document.getElementById("nextBtn").disabled = true;
}

function checkAnswer(selected, correct) {
  const feedback = document.getElementById("feedback");
  if (selected === correct) {
    feedback.textContent = "✅ Correct!";
    feedback.className = "correct";
    score++;
  } else {
    feedback.textContent = `❌ Wrong! Correct answer: ${correct}`;
    feedback.className = "wrong";
  }
  document.getElementById("nextBtn").disabled = false;
}

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < questions.length) {
    showQuestion();
  } else {
    document.getElementById(
      "quiz-container"
    ).innerHTML = `<h2>🏆 Quiz Finished!</h2><p>Your Score: ${score}/${questions.length}</p>`;
  }
  document.getElementById("score").textContent = `Score: ${score}`;
});

loadQuestions();
