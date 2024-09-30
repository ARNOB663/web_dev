var q1=prompt("what is your first name");
var q2=prompt("what is your last name");
var q3=prompt("what is your age");
alert("Your full name is "+q1+" "+q2);
var q4=prompt("how tall are you in cm?");
var q5=prompt("what is your pet name");

var result=true;

if(q1[0]!==q2[0]){
    result=false;
}
if(q3<20 || q3>30){
    result=false;
}
if(q4<170){
    result=false;
}
if(q5[q5.length-1]!=="y"){
    result=false;
}
if(result===true){
   alert("Welcome to the club");
}
else{
    alert("Sorry, you are not allowed to enter the club");
}
