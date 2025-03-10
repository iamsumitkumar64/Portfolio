const dict_api = 'https://api.dictionaryapi.dev/api/v2/entries/en/';

async function dict(word) {
    const cont_div = document.createElement("div");
    document.getElementById("main").appendChild(cont_div);

    const response = await fetch(`${dict_api}${word}`);
    const data = await response.json();
    document.getElementById("main").innerHTML = "";

    if (data.title === "No Definitions Found") {
        let err_div = document.createElement("div");
        err_div.textContent = "Sorry Buddy, didn't find anything.";
        document.getElementById("main").appendChild(err_div);
        return;
    }

    data.forEach(element => {
        console.log(data);
        element.meanings.forEach(meaning => {
            meaning.definitions.forEach(definition => {
                console.log(definition);
                let definitionDiv = document.createElement("div");
                let defineP = document.createElement("p");
                let definetag = document.createElement("p");
                definetag.setAttribute("style", "margin-top: 1vmax; font-weight: bold; color: #ffcc00;");
                definetag.textContent = "Defination";
                defineP.setAttribute("style", "font-size:1.5vmax;font-weight:bold;margin-top:1vmax;");
                defineP.textContent = `${definition.definition}`;
                definitionDiv.appendChild(definetag);
                definitionDiv.appendChild(defineP);
                document.getElementById("main").appendChild(definitionDiv);
            });
            if (meaning.synonyms.length > 0) {
                let synonymsDiv = document.createElement("div");
                let synonymsP = document.createElement("p");
                synonymsP.setAttribute("style", "margin-top: 1vmax; font-weight: bold; color: #ffcc00;");
                synonymsP.innerHTML = `<strong>SYNONYMS:</strong> ${meaning.synonyms.join(', ')}`;
                synonymsDiv.appendChild(synonymsP);
                document.getElementById("main").appendChild(synonymsDiv);
            }
            if (meaning.antonyms.length > 0) {
                let antonymsDiv = document.createElement("div");
                let antonymsP = document.createElement("p");
                antonymsP.setAttribute("style", "margin-top: 1vmax; font-weight: bold; color: #ffcc00;");
                antonymsP.innerHTML = `<strong>ANTONYMS:</strong> ${meaning.antonyms.join(', ')}`;
                antonymsDiv.appendChild(antonymsP);
                document.getElementById("main").appendChild(antonymsDiv);
            }
            if (element.phonetics.length > 0 && element.phonetics[0].audio) {
                let audioDiv = document.createElement("div");
                let audio = document.createElement("audio");
                audio.controls = true;
                audio.src = element.phonetics[0].audio;
                let phoneticsP = document.createElement("p");
                phoneticsP.setAttribute("style", "margin-top: 1vmax; font-weight: bold; color: #ffcc00;");
                phoneticsP.textContent = "Pronunciation:";
                audioDiv.appendChild(phoneticsP);
                audioDiv.appendChild(audio);
                document.getElementById("main").appendChild(audioDiv);
            }
        });
    });
}

function word() {
    let word = document.getElementById("input").value.trim();
    console.log(word);
    document.getElementById("main").innerHTML = "";
    dict(word);
}

document.getElementById("input").addEventListener("keydown", (event) => {
    if (event.keyCode == 13) {
        word();
    }
});

function newchat() {
    location.reload();
}