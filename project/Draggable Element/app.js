const draggable = document.getElementById('draggable');

let offsetX, offsetY;

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
  draggable.style.left = x + 'px';
  draggable.style.top = y + 'px';
}

function stopDrag() {
  
  document.removeEventListener('mousemove', draggableMove);
  document.removeEventListener('mouseup', stopDrag);
}
