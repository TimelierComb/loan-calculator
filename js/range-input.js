const rangeInputElements=document.querySelectorAll(".range__input"),numberInputElements=document.querySelectorAll(".range__number");function handleInputChange(e){let n=e.target;"range"!==e.target.type&&"amountnumber"==e.target.id?n=document.getElementById("amountrange"):"range"!==e.target.type&&"monthnumber"==e.target.id&&(n=document.getElementById("monthrange"));const t=n.min,a=n.max,r=n.value;n.style.backgroundSize=100*(r-t)/(a-t)+"% 100%"}rangeInputElements.forEach((e=>{e.addEventListener("input",handleInputChange)})),numberInputElements.forEach((e=>{e.addEventListener("input",handleInputChange)}));