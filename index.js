// Get the containers and items
const container1 = document.querySelector('.container:nth-of-type(1)');
const container2 = document.querySelector('.container:nth-of-type(2)');
const items = document.querySelectorAll('.item');

// Add event listeners for drag events
items.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

// Add event listeners for drop events
container2.addEventListener('dragover', dragOver);
container2.addEventListener('dragenter', dragEnter);
container2.addEventListener('dragleave', dragLeave);
container2.addEventListener('drop', drop);

// Store the dragged item and apply dragging styles
let draggedItem = null;

function dragStart() {
  draggedItem = this;
  this.classList.add('dragging');
}

function dragEnd() {
  this.classList.remove('dragging');
}

// Handle drop events
function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add('dragover');
}

function dragLeave() {
  this.classList.remove('dragover');
}

function drop() {
  this.classList.remove('dragover');
  this.appendChild(draggedItem);
  draggedItem = null;
  showSuccessMessage();
}

// Show success message on drop
function showSuccessMessage() {
  const message = document.createElement('div');
  message.classList.add('success');
  message.textContent = 'Item dropped!';
  container2.appendChild(message);
  setTimeout(() => {
    message.remove();
  }, 2000);
}

// Reset containers and items to their original state
function resetContainers() {
  container1.innerHTML = `
    <h2>Container 1</h2>
    <div class="item" draggable="true">Select Items<span class="material-symbols-outlined">
            near_me
            </span></div>
          <div class="item" draggable="true">Add To Cart<span class="material-symbols-outlined">
            shopping_cart
            </span></div>
          <div class="item" draggable="true">Delivery <span class="material-symbols-outlined">
            local_shipping
            </span></div>
          <div class="item" draggable="true">Payment  <span class="material-symbols-outlined">
            payments
            </span></div>
        </div>
  `;
  container2.innerHTML = `<h2>Container 2</h2>`;
  items.forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
  });
}
