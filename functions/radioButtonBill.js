function RadioButtonBill(){

    var total = 0;
    var smsTot=0;
    var callTot=0;
  
  function checkTheBill(checkedItem){
  
          if (checkedItem === "call"){
              callTot += 2.75;
          }
          else if (checkedItem === "sms"){
              smsTot += 0.75;
          }

          return callTot + smsTot;
      }
  

      function getTheLevels(){
        if (getTot () >= 30 && getTot () < 50){
            return 'warning';
        }
        else if (getTot () >= 50.00){
            return 'danger';
        }
      }
  
  
  function getTot (){
      return callTot +smsTot;
  }
     
  function getCall(){
    return callTot 
}

function getSms (){
    return smsTot;
}
  
      return {       
          getTot, 
          checkTheBill,
          getSms,
          getCall,
          getTheLevels
      }
  }
  
  