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

const multiply = function(a,b,c,d){//variable
    return a*b*c*d;
}
console.log(multiply(2,3,4,5));
//arrow function

//call back funtion
function greeting(name){
    console.log("Hello "+name);
}
function processUserInput(callback){
    var name = "Arafat";
    callback(name);
}
processUserInput(greeting);
//write an call back funtion

const add1 = function(a,b,callback){
    return callback(a+b);
}
const callback = function(result){
    return result;
}
console.log(add1(4,5,callback));

//write an call back funtion

const add2 = function(a,b,c){

    return a+b+c;
}

const devide = function(result){

    return result/2;
}
console.log(add(4,5,devide));

//ticket booking system using call back funtion
const bookTicket = function(name,price,callback){
    return callback(name,price);
}
//
const callback1 = function(name,price){
    console.log("Ticket booked for "+name+" and price is "+price);
}
bookTicket("Arafat",500,callback1);
// log in cheak seat avilable or not booking and payment system using call back funtion
const logIn = function(email,password,callback){
    return callback(email,password);
}
const callback2 = function(email,password){
    if(email=="" || password
    ==""){
        console.log("Please enter your email and password");
    }
}
const add3=function(a){
    return function(b){
        return a+b;
    }

}
const res = add3(2); //result is a function stored in result variable
const ans= res(3)//result is a function stored in ans variable  this called closure property
console.log(ans);
//closure property
const add4 = function(a){ //closure property
    return function(b){  //closure property
        return function(c){ //closure property
            return a*b*c;
        }
    }
}
const result = add4(2)(3)(3); //
// const result1 = result(3); //closure property
// const result2 = result1(4);//
console.log(result);
//closuer property explaine in a simple way 
// const add5 = function(a){
//     return function(b){
//         return a+b;
//     }
// }
// const result = add5(2)(3);
// console.log(result);
//closure property
const add5 = function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
const result5 = add5(2)(3)(4);//closure property


