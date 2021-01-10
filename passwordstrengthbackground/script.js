// My solution
// const background = document.getElementById('background');
// const password = document.getElementById('password');

// password.addEventListener('keyup', () => {
//   let length = password.value.length;
//   let blur = 20;
//   if (length) {
//     background.style.filter = `blur(${blur - 2 * length}px)`;
//     console.log(length);
//   } else {
//     background.style.filter = `blur(${blur}px)`;
//   }
// });

const password = document.getElementById('password');
const background = document.getElementById('background');

password.addEventListener('input', (e) => {
  const input = e.target.value;
  const length = input.length;
  const blurValue = 20 - length * 2;
  background.style.filter = `blur(${blurValue}px)`;
});
