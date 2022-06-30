const rangeInputElements = document.querySelectorAll('.range__input');
const numberInputElements = document.querySelectorAll('.range__number');

function handleInputChange(evt) {
  let target = evt.target;
  if (evt.target.type !== 'range' && evt.target.id == 'amountnumber') {
    target = document.getElementById('amountrange');
  } else if (evt.target.type !== 'range' && evt.target.id == 'monthnumber') {
    target = document.getElementById('monthrange');
  }

  const min = target.min;
  const max = target.max;
  const val = target.value;

  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%';
}

rangeInputElements.forEach(input => {
  input.addEventListener('input', handleInputChange);
});

numberInputElements.forEach(number => {
  number.addEventListener('input', handleInputChange);
});

