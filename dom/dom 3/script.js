//example 6
document.getElementById("clickMeButton").addEventListener('mouseover', function(){

    alert("chaicode");
});   
//example 7

document.getElementById("tealist")
.addEventListener('click', function(event){

if(event.target && event.target.matches('.teaItem')){
    alert("You selected: "+event.target.textContent);

}
});
//example 8
document.getElementById("feedbackFrom").addEventListener('submit',function(event){

alert("submited");


})