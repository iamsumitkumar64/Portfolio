import { quizdata } from './ques.js';
let no = 0, score = 0, timer;

let btn = document.querySelectorAll('button');
btn[0].addEventListener("click", () => {
    document.getElementById('first').style.display = "none";
    document.getElementById('second').style.display = "block";
    nextques();
});
function startTimer(duration) {
    // let timeLeft = duration;
    document.getElementById('timer').innerText = duration;

    timer = setInterval(() => {
        duration--;
        document.getElementById('timer').innerText = duration;

        if (duration == -1) {
            clearInterval(timer);
            alert("Time's up!");
            nextques();
        }
    }, 1000);
}
function nextques() {
    no++;
    console.log(no);
    clearInterval(timer);
    if (no <= quizdata.length) {
        document.getElementById('cont').innerHTML = "";
        document.getElementById('ques_num').innerText = "Quiz " + no;
        if (no == quizdata.length) {
            btn[1].innerText = "End";
        }

        let question = document.createElement('p');
        let div = document.createElement('div');
        question.innerText = quizdata[no - 1].ques;
        question.setAttribute("style", "font-size: 3vmax; font-weight: 900;");
        div.setAttribute("style", "display:flex;flex-direction:column;");
        quizdata[no - 1].opt.forEach((quiz_opt, index) => {
            let label = document.createElement('label');
            let radio = document.createElement('input');
            label.setAttribute("style", "font-size:2.5vmax;display:flex;flex-direction:row-reverse;justify-content:space-between;margin-top:1vmax;");
            // console.log(quiz_opt);
            radio.setAttribute("type", "radio");
            radio.setAttribute("name", "question" + no);
            radio.setAttribute("value", quiz_opt);
            label.appendChild(radio);
            label.appendChild(document.createTextNode(quiz_opt));
            div.appendChild(label);
        });
        document.getElementById('cont').appendChild(question);
        document.getElementById('cont').appendChild(div);
        startTimer(10);
    }
    else {
        document.getElementsByTagName('main')[0].innerHTML = "";
        let sc_brd = document.createElement('p');
        sc_brd.setAttribute("style", " color:yellow;text-align:center; font-size:5vmax; margin-top:35vh;");
        sc_brd.innerText = "Quiz Finished! Your score is: " + score;
        document.getElementsByTagName('main')[0].appendChild(sc_brd);
    }
}

btn[1].addEventListener('click', () => {
    const selectedOption = document.querySelector(`input[name="question${no}"]:checked`);
    if (selectedOption) {
        if (selectedOption.value === quizdata[no - 1].ans) {
            score++;
        }
        nextques();
    } else { window.alert("Please Select"); }
});

btn[2].addEventListener('click', () => {
    nextques();
});

btn[3].addEventListener('click', () => {
    location.reload();
});