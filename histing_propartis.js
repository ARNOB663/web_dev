//hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope before code execution.
// The hoisting is JavaScript's default behavior of moving declarations to the top.
// JavaScript only hoists declarations, not initializations.
   //example 1
    console.log(x === undefined); // true
    var x = 3;
    //example 2
    var myvar = 'my value';
    (function() {
      console.log(myvar); // undefined
      var myvar = 'local value';
    })();
    //example 3
    var myvar = 'my value';
    (function() {
      console.log(myvar); // undefined
      var myvar = 'local value';
    })(); 