<<<<<<< HEAD:Dicee Challenge - Starting Files/index.js
function zarAt() {
  var randomNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomNumber2 = Math.floor(Math.random() * 6 + 1);
  var images1 = "images/dice" + randomNumber1 + ".png";
  var images2 = "images/dice" + randomNumber2 + ".png";
  $(".img1").attr("src", images1);
  $(".img2").attr("src", images2);
  if (randomNumber1 > randomNumber2) {
    $("h1").html("🚩Player 1 Wins!");
  } else if (randomNumber1 < randomNumber2) {
    $("h1").html("Player 2 Wins!🚩");
  } else if (randomNumber1 === randomNumber2) {
    $("h1").html("Draw");
  }
}
$(".tekrarat").on("click", function () {
    zarAt();
  });
  
=======
var randomNumber1=Math.floor((Math.random()*6)+1);
var randomNumber2=Math.floor((Math.random()*6)+1);
var images1="images/dice"+randomNumber1+".png";
var images2="images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", images1);
document.querySelector(".img2").setAttribute("src", images2);
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}else if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw";
}
>>>>>>> b052eded6679703728bb236f7a837650acfbde81:index.js
