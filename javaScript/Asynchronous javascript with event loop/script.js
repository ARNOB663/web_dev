function hello(){
    console.log('Hello');
}

setTimeout(() => {
 hello();
}, 2000);
for(let i = 0; i < 10; i++){
    console.log(i);
}
