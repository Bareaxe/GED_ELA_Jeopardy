const board = document.getElementById("board");

const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closeBtn");

const modalCategory = document.getElementById("modalCategory");
const modalValue = document.getElementById("modalValue");
const modalQuestion = document.getElementById("modalQuestion");

const revealBtn = document.getElementById("revealBtn");
const answerBox = document.getElementById("answerBox");
const modalAnswer = document.getElementById("modalAnswer");
const modalExplanation = document.getElementById("modalExplanation");

const markCorrectBtn = document.getElementById("markCorrectBtn");
const markWrongBtn = document.getElementById("markWrongBtn");

const resetBtn = document.getElementById("resetBtn");

let currentCell = null;

function createBoard() {
  board.innerHTML = "";

  // Category Headers
  jeopardyData.forEach(cat => {
    const categoryDiv = document.createElement("div");
    categoryDiv.classList.add("category");
    categoryDiv.textContent = cat.category;
    board.appendChild(categoryDiv);
  });

  // Question Rows (5 rows)
  for (let row = 0; row < 5; row++) {
    jeopardyData.forEach(cat => {
      const q = cat.questions[row];

      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.textContent = q.value;

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

markCorrectBtn.addEventListener("click", () => {
  if (!currentCell) return;

  currentCell.classList.add("used");
  currentCell.textContent = "✔";
  closeModal();
});

markWrongBtn.addEventListener("click", () => {
  if (!currentCell) return;

  currentCell.classList.add("used");
  currentCell.textContent = "✘";
  closeModal();
});

resetBtn.addEventListener("click", () => {
  createBoard();
});

createBoard();
