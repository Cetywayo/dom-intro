// get a reference to the sms or call radio buttons
var billItemElement = document.querySelector('.billItemTypeRadio')
var callTotalTwoElement = document.querySelector('.callTotalTwo')
var smsTotalTwoElement = document.querySelector('.smsTotalTwo')
var billTotalTwoElement = document.querySelector('.totalTwo')
//get a reference to the add button
var billAddBtnElement = document.querySelector('.radioBillAddBtn')
//create a variable that will keep track of the total bill
var totBill1=0;
var smsTotal1=0;
var callTotal1=0;

function radioBill(){

    //var billTypeText = billTypeTextElem.value.trim();

    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
        if (checkedRadioBtn){
    var billItemType = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
}

    if (billItemType === "call"){
        callTotal1 += 2.75
    }
    else if (billItemType === "sms"){
        smsTotal1 += 0.75;
    }

    callTotalTwoElement.innerHTML = callTotal1.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal1.toFixed(2);
    totBill1= smsTotal1 + callTotal1;
    billTotalTwoElement.innerHTML = totBill1.toFixed(2);

    if (totBill1 >= 50){
        // adding the danger class will make the text red
        billTotalTwoElement.classList.add("danger");
    }
    else if (totBill1 >= 30){
        billTotalTwoElement.classList.add("warning");
    }

    }
    
    


//add an event listener for when the add button is pressed
billAddBtnElement.addEventListener('click',radioBill )


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
