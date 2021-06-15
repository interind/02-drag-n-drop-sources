const item = document.querySelector('.item');
const container = document.querySelector('.place');

item.addEventListener('dragstart', dragstart);
item.addEventListener('dragend', dragend);
container.addEventListener('dragover', dragover);
container.addEventListener('dragenter', dragenter);
container.addEventListener('dragleave', dragleave);
container.addEventListener('drop', dragdrop);

function dragstart(evt) {
  evt.target.classList.add('hold');
  setTimeout(() => {
    evt.target.classList.add('item_hidden');
  }, 0);
}

function dragend(evt) {
  evt.target.classList.remove('hold', 'item_hidden');
}

function dragenter(evt) {
  if (evt.target.classList.contains('placeholder')) {
    evt.target.classList.add('hovered');
    setTimeout(() => {
      evt.target.classList.remove('hovered');
    }, 1000);
  };
}

function dragover(evt) {
  evt.preventDefault();
}

function dragleave(evt) {
  if (evt.target.classList.contains('placeholder')) {
    evt.target.className = 'placeholder';
  };
}

function dragdrop(evt) {
  if (evt.target.classList.contains('placeholder')) {
    evt.target.classList.add('placeholder_active');
    setTimeout(() => {
      evt.target.classList.remove('placeholder_active');
    }, 1000);
    evt.target.append(item);
  };
}