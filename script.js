const board = document.getElementById("board");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

const modalCategory = document.getElementById("modalCategory");
const modalValue = document.getElementById("modalValue");
const modalQuestion = document.getElementById("modalQuestion");
const modalAnswer = document.getElementById("modalAnswer");
const modalExplanation = document.getElementById("modalExplanation");

const revealBtn = document.getElementById("revealBtn");
const answerBox = document.getElementById("answerBox");

const resetBtn = document.getElementById("resetBtn");
const showAllBtn = document.getElementById("showAllBtn");
const hideAllBtn = document.getElementById("hideAllBtn");

const addScoreBtn = document.getElementById("addScoreBtn");
const subtractScoreBtn = document.getElementById("subtractScoreBtn");

let currentCell = null;

function createBoard() {
  board.innerHTML = "";

  // Create category headers
  jeopardyData.forEach(cat => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.textContent = cat.category;
    board.appendChild(categoryDiv);
  });

  // Create question cells row by row
  for (let row = 0; row < 5; row++) {
    jeopardyData.forEach(cat => {
      const q = cat.questions[row];
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = q.value;

      cell.dataset.used = "false";
      cell.dataset.category = cat.category;
      cell.dataset.value = q.value;
      cell.dataset.question = q.question;
      cell.dataset.answer = q.answer;
      cell.dataset.explanation = q.explanation;

      cell.addEventListener("click", () => openModal(cell));
      board.appendChild(cell);
    });
  }
}

function openModal(cell) {
  if (cell.classList.contains("used")) return;

  currentCell = cell;

  modalCategory.textContent = cell.dataset.category;
  modalValue.textContent = `For ${cell.dataset.value} points`;
  modalQuestion.textContent = cell.dataset.question;
  modalAnswer.textContent = cell.dataset.answer;
  modalExplanation.textContent = cell.dataset.explanation;

  answerBox.classList.add("hidden");
  modal.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
}

revealBtn.addEventListener("click", () => {
  answerBox.classList.remove("hidden");
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

addScoreBtn.addEventListener("click", () => {
  if (currentCell) {
    currentCell.classList.add("used");
    currentCell.textContent = "✔";
    closeModal();
  }
});

subtractScoreBtn.addEventListener("click", () => {
  if (currentCell) {
    currentCell.classList.add("used");
    currentCell.textContent = "✘";
    closeModal();
  }
});

resetBtn.addEventListener("click", () => {
  createBoard();
});

showAllBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(cell => {
    cell.classList.add("used");
    cell.textContent = "?";
  });
});

hideAllBtn.addEventListener("click", () => {
  createBoard();
});

createBoard();