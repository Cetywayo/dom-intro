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
    if(callsCostSettingElement.value && smsCostSettingElement.value ){
        callsSetting = Number(callsCostSettingElement.value)
        smsSetting = Number(smsCostSettingElement.value)
        warning =  warningSettingElement.value
        critical = criticalSettingElement.value
        addClass()
    }
   
    
}



function addButton(){    
     var checkedRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
        if (checkedRadioBtn){
            var itemSetting  = checkedRadioBtn.value
             // billItemType will be 'call' or 'sms'
             if (totSetiingBill < critical){
                if(itemSetting==="call"){
                    callsTotalSettings += callsSetting
                // callTotals1 += callsSetting
                }
    
                else if(itemSetting==="sms"){
                    smsTotalSettings += smsSetting
                    //smsTotals1+= smsSetting
                }
    
             }
            
        }




    callsTotElement.innerHTML = callsTotalSettings.toFixed(2);
    smsTotElement.innerHTML = smsTotalSettings.toFixed(2);
    totSetiingBill = smsTotalSettings + callsTotalSettings;
    totalElement.innerHTML = totSetiingBill.toFixed(2);
    
    addClass()
    

}



function addClass(){

    if (totSetiingBill >= critical){
        // adding the danger class will make the text red
        totalElement.classList.add("danger");
        totalElement.classList.remove("warning");
    }
    else if (totSetiingBill >= warning){
        totalElement.classList.add("warning");
        totalElement.classList.remove("danger");
    }

    else {
        totalElement.classList.remove("warning");
        totalElement.classList.remove("danger");
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
