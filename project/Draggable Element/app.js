const draggable = document.getElementById('draggable');

let offsetX, offsetY;

// Load saved position from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedLeft = localStorage.getItem('draggableTask1Left');
  const savedTop = localStorage.getItem('draggableTask1Top');

  if (savedLeft && savedTop) {
    draggable.style.position = 'absolute';
    draggable.style.left = savedLeft;
    draggable.style.top = savedTop;
  }
});

draggable.addEventListener('mousedown', (e) => {
  offsetX = e.clientX - draggable.getBoundingClientRect().left;
  offsetY = e.clientY - draggable.getBoundingClientRect().top;

  document.addEventListener('mousemove', draggableMove);
  document.addEventListener('mouseup', stopDrag);
});

function draggableMove(e) {
  const x = e.clientX - offsetX;
  const y = e.clientY - offsetY;

  draggable.style.position = 'absolute';
  draggable.style.left = `${x}px`;
  draggable.style.top = `${y}px`;
}

function stopDrag() {
  // Save position to localStorage
  localStorage.setItem('draggableTask1Left', draggable.style.left);
  localStorage.setItem('draggableTask1Top', draggable.style.top);

  document.removeEventListener('mousemove', draggableMove);
  document.removeEventListener('mouseup', stopDrag);
}
