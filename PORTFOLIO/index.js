document.addEventListener('keydown', function (e) {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
        e.preventDefault();
    }
});
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
let modeimg = document.querySelectorAll('.mode-img');
let mode = document.getElementById("mode");
let body = document.body;
mode.addEventListener("click", () => {
    if (mode.src.endsWith("light.png")) {
        mode.src = "PORTO CONTENT/night.png";
        mode.setAttribute("style", "filter:invert(100%) brightness(0);");
        body.setAttribute("style", "color:black; background-color:rgb(236, 236, 236);");
        document.getElementsByTagName('header')[0].setAttribute("style", "color:black; background-color:rgb(236, 236, 236);");
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.setAttribute("style", "color:black;");
            link.addEventListener("mouseenter", () => {
                link.setAttribute("style", "color:red;");
            })
            link.addEventListener("mouseleave", () => {
                link.setAttribute("style", "color:black;");
            })
        });
        document.getElementById('head-img').setAttribute("style", "filter:invert(100%) brightness(0);");
        modeimg.forEach(img => {
            img.setAttribute("style", "filter:invert(100%) brightness(0);");
        });
    } else {
        mode.src = "PORTO CONTENT/light.png";
        mode.setAttribute("style", "filter:invert(100%);");
        body.setAttribute("style", "color:white;background-color: rgb(1, 0, 26);");
        document.getElementsByTagName('header')[0].setAttribute("style", "color:white;background-color: rgb(1, 0, 26);");
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.setAttribute("style", "color:white;");
            link.addEventListener("mouseenter", () => {
                link.setAttribute("style", "color:yellow;");
            })
            link.addEventListener("mouseleave", () => {
                link.setAttribute("style", "color:white;");
            })
        });
        document.getElementById('head-img').setAttribute("style", "filter:invert(100%);");
        modeimg.forEach(img => {
            img.setAttribute("style", "filter:invert(100%);");
        });
    }
});
let about_btn = document.getElementsByClassName("about-btns");
console.log(about_btn);
let para = document.getElementById("about-btn-cont-p");
para.innerHTML = `  <ul>
 <li> Hello! My name is Sumit Birwal & I enjoy creating things that live on the internet.</li></br><li>I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.</li></br>
 <li>I have done Full-Stack Development in Django from Youtube.</li></br>
 <li>I have done 120+ LeetCode Problems with C++ and Python.</li>
</ul>`;
;
window.addEventListener("scroll", () => {
    if (about_btn.length > 0) {
        about_btn[0].addEventListener("click", () => {
            let para = document.getElementById("about-btn-cont-p");
            para.innerHTML = `  <ul>
             <li> Hello! My name is Sumit Birwal & I enjoy creating things that live on the internet.</li></br> <li>I'm a passionate Developer, with strong administrative & communication skills, good attention to detail & the ability to write efficient code.</li></br>
             <li>I have done Full-Stack Development in Django from Youtube.</li></br>
             <li>I have done 120+ LeetCode Problems with C++ and Python.</li>
         </ul>`;
        });
        about_btn[1].addEventListener("click", () => {
            let para = document.getElementById("about-btn-cont-p");
            para.innerHTML = `<ul>
    <li>Gained hands-on experience in Python, JavaScript, C++.</li></br>
    <li>Learned Web Development basics: HTML, CSS, and JavaScript.</li></br>
    <li>Improved Problem-Solving skills through Data-Structures and Algorithms.</li></br>
    <li>Developed Amazon CLone Project by Youtube-Tutorial and try to add things with my basic knowledge.</li></br>
    <li>Received valuable Mentorship and built a network in the Tech Industry.</li>
</ul>`;
        });
    } else {
        console.error("No elements found with the class name 'about-btns'.");
    }
});

function SendMail() {
    var params = {
        from_name: document.getElementsByClassName("form")[0].value,
        email_id: document.getElementsByClassName("form")[1].value,
        mobile: document.getElementsByClassName("form")[2].value,
        message: document.getElementsByClassName("form")[3].value,
    }
    emailjs.send("service_nvpczn8", "template_fjbjz6e", params).then(function (res) {
        alert("Success !" + res.status)
    }).catch(function (error) {
        console.error("Failed to send email:", error);
    });
}

document.getElementById("resume").addEventListener("click", () => {
    const pdfUrl = 'PORTO CONTENT/My Resume.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Sumit Kumar Resume.pdf';
    link.click();
});