const loanAmountElement = document.querySelector('#amountnumber');
const rangeInputElement = document.querySelector('#amountrange');
const monthAmountElement = document.querySelector('#monthnumber');
const monthRangeElement = document.querySelector('#monthrange');
const percentElement = document.querySelector('#persent');
const totalPaymentElement = document.querySelector('#total-payment');
const monthPaymentElement = document.querySelector('#month-payment');
const diffCheckboxElement = document.querySelector('#differentiated');
const annuityCheckboxElement = document.querySelector('#annuity');

let percent = percentElement.textContent / 100;
percent = percent.toFixed(3);

function calculateTotalPayment () {
  let totalPayment;
  if (diffCheckboxElement.checked) {
    totalPayment = percent * loanAmountElement.value;
    totalPayment = totalPayment.toFixed();
    totalPaymentElement.textContent = totalPayment;
  } else {
    totalPayment = percent * loanAmountElement.value * Math.pow(1 + percent, monthAmountElement.value) / (Math.pow(1 + percent, monthAmountElement.value) - 1);
    totalPayment = totalPayment.toFixed();
    console.log(totalPayment);
    totalPaymentElement.textContent = totalPayment;
  }
}

rangeInputElement.addEventListener('change', calculateTotalPayment);
loanAmountElement.addEventListener('change', calculateTotalPayment);
monthAmountElement.addEventListener('change', calculateTotalPayment);
monthRangeElement.addEventListener('change', calculateTotalPayment);
diffCheckboxElement.addEventListener('change', calculateTotalPayment);
annuityCheckboxElement.addEventListener('change', calculateTotalPayment);

