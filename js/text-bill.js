// get a reference to the textbox where the bill type is to be entered
var billTypeTextElem = document.querySelector('.billTypeText')
var addToBillBtnElem = document.querySelector('.addToBillBtn')
var btn = document.querySelector('.addToBillBtn')
var callTotalOneElem = document.querySelector('.callTotalOne')
var smsTotalOneElem = document.querySelector('.smsTotalOne')
var totalOneElem = document.querySelector('.totalOne')
//get a reference to the add button
var addbtnElem = document.querySelector('.addToBillBtn')

//create a variable that will keep track of the total bill
var totbill=0;
var smsTotal=0;
var callTotal=0;


function textBillTotal(){
    // get the value entered in the billType textfield
    var billTypeText = billTypeTextElem.value.trim();
    // update the correct total
    if (billTypeText === "call"){
        callTotal += 2.75
    }
    else if (billTypeText === "sms"){
        smsTotal += 0.75;
    }
    
    //update the totals that is displayed on the screen.
    callTotalOneElem.innerHTML = callTotal.toFixed(2);
    smsTotalOneElem.innerHTML = smsTotal.toFixed(2);
    totbill = callTotal + smsTotal;
    totalOneElem.innerHTML = totbill.toFixed(2);

    if (totbill >= 50){
        // adding the danger class will make the text red
        totalOneElem.classList.add("danger");
    }
    else if (totbill >= 30){
        totalOneElem.classList.add("warning");
    }
}

//btn.addEventListener("click", textBillTotal)
//add an event listener for when the add button is pressed

addToBillBtnElem.addEventListener('click', textBillTotal)



//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
