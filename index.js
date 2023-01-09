var randomnumber1= Math.floor(Math.random() * 6) + 1;

var randomdiceeimage = "dice" + randomnumber1 + ".png";

var randomImageSrc1 = "images/" + randomdiceeimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSrc1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImageSrc2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

if(randomnumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "Play 1 Wins";
}
else if(randomNumber2>randomnumber1)
{
  document.querySelector("h1").innerHTML = "Play 2 Wins";
}
else
{
  document.querySelector("h1").innerHTML = "Draw";
}
