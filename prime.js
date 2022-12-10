// prime number;

let num1=true;
if(num>1){
   for(i=2;i<num;i++){
       if(num%i===0){
          num1=false;
          break;
       }
   }if(num1){
     console.log("Yes");
}else{
     console.log("No");
}