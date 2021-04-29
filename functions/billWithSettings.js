function BillWithSettings(){

    var theCallCost=0;
    var smsBill=0;
    var warningLevel=0;
    var criticalLevel=0;

    var totalSms = 0;
    var totalCall = 0;
   // var totalForAll = 0;

  

    function setCallCost(callcost){
        theCallCost= callcost;
    }

    function getCallCost(){
        return theCallCost;
    }


    function setSmsCost(smscost){
        smsBill= smscost;
    }

    function getSmsCost(){
        return smsBill;
    }

    function setWarningLevel(wlevel){
        warningLevel = wlevel;
    }

    function getWarning (){
         return warningLevel;
    }

    function setCriticalLevel(clevel){
        criticalLevel = clevel;
    }

    function getCritical (){
        return criticalLevel
    }
    
    function makeCall(){
      if(!hasReachedCriticalLevel()){
        totalCall += theCallCost ;
      }
      

    }

    function getTotalCallcost(){ //total call
        return totalCall;
    }

    function getTotalSmscost(){
        return totalSms;
    }

    function getTotalcost(){
        return totalCall + totalSms;
    }

    function addTotals(billType){
      if(billType==="call"){
        makeCall()  
      }
      if(billType === "sms"){
        sendSms()
      }
    }

    function sendSms(){
        if(!hasReachedCriticalLevel()){
            totalSms += smsBill ;
          }
    }

    function hasReachedCriticalLevel(){
        return getTotalcost() >= getCritical() && getCritical()!= 0;
    }

    function addClass(){

        if (hasReachedCriticalLevel()){
            return "danger"
          }

        if (getTotalcost() >= getWarning() && getWarning() != 0 ){
          return "warning"
        }

    }
    

    return {
        setCallCost,
        getCallCost,
        setSmsCost,
        getSmsCost,
        getWarning,
        setWarningLevel,
        getCritical,
        setCriticalLevel,
        makeCall,
        getTotalcost,
        getTotalCallcost,
        getTotalSmscost,
        sendSms,
        addClass,
        addTotals       
       
    }
}