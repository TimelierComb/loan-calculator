const minAmountElement = document.querySelector('#minamount');
const maxAmountElement = document.querySelector('#maxamount');
const minTimeELement = document.querySelector('#mintime');
const maxTimeElement = document.querySelector('#maxtime');
const loanPercentElement = document.querySelector('#loanpersent');

let minAmount;
let maxAmount;
let minTime;
let maxTime;
let loanPercent;

minAmountElement.addEventListener('change', () => {
  minAmount = minAmountElement.value;
  console.log(minAmount);
})

maxAmountElement.addEventListener('change', () => {
  maxAmount = maxAmountElement.value;
  console.log(maxAmount);
})

minTimeELement.addEventListener('change', () => {
  minTime = minTimeELement.value;
  console.log(minTime);
})

maxTimeElement.addEventListener('change', () => {
  maxTime = maxTimeElement.value;
  console.log(maxTime);
})

loanPercentElement.addEventListener('change', () => {
  loanPercent = loanPercentElement.value;
  console.log(loanPercent);
})

export {minAmount, maxAmount, minTime, maxTime, loanPercent}




