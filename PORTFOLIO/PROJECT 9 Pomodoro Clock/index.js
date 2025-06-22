document.getElementById('mode').addEventListener("click", () => {
    if (document.body.style.color == 'white') {
        document.body.setAttribute('style', 'color:#328d72;background-color: #f4f4f4;');
    } else {
        document.body.setAttribute('style', 'color:white;background-color: rgb(0,0,0);');
    }
});

let label = document.getElementsByTagName('label');
const cont = document.getElementById("cont");
const s_inc = document.getElementById("s_inc");
const s_dec = document.getElementById("s_dec");
const b_inc = document.getElementById("b_inc");
const b_dec = document.getElementById("b_dec");
const start = document.getElementById("start");
const pause = document.getElementById("pause");
const reset = document.getElementById("reset");

let s = 10, b = 5, s_min = s, sec = 0, b_min = b, session = true, obj;
let flag = true, r_sec = 0, r_min = 0;

function toggleButtons(ans) {
    s_inc.disabled = ans;
    s_dec.disabled = ans;
    b_inc.disabled = ans;
    b_dec.disabled = ans;
}

function s_inc_func() {
    s++;
    s_min = s;
    label[1].innerText = s;
}

function s_dec_func() {
    if (s > 0) {
        s--;
        s_min = s;
        label[1].innerText = s;
    }
}

function b_inc_func() {
    b++;
    b_min = b;
    label[2].innerText = b;
}

function b_dec_func() {
    if (b > 0) {
        b--;
        b_min = b;
        label[2].innerText = b;
    }
}

s_inc.addEventListener("click", s_inc_func);
s_dec.addEventListener("click", s_dec_func);
b_inc.addEventListener("click", b_inc_func);
b_dec.addEventListener("click", b_dec_func);

function startfunc(minute, second) {
    obj = setInterval(() => {
        toggleButtons(true);
        if (minute > 0 || second > 0) {
            label[0].innerText = `${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second}`;
            label[0].style.border = session ? '1px solid rgb(0, 89, 255)' : '1px solid rgb(255, 0, 0)';
            second--;
            if (second < 0) {
                second = 59;
                minute--;
            }
            r_min = minute;
            r_sec = second;
        } else {
            session = !session;
            pausefunc();
            if (session) {
                s_min = s;
                sec = 0;
                cont.innerText = "Session Time";
            } else {
                b_min = b;
                sec = 0;
                cont.innerText = "Break Time";
            }
            startfunc(session ? s_min : b_min, sec);
        }
    }, 100);
}

start.addEventListener("click", () => {
    toggleButtons(true);
    if (flag == true) {
        if (s_min != 0) {
            if (r_min == 0 && r_sec == 0) {
                startfunc(s_min, sec);
            } else {
                startfunc(r_min, r_sec);
            }
            flag = false;
        } 
        else {
            alert("Please Set Session Time");
        }
    } else {
        alert("Start Already Working");
    }
});

function pausefunc() {
    clearInterval(obj);
    toggleButtons(false);
    flag = true;
}

pause.addEventListener("click", pausefunc);

function resetfunc() {
    clearInterval(obj);
    toggleButtons(false);
    flag = true;
    s = 10;
    b = 5;
    s_min = 10;
    sec = 0;
    b_min = 5;
    label[1].innerText = s;
    label[2].innerText = b;
    cont.innerText = "Session Time";
    label[0].innerText = "00:00";
    label[0].style.border='transparent';
}

reset.addEventListener("click", resetfunc);