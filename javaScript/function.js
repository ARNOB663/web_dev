//function
//funtion declaration 
// function cheak_result(result){//variable
// if(result>=80){
//     console.log("A+");
// }
//     else if(result>=70){
//         console.log("A");
//     }
//     else if(result>=60){
//         console.log("B");
//     }
//     else if(result>=50){
//         console.log("C");
//     }
//     else if(result>=40){
//         console.log("D");
//     }
//     else{
//         console.log("Fail");
//     }
// }
// cheak_result(90);
// cheak_result(80);
// cheak_result(70);
// cheak_result(60);
// const cheak_result = function(result){//variable
const cheak_result = function(result){

    if(result>=80){
        console.log("A+");
    }
        else if(result>=70){
            console.log("A");
        }
        else if(result>=60){
            console.log("B");
        }
        else if(result>=50){
            console.log("C");
        }
        else if(result>=40){
            console.log("D");
        }
        else{
            console.log("Fail");
        }
    }

cheak_result(90);

//function expression
const add = function(a,b){//variable
  return a+b;
}
console.log(add(4,5));
//arrow function


const multiply = function(a,b,c,d){

    return a*b*c*d;
}
console.log(multiply(2,3,4,5));

