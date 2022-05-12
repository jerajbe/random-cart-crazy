function carta (e) {
    let up = document.querySelector("#up");
    let middle = document.querySelector("#middle");
    let down = document.querySelector("#down");

    let numbersArray = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let pintasArray = ["♦","♥", "♠", "♣"]

    let number = numbersArray[Math.floor(Math.random()* numbersArray.length)];
    let pinta = pintasArray[Math.floor(Math.random()* pintasArray.length)];

    up.innerHTML = pinta;
    middle.innerHTML = number;
    down.innerHTML = pinta;

    if ((pinta === "♦") || (pinta === "♥")) {
        up.style.color = "red";
        down.style.color = "red";
        middle.style.color = "red";
    } else {
        up.style.color = "black";
        down.style.color = "black";
        middle.style.color = "black";
    }
}
window.onload = function() {
    let GL = document.querySelector("#GL");
    GL.addEventListener("click", carta);
}
