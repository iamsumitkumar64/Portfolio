let tskdata = [];
document.getElementById("area").addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        if (document.getElementById("area").value == "") {
            window.alert("Input Field is Empty");
        } else {
            create();
        }
        document.getElementById("area").value = "";
    }
});

let prev_data = [];
prev_data = JSON.parse(localStorage.getItem("todo"));
console.log(prev_data);
tskdata = prev_data || [];

if (prev_data && prev_data.length > 0) {
    prev_data.forEach(task => {
        create(task);
    });
}

function create(ltask) {
    let div = document.createElement("div");
    div.setAttribute("style", "display: flex; align-items: center;border:1px solid white; background-color: rgb(31,31,31); border-radius: 1vmax; margin-bottom: 0.5em;transition:all ease 1s;");
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "rgb(50, 50, 50)";
        div.style.border = "1px solid white";
    })
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "rgb(31,31,31)";
        div.style.border = "1px solid white";
    })

    let para = document.createElement("p");
    if (ltask != undefined) {
        para.innerHTML = ltask.msg;
    }
    else {
        para.innerHTML = document.getElementById("area").value;
    }
    para.setAttribute("style", "width:60%; height:auto; font-size: 1.7vmax; flex-grow: 1; overflow: hidden; white-space: normal; word-wrap: break-word;");

    let check = document.createElement("input");
    check.type = "checkbox";
    check.setAttribute("style", "width: 3vmax; height: 3vmax; margin: 0 0.5em; border-radius: 50%; cursor:pointer;");

    let cross = document.createElement("button");
    cross.setAttribute("style", "background-image: url('cross.png'); background-size: 100% 100%; width: 3vmax; height: 3vmax; margin: 0 0.5em; cursor:pointer;");

    let edit = document.createElement("button");
    edit.innerText = "Edit";
    edit.id = "edit";
    edit.setAttribute("style", "margin: 0 0.5em; cursor:pointer;");

    div.appendChild(para);
    div.appendChild(edit);
    div.appendChild(check);
    div.appendChild(cross);
    document.getElementById("list").appendChild(div);

    let task;
    if (!ltask) {
        task = { id: tskdata.length, msg: document.getElementById("area").value, status: "Pending" };
        tskdata.push(task);
        localStorage.setItem("todo", JSON.stringify(tskdata))
    }

    if (ltask && ltask.status === "Completed") {
        check.checked = true;
        para.style.textDecoration = "line-through";
        para.style.textDecorationColor = "rgb(224, 58, 16)";
        para.style.textDecorationThickness = "30%";
    }
    check.addEventListener("click", checkfunc);
    function checkfunc() {
        if (check.checked) {
            para.style.textDecoration = "line-through";
            para.style.textDecorationColor = "rgb(224, 58, 16)";
            para.style.textDecorationThickness = "30%";
            tskdata.find(t => t.msg === para.innerText).status = "Completed";
        } else {
            para.style.textDecoration = "none";
            tskdata.find(t => t.msg === para.innerText).status = "Pending";
        }
        localStorage.setItem("todo", JSON.stringify(tskdata))
    }

    cross.addEventListener("click", () => {
        div.remove();
        tskdata = tskdata.filter(elem => elem.msg != para.innerText);
        tskdata.forEach((elem, index) => {
            elem.id = index;
        });
        localStorage.setItem("todo", JSON.stringify(tskdata))
    });

    edit.addEventListener("click", () => {
        let taskToEdit = tskdata.find(t => t.msg === para.innerText);
        console.log(taskToEdit);
        if (taskToEdit) {
            let newText = prompt("Edit New Job =", taskToEdit.msg);
            if (newText !== null && newText.trim() !== "") {
                para.innerHTML = newText;
                taskToEdit.msg = newText;
                localStorage.setItem("todo", JSON.stringify(tskdata));
            }
        }
    });
};

let selection = document.getElementById('select');
console.log(selection.value);
selection.addEventListener("change", selectionfunc);
function selectionfunc() {
    document.getElementById("list").innerHTML = "";
    if (selection.value == "All") {
        tskdata.forEach(task => {
            create(task);
        });
    }
    else if (selection.value == 'Pending') {
        tskdata.filter(task => task.status == "Pending").forEach(task => {
            create(task);
        });
    }
    else {
        tskdata.filter(task => task.status == "Completed").forEach(task => {
            create(task);
        });
    }
}

let search = document.getElementById('search');
search.addEventListener("input", () => {
    if (search.value == "") {
        selection.value == "All";
        selectionfunc();
    } else {
        document.getElementById("list").innerHTML = "";
        tskdata.filter(task => task.msg.toLowerCase() == search.value.toLowerCase()).forEach(task => {
            create(task);
        })
    }
});