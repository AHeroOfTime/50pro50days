const codes = document.querySelectorAll('.code');

codes[0].focus();
console.log(codes.length);

codes.forEach((code, idx) => {
  code.value = '';
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[idx].value = '';
      setTimeout(() => codes[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[idx - 1].focus(), 10);
    }
    setTimeout(() => {
      if ((idx = codes.length - 1 && e.target.checkValidity)) {
        code.blur();
      }
    }, 10);
  });
});
