const boxes = document.querySelectorAll(".box");
const droppableContainer = document.querySelector(".droppable");
const message = document.querySelector(".message");
const resetButton = document.querySelector(".reset-button");

let draggedItem = null;

boxes.forEach((box) => {
  box.addEventListener("dragstart", dragStart);
  box.addEventListener("dragend", dragEnd);
});

droppableContainer.addEventListener("dragover", dragOver);
droppableContainer.addEventListener("dragenter", dragEnter);
droppableContainer.addEventListener("dragleave", dragLeave);
droppableContainer.addEventListener("drop", drop);

function dragStart() {
  draggedItem = this;
  setTimeout(() => {
    this.style.opacity = "0.5";
  }, 0);
}

function dragEnd() {
  this.style.opacity = "1";
  draggedItem = null;
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("droppable");
}

function dragLeave() {
  this.classList.remove("droppable");
}

function drop() {
  this.classList.remove("droppable");
  this.appendChild(draggedItem);
  message.textContent = "Item dropped!";
}

resetButton.addEventListener("click", reset);

function reset() {
  droppableContainer.innerHTML = "";
  boxes.forEach((box) => {
    box.style.opacity = "1";
    box.classList.remove("droppable");
    document.querySelector(".container").appendChild(box);
  });
  message.textContent = "";
}
