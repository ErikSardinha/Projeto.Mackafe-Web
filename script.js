var myIndex = 0;
function Slide() {
	var i;
    var x = document.getElementsByClassName("Slide");
	var y = document.getElementsByClassName("Slide1");
	for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
	for (i = 0; i < y.length; i++) {
       y[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    if (myIndex > y.length) {myIndex = 1}    
    y[myIndex-1].style.display = "block"; 
	setTimeout(Slide, 5000);
}

function AbrirMenu(){
document.getElementsByTagName("nav")[0].style.display = "block";
document.getElementById("x").style.display = "block";	
}
function FecharMenu(){
document.getElementsByTagName("nav")[0].style.display = "none";
document.getElementById("FechaMenu")[0].style.display = "none";
}
var ul;
var liItems; 
var imageWidth;
var imageNumber;

function init(){

    ul = document.getElementById(‘image_slider’);
    liItems = ul.children;
    imageNumber = liItems.length;
    imageWidth = liItems[0].children[0].offsetWidth;
    // set ul’s width as the total width of all images in image slider.
    ul.style.width = parseInt(imageWidth * imageNumber) + ‘px’;
    slider(ul);
}