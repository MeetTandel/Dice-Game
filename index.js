//for img1
let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //random numbers from 1 to 6

let randomImageSource = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", randomImageSource);


//for img2
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let randomImageSource2 ="images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);



if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

function refreshPage(){
    window.location.reload();
} 