var randomNumber1 = Math.random();
randomNumber1= randomNumber1*6;

randomNumber1= (Math.floor(randomNumber1)+1);

var diceimage1 = "dice"+randomNumber1+".png"; 

var imagesource1 ="images/"+diceimage1;


var img1 = document.querySelectorAll("img")[0];
var img2 = document.querySelectorAll("img")[1];

img1.setAttribute("src", imagesource1);

var randomNumber2= Math.floor(Math.random()*6)+1;

var diceimage2 ="dice"+randomNumber2+".png";

var imagesource2 ="images/"+diceimage2;

img2.setAttribute("src", imagesource2);

var title = document.querySelector("h1");

if(randomNumber1 > randomNumber2){
    title.innerHTML= "Player One 😌 Wins";
}
else if(randomNumber2 > randomNumber1){
    title.innerHTML ="Player two 😋 wins";
}
else{
    title.innerHTML="DRAW!😗";
}