function*  numberGenerator(){

    yield 1;
    yield 2;
    yield 3;
    yield 4;

}

let gem = numberGenerator();
let gem2 = numberGenerator();

console.log(gem.next().value);
console.log(gem2.next().value); 
