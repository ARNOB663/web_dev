let a =[1,2,3,4,5,6,7,8,9,10];

//normaol for loop
for(var i = 0; i < 5; i++) {
    console.log(i);
}
//for in looop
for(let i in a) {

    console.log(i);
}
//for each loop
a.forEach(function(element) {

    console.log(element);
});
//for of loop
for(let i of a) {

    console.log(i);
}
//map 
let b = a.map(function(element){
    return element * 2;
}
);
//type of funtion
console.log(typeof b);


