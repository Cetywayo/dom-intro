function TextBill(){

    

    var total = 0;
    var smsTot=0;
    var callTot=0;
    var warning=0;
    var critical=0;
  
  function enterTextBill(theCost){
      
  
          if (theCost === "call"){
              callTot += 2.75;
          }
          else if (theCost === "sms"){
              smsTot += 0.75;
          }
          return callTot + smsTot;
      }

   

      function getCall(){
          return callTot;
         
      }

      function getSms(){
        return smsTot;
    }
  
  
  function getTot (){
      total= callTot +smsTot;
      return total
  }

  function addClassLevels(){

    if (enterTextBill() >= 30 && enterTextBill() < 50){
        return 'warning';

    }else if (enterTextBill() >= 50.00){
        return 'danger';
        
    }

  }
  

 
     
  
      return {       
          getTot, 
          enterTextBill,
          getCall,
          getSms,
          addClassLevels
          
          
      }
  }
  
  