function CalculateBill(){

   
 
  function entercalculateBill(theCost){
      var totalCalcBill = 0;
      var cost = theCost.split(',');
  
      for (var i=0;i<cost.length;i++){
            var bill = cost[i].trim();
          if (bill === 'call'){
            totalCalcBill += 2.75;
          }
          else if (bill === 'sms'){
            totalCalcBill += 0.75;
          }          
      }
      return totalCalcBill.toFixed(2);  
  }


  function getLevel(theCost){
    if (entercalculateBill (theCost) >= 20 && entercalculateBill (theCost) < 30){
        return 'warning';
    }
    else if (entercalculateBill (theCost) >= 30.00){
        return 'danger';
    }
  }
  
  function getTot1 (){
      return totalSms +totalCall;
  }
     
  
      return {       
          getTot1, 
          entercalculateBill,
          getLevel
      }
  }
  
  