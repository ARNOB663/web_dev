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

