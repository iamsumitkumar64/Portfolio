function mode() {
    let element = document.body;
    element.classList.toggle("dark");
}
let user_score = 0;
let comp_score = 0;
let arr = ["PAPER", "STONE", "SCISSOR"];
function click_choice(num) {
    let comp_choice = arr[Math.floor((Math.random()) * 3)];
    let user_choice = arr[num];
    if ((comp_choice == "SCISSOR") && (user_choice == "STONE")) {
        console.log(`USER CHOOSE = ${user_choice} </br> COMPUTER CHOOSE = ${comp_choice}`);
        console.log("USER WINS MATCH");
        ++user_score;
        document.getElementById("msg").innerText = "USER WINS MATCH";
        document.getElementById("user_score").innerText = user_score;
        let win = document.getElementById("msg");
        win.style.backgroundColor = "blue";
    }
    else if ((comp_choice == "STONE") && (user_choice == "PAPER")) {
        console.log(`USER CHOOSE = ${user_choice} </br> COMPUTER CHOOSE = ${comp_choice}`);
        console.log("USER WINS MATCH");
        ++user_score;
        document.getElementById("msg").innerText = "USER WINS MATCH";
        document.getElementById("user_score").innerText = user_score;
        let win = document.getElementById("msg");
        win.style.backgroundColor = "blue";
    }
    else if ((comp_choice == "PAPER") && (user_choice == "SCISSSOR")) {
        console.log(`USER CHOOSE = ${user_choice} </br> COMPUTER CHOOSE = ${comp_choice}`);
        console.log("USER WINS MATCH");
        ++user_score;
        document.getElementById("msg").innerText = "USER WINS MATCH";
        document.getElementById("user_score").innerText = user_score;
        let win = document.getElementById("msg");
        win.style.backgroundColor = "blue";
    }
    else if (comp_choice == user_choice) {
        console.log("Draw");
    }
    else {
        console.log(`USER CHOOSE = ${user_choice} </br> COMPUTER CHOOSE = ${comp_choice}`);
        ++comp_score;
        console.log("COMPUTER WINS MATCH");
        document.getElementById("msg").innerText = "COMPUTER WINS MATCH";
        document.getElementById("comp_score").innerText = comp_score;
        let win = document.getElementById("msg");
        win.style.backgroundColor = "red";
    }
}
function final() {
    if (comp_score > user_score) {
        document.getElementById("msg").innerText = "COMPUTER WINS";
        let win = document.getElementById("msg");
        win.style.backgroundColor = "red";
    }
    else if (comp_score < user_score) {
        document.getElementById("msg").innerText = "USER WINS";
        let win = document.getElementById("msg");
        win.style.backgroundColor = "blue";
    }
    else if ((comp_score == 0) && (user_score == 0)) {
        document.getElementById("msg").innerText = "START GAME FIRST";
    }
    else {
        document.getElementById("msg").innerText = "DRAW";
    }
    comp_score=0;
    user_score=0;
    document.getElementById("user_score").innerText = user_score;
    document.getElementById("comp_score").innerText = comp_score;
}
function reset() {
    location.reload();
}