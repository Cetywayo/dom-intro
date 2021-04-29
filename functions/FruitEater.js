function FruitEater(){

var totApples=0;
var totPears=0;

function eat (fruit){
   if (fruit=== 'apple'){
    totApples +=1 ;
   }

   else if (fruit=== 'pear') {
    totPears +=1;
   }
   
}


 function applesEaten(){
    return totApples;
    
 }
 function pearsEaten(){
    
    return  totPears; 
 }
 return{
    eat,
    applesEaten,
    pearsEaten
 }

}


