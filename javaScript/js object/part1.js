 var carinfo = {make: "toyota",year: 1990 , model: "camry"};
  carinfo; // {make: "toyota", year: 1990, model: "camry"}
  console.log(carinfo); // {make: "toyota", year: 1990, model: "camry"}
  console.log(carinfo.make); // toyota


  var simple={
prop: "Hello",
myMethod: function(){
console.log('The myMethod was called');

  }
}
simple.myMethod(); // The myMethod was called
console.log(simple.prop); // Hello
console.log(simple.myMethod); // ƒ (){console.log('The myMethod was called');} 
var myobj={
    name: "jose",
    greet: function(){
        console.log("Hello "+this.name);
    }
}
myobj.greet(); // Hello joseh 

