var myheader= document.querySelector('h1');
myheader.style.color='red';
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  function changeHeaderColor(){
      colorInput = getRandomColor();
      myheader.style.color = colorInput;
  }
    setInterval("changeHeaderColor()",500);
    myheader.addEventListener("mouseover",changeHeaderColor);//mouseover is an event listener that listens for the mouse to hover over the header 