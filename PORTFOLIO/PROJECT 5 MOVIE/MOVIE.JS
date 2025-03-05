const popularApi = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
const searchApi = 'https://api.themoviedb.org/3/search/movie';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGI2MDEyZDFjZjBkM2U3MDBjNGE4YjEyNTljZjZjYSIsIm5iZiI6MTczNzY0NjM3Ny45NjYsInN1YiI6IjY3OTI2MTI5ZWZhODUzMzdjM2ZhODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qKuIEke6JTQan1P1ExJ75j3fg8GgI0C9Fa4OA70Ge0Y'
  }
};

async function movie(searchName) {
  try {
    let apiUrl;
    if (searchName === '') {
      apiUrl = popularApi;
    } else {
      apiUrl = `${searchApi}?query=${encodeURIComponent(searchName)}&include_adult=true&language=en-US&page=1`;
    }

    const response = await fetch(apiUrl, options);
    const data = await response.json();
    console.log(data);
    show(data);
  } catch (error) {
    document.getElementById("box").innerHTML = "An error occurred while fetching data.";
    console.error(error);
  }
}

function getinput() {
  const searchName = document.getElementById('sear_opt').value.trim();
  movie(searchName);
}

let show = (data) => {
  console.log(data);
  document.getElementById("box").innerHTML = "";
  let div = document.createElement("div");
  div.setAttribute("style", "display:flex;flex-wrap:wrap; justify-content:space-around;");

  data.results.forEach(element => {
    let search_img = document.createElement("img");
    search_img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
    search_img.setAttribute("style", "border: 2px solid #4A90E2; width: 21vmax; height: auto; border-radius: 1vmax;");

    let search_div = document.createElement("div");
    search_div.id = "movie";
    search_div.setAttribute("style", "width: 21vmax; height: auto; border: 2px solid #4A90E2; display: flex; flex-direction: column; align-items: center; margin: 1vmax; border-radius: 1vmax; background-color: #333; position: relative;");

    search_div.appendChild(search_img);

    let title = document.createElement("p");
    title.textContent = element.original_title;
    title.setAttribute("style", "font-weight: bold; font-size: 1.8vmax; color: #FFD700;");

    let year = document.createElement("p");
    year.textContent = `Year: ${element.release_date}`;
    year.setAttribute("style", "font-size: 1.4vmax; font-weight: bold; color: #EAEAEA;");

    let rate = document.createElement("p");
    rate.textContent = `Rating: ${element.vote_average}`;
    rate.setAttribute("style", "font-size: 1.4vmax; font-weight: bold; color: #EAEAEA;");

    let adult = document.createElement("p");
    adult.textContent = `Adult: ${element.adult}`;
    adult.setAttribute("style", "font-size: 1.4vmax; font-weight: bold; color: #EAEAEA;");

    let overview = document.createElement("p");
    overview.textContent = element.overview;
    overview.id = "overview";
    overview.setAttribute("style", "font-size: 1.5vmax; font-weight: bold; position: absolute; bottom: 0; left: 0; overflow: scroll; color:rgb(255, 255, 255);");

    search_div.appendChild(title);
    search_div.appendChild(adult);
    search_div.appendChild(year);
    search_div.appendChild(rate);
    search_div.appendChild(overview);

    div.appendChild(search_div);
  });
  document.getElementById("box").appendChild(div);
}

getinput();
document.getElementById('sear_opt').addEventListener("input", getinput);