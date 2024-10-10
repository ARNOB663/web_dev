//exmaple 1
// let hold = document.getElementById("changeTextButton");
// console.log(hold);
document.getElementById("changeTextButton").addEventListener("click",function () { //this is an event listener that listens for a click event on the button with the id of changeTextButton

console.log(this);

});
document.getElementById("changeTextButton").addEventListener("click",()=>    { //this is an event listener that listens for a click event on the button with the id of changeTextButton
    let paragraph=document.getElementById("myParagraph");
    //console.log(paragraph);// this will log the paragraph element
    //console.log(paragraph.innerHTML);//this will log the innerHTML of the paragraph
    paragraph.innerHTML="this paragraph is changed";//this will change the innerHTML of the paragraph
    });

    //example 2
    document.getElementById("highlightFirstCity").addEventListener("click", function(){
 let citiesList = document.getElementById("citiesList");
//console.log(citiesList.firstElementChild);
citiesList.firstElementChild.classList.add("highlight");//this will add the class of highlight to the first child of the citiesList element

    }); //this is an event listener that listens for a click event on the button with the id of highlightFirstCity
//example 3

document.getElementById("changeOrder").addEventListener("click", function(){

   let coffeeType = document.getElementById("coffeeType");
   coffeeType.textContent = "Espresso";//this will change the text content of the coffeeType element to Espresso
   coffeeType.style.backgroundColor = "red";//this will change the color of the text
   coffeeType.style.padding = "5px";//this will change the color of the text
});

//example 4
document.getElementById("addNewItem").addEventListener('click', function(){
 let NewItem= document.createElement("li");//this will create a new list item element
 NewItem.textContent = "MOCA";//this will change the text content of the new list item element
 document.getElementById("coffeeList").appendChild(NewItem);//this will append the new list item element to the coffeeList element
document.getElementById("coffeeList")

});
//example 5

document.getElementById("removeItem").addEventListener('click', function(){
    let coffeeList = document.getElementById("shoppingList");
    coffeeList.removeChild(coffeeList.lastElementChild);//this will remove the last child of the coffeeList element
});

