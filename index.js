function changeHeadingText() {
  const heading = document.getElementById('main-heading');
  heading.textContent = 'DOM Manipulation Challenge';
}

function changeBoxColor() {
  const box = document.getElementById('box-to-modify');
  box.style.backgroundColor = 'lightblue';
}

function addNewItem() {
  const list = document.getElementById('item-list');
  const newItem = document.createElement('li');
  newItem.textContent = 'New Item';
  // Note: Standard exercises often use the 'item' class for new items
  newItem.className = 'item'; 
  list.appendChild(newItem);
}

function highlightParagraph() {
  const paragraph = document.querySelector('.content-para');
  paragraph.classList.add('highlight');
}

function removeElement() {
  const element = document.getElementById('to-be-removed');
  if (element) {
    element.remove();
  }
}

// Do not edit the lines below.
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        changeHeadingText,
        changeBoxColor,
        addNewItem,
        highlightParagraph,
        removeElement
    };
}

