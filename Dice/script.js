var diceImages = [
    "images/dice1.png",  // Image for d1 = 1
    "images/dice2.png",  // Image for d1 = 2
    "images/dice3.png",  // Image for d1 = 3
    "images/dice4.png",  // Image for d1 = 4
    "images/dice5.png",  // Image for d1 = 5
    "images/dice6.png"   // Image for d1 = 6
];

var d1 = document.getElementById("diceA").innerHTML = Math.floor((Math.random()*6)+1);
var d2 = document.getElementById("diceB").innerHTML = Math.floor((Math.random()*6)+1);

document.querySelector(".img1").src = diceImages[d1-1];
document.querySelector(".img2").src = diceImages[d2-1];

function winner(){
if(d1>d2){
    document.getElementById("batwinImage").src = "images/batwin2.gif"; // Set the image source
    document.getElementById("batwinImage").style.display = "block";
    return ("Player 1 has won");
}
else if (d2>d1){
    document.getElementById("SuperwinImage").src = "images/superwin.gif"; // Set the image source
    document.getElementById("SuperwinImage").style.display = "block";
    return ("Player 2 has won");
}
else 
document.getElementById("movingImage").src = "images/joker.jpg"; // Set the image source
document.getElementById("movingImage").style.display = "block";
document.getElementById("movingImage2").src = "images/joker.jpg"; // Set the image source
document.getElementById("movingImage2").style.display = "block";
return ("🥊Do a Re-match🥊");}

document.getElementById("result").innerHTML = winner();

