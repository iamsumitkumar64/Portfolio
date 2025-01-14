const api = 'https://movies-api14.p.rapidapi.com/search?query=';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '9509987347msh5920d332a81283ep115dd0jsn70b716b8b1fa',
        'x-rapidapi-host': 'movies-api14.p.rapidapi.com'
    }
};
async function movie(api, sear_name) {
    try {
        if (sear_name != "") {
            api = api + sear_name;
        }
        else {
            api = 'https://movies-api14.p.rapidapi.com/search?query=resident evil';
        }
        const response = await fetch(api, options);
        if (response.status === 429) {
            console.log("Rate limit exceeded. Retrying after 5 seconds...");
            await new Promise(resolve => setTimeout(resolve, 5000)); // 5 seconds delay
            return movie(api, sear_name); // Retry the request
        }
        const data = await response.json();
        console.log(data.contents); // Log the movie data
        show(data.contents); // Pass the data to the show function
    } catch (error) {
        console.error(error);
    }
}

function getinput() {
    const input = document.getElementById("sear_opt").value;
    movie(api, input);
}

let show = (data) => {
    console.log(data);
    document.getElementById("box").innerHTML = "";
    let div = document.createElement("div");
    div.setAttribute("style", "display:flex;flex-wrap:wrap; justify-content:space-around;");
    data.forEach(element => {
        let search_img = document.createElement("img");
        search_img.src = element.poster_path; // Use poster_path directly
        search_img.style.border = "2px solid aqua";
        search_img.style.width = "20vmax";
        search_img.style.height = "20vmax";

        let search_div = document.createElement("div");
        search_div.id = "movie";
        search_div.style.width = "20vmax";
        search_div.style.height = "25vmax";
        search_div.style.border = "2px solid red";
        search_div.style.display = "flex";
        search_div.style.flexDirection = "column";
        search_div.style.alignItems = "center";

        search_div.appendChild(search_img);

        let title = document.createElement("p");
        title.textContent = element.original_title; // Display original_title
        title.style.fontWeight="bold";
        title.style.fontSize="1.5vmax";
        title.style.textOverflow = "scroll";
        title.style.color = "rgb(0,0,255)";

        let year = document.createElement("p");
        year.textContent = element.release_date;
        year.style.fontSize = "1vmax";

        let rate = document.createElement("p");
        rate.textContent = element.vote_average;
        rate.style.fontSize = "1vmax";

        let overview = document.createElement("p");
        overview.textContent = element.overview;
        overview.id = "overview";
        overview.style.fontSize = "1.5vmax";
        overview.style.fontWeight = "bold";
        overview.style.position = "absolute";
        overview.style.bottom = "0";
        overview.style.left = "0";
        overview.style.overflow = "scroll";

        search_div.style.position = "relative";
        search_div.appendChild(title);
        search_div.appendChild(year);
        search_div.appendChild(rate);
        search_div.appendChild(overview);

        div.appendChild(search_div);
    });
    document.getElementById("box").appendChild(div);
}

document.getElementById("sear_opt").addEventListener("keypress", function (event) {
    getinput();
});

getinput();