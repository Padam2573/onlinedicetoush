

var randomNumber1 = Math.floor(Math.random()*6)+1 ;
var randomImage = "images/padam (" + randomNumber1 + ").png";
var image1 = document.querySelectorAll("img")[0].setAttribute("src", randomImage);


var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomImage1 = "images/padam (" + randomNumber2 + ").png";
var image = document.querySelectorAll("img")[1].setAttribute("src",randomImage1)


if (randomNumber1>randomNumber2){
document.querySelector("h1").innerHTML = "👏 Player 1 Wins!! ";
} else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = " Player 2 Wins!!👏 ";
} else{
  document.querySelector("h1").innerHTML = " Its draw Try Again!!👏 ";
}
