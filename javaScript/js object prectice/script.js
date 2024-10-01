var employee={
name: "John Smith",
job: "Programmer",
age: 31, namelength: function(){
console.log(this.name.length);
},
lastnamelength: function(){
    var splitname=this.name.split("m");// split the name into two parts using the space as the separator    
    console.log(splitname[1].length);
}
}
employee.namelength();
employee.lastnamelength();
// John Smith