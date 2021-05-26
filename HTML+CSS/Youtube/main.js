const button = document.querySelector(
    '.info .metadata .titleAndButton .moreBtn'
  ),
  title = document.querySelector('.info .metadata .titleAndButton .title');

CLICKED = 'clicked';

function addClass() {
  title.classList.toggle(CLICKED);
  button.classList.toggle(CLICKED);
}

button.addEventListener('click', addClass);
