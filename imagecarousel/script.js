const left = document.querySelector('#left');
const right = document.querySelector('#right');
const imgs = document.querySelectorAll('#imgs img');
const imgContainer = document.querySelector('#imgs');
const container = document.querySelector('.carousel');

let idx = 0;

let interval = setInterval(run, 2000);

function changeImage() {
  if (idx > imgs.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = imgs.length - 1;
  }

  imgContainer.style.transform = `translateX(${-idx * 500}px)`;
}

function run() {
  idx++;
  changeImage();
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 2000);
  console.log('interval reset');
}

container.addEventListener('mouseenter', () => {
  clearInterval(interval);
  console.log('interval cleared');
});

container.addEventListener('mouseleave', resetInterval);

right.addEventListener('click', () => {
  idx++;
  changeImage();
  // resetInterval();
});

left.addEventListener('click', () => {
  idx--;
  changeImage();
});
