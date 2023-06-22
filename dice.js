



var randomNum1=Math.floor(Math.random()*6)+1;
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNum1 + ".png");

var randomNum2=Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNum1 + ".png");

var one = randomNum1;
var two = randomNum2;

var text = document.querySelector("h1");

if( one > two){
    text.textContent = "Player 1 Won"
}
else if(two > one){
    text.textContent = "Player 2 Won"
}
else if(one === two){
    text.textContent = "Draw"
}

