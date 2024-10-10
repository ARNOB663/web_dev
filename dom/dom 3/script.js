//example 6
document.getElementById("clickMeButton").addEventListener('mouseover', function(){

    alert("chaicode");
});   
//example 7

document.getElementById("tealist")
.addEventListener('click', function(event){

if(event.target && event.target.matches('teaItem')){
    alert("chaicode");
}
});