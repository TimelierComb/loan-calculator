const minAmountElement=document.querySelector("#minamount"),maxAmountElement=document.querySelector("#maxamount"),minTimeELement=document.querySelector("#mintime"),maxTimeElement=document.querySelector("#maxtime"),loanPercentElement=document.querySelector("#loanpersent");let minAmount,maxAmount,minTime,maxTime,loanPercent;minAmountElement.addEventListener("change",(()=>{minAmount=minAmountElement.value,console.log(minAmount)})),maxAmountElement.addEventListener("change",(()=>{maxAmount=maxAmountElement.value,console.log(maxAmount)})),minTimeELement.addEventListener("change",(()=>{minTime=minTimeELement.value,console.log(minTime)})),maxTimeElement.addEventListener("change",(()=>{maxTime=maxTimeElement.value,console.log(maxTime)})),loanPercentElement.addEventListener("change",(()=>{loanPercent=loanPercentElement.value,console.log(loanPercent)}));export{minAmount,maxAmount,minTime,maxTime,loanPercent};