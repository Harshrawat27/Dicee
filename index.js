
// Generating a random Number
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;


var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

// Making Array of Images 
var myImages = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice5.png","images/dice6.png"];

// Assign Random Images 
var image1 = document.querySelector(".img1"); 
image1.setAttribute("src", myImages[randomNumber1]);

var image2 = document.querySelectorAll("img")[1]; 
image2.setAttribute("src", myImages[randomNumber2]);

// change Title accoring to will 

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 win";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerText = "Player 2 win🚩";
}
else{
    document.querySelector("h1").innerText = "Draw!!";
}