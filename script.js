let tasks = [];
document.addEventListener("DOMContentLoaded", function () {
  const stored = JSON.parse(localStorage.getItem("tasks"));
  if (stored) {
    stored.forEach(function (task) {
      tasks.push(task);
      updateList();
    });
  }
});

function saveData() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const taskInput = document.getElementById("task-input");
  const quest = taskInput.value.trim();
  if (quest) {
    tasks.push({ text: quest, completed: false });
  }
  updateList();
  updateStats();
  saveData();
}
function updateList() {
  const questList = document.getElementById("task-list");
  questList.innerHTML = "";
  tasks.forEach(function (task, index) {
    const listedQuest = document.createElement("li");
    listedQuest.innerHTML = `
                <div class="taskItem">
                    <span class="Quest-to-do">${task.text}</span>
                    <div class="task-actions">
                    <button class="complete-btn complete-btn-css">${
                      task.completed ? "Undo" : "Completed"
                    }</button>
                    <button class="delete-btn delete-btn-css">Delete</button>
                    </div>
                </div>
    `;
    const taskText = listedQuest.querySelector(".Quest-to-do");
    const completeBtn = listedQuest.querySelector(".complete-btn");
    const deleteBtn = listedQuest.querySelector(".delete-btn");

    if (task.completed) {
      taskText.style.color = "#2abd62ff";
      taskText.style.textDecoration = "line-through";
      taskText.style.opacity = "0.48";
    }

    completeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      tasks[index].completed = !tasks[index].completed;
      updateList();
      updateStats();
      saveData();
    });
    deleteBtn.addEventListener("click", function (e) {
      e.preventDefault();
      alert("Fatt Gyi Kya Bsdk?? Aise banega TOP 1%??")
    });
    questList.append(listedQuest);
  });
}

function updateStats() {
  const completedTask = tasks.filter((task) => task.completed);
  const totalTask = tasks.length;
  const progress = totalTask > 0 ? (completedTask.length / totalTask) * 100 : 0;
  const progressBar = document.getElementsByClassName("experience-bar")[0];
  if (progressBar) {
    progressBar.style.width = `${progress}%`;
  }
  const xp_stored = JSON.parse(localStorage);
}
function xpStoring() {
  const xp_stored = JSON.parse(localStorage.getItem("progressBar"));
}
document.getElementById("task-btn").addEventListener(
  "click",
  function (e) {
    e.preventDefault();

    addTask();
    saveData();
  },
  false
);

const rulesBtn = document.getElementById("rules-btn");
const rulesModal = document.getElementById("rules-modal");
const closeBtn = document.getElementById("close-btn");

rulesBtn.addEventListener("click", () => {
  rulesModal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  rulesModal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === rulesModal) {
    rulesModal.classList.add("hidden");
  }
});

