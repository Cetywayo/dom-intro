// get a reference to the sms or call radio buttons

var settingsElement = document.querySelector('.billItemTypeWithSettings')


var callsTotElement = document.querySelector('.callTotalSettings')
var smsTotElement = document.querySelector('.smsTotalSettings')
var totalElement = document.querySelector('.totalSettings')

// get refences to all the settings fields

var callsCostSettingElement = document.querySelector('.callCostSetting')
var smsCostSettingElement = document.querySelector('.smsCostSetting')
var warningSettingElement = document.querySelector('.warningLevelSetting')
var criticalSettingElement = document.querySelector('.criticalLevelSetting')



//get a reference to the add button
var addBtnSettingElement = document.querySelector('.addSettingsBtn')
//get a reference to the 'Update settings' button
var updateBtnSettingElement = document.querySelector('.updateSettings')


// create a variables that will keep track of all the settings
var smsSetting;
var callsSetting;
var warning;
var critical;


// create a variables that will keep track of all three totals.
var smsTotalSettings=0;
var callsTotalSettings=0;
var totSetiingBill= 0;


function settingTheBills(){
    callsSetting = callsCostSettingElement.value
    smsSetting = smsCostSettingElement.value
    warning =  warningSettingElement.value
    critical = criticalSettingElement.value
    addClass()
    // console.log("call " +callsSetting,  " sms " + smsSetting,  " warning " + warning  )
}



function addButton(){
    
var itemSetting;
     var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        if (checkedRadioBtn){
            itemSetting  = checkedRadioBtn.value
    // billItemType will be 'call' or 'sms'
    if(itemSetting==="call"){
        callsTotalSettings+= callsSetting
        totSetiingBill+= callsSetting
    }

   else if(itemSetting==="sms"){
        smsTotalSettings+= smsSetting
        totSetiingBill+= smsSetting
    }

}


addClass()





    callsTotElement.innerHTML = totSetiingBill.toFixed(2);
    smsTotElement.innerHTML = smsTotalSettings.toFixed(2);
    totSetiingBill = smsTotalSettings + callsTotalSettings;
    totalElement.innerHTML = totSetiingBill.toFixed(2);
   
    

    }



function addClass(){

    if (totSetiingBill >= 50){
        // adding the danger class will make the text red
        totalElement.classList.add("danger");
    }
    else if (totSetiingBill >= 30){
        totalElement.classList.add("warning");
    }

    }




//add an event listener for when the 'Update settings' button is pressed
updateBtnSettingElement.addEventListener('click', settingTheBills)

//add an event listener for when the add button is pressed
addBtnSettingElement.addEventListener('click', addButton)

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
