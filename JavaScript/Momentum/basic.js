/*

function handleOffline() {
  console.log('bye bye');
}

function handleOnline() {
  console.log('welcome back');
}

window.addEventListener('offline', handleOffline);
window.addEventListener('online', handleOnline);
*/

const title = document.querySelector('#title');

const CLICKED_CLASS = 'clicked';

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
  /*
  // toggle을 사용하면 밑에있는 함수를 toggle 하나로 요약해 사용할 수 있다
  const hasClass = title.classList.contains(CLICKED_CLASS);
  if (hasClass) {
    title.classList.remove(CLICKED_CLASS);
  } else {
    title.classList.add(CLICKED_CLASS);
  }
  */
}

function init() {
  title.addEventListener('click', handleClick);
}
init();
