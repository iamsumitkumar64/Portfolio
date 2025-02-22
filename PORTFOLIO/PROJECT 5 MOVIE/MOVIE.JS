// const popularApi = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
// const searchApi=`https://api.themoviedb.org/3/search/movie?query=${searchName}include_adult=true&language=en-US&page=1`;

// const options = {
//     method: 'GET',
//     headers: {
//         accept: 'application/json',
//         Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OGI2MDEyZDFjZjBkM2U3MDBjNGE4YjEyNTljZjZjYSIsIm5iZiI6MTczNzY0NjM3Ny45NjYsInN1YiI6IjY3OTI2MTI5ZWZhODUzMzdjM2ZhODEyYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qKuIEke6JTQan1P1ExJ75j3fg8GgI0C9Fa4OA70Ge0Y'
//     }
// };

// async function movie(popularApi,searchApi,searchName, options) {
//     try {
//         if (searchName == '') {
//             const response1 = await fetch(popularApi, options);
//             const data1 = await response1.json();
//             console.log(data1);
//             show(data1);
//         } else {
//             searchApi = `https://api.themoviedb.org/3/search/movie?query=${searchName}&include_adult=true&language=en-US&page=2`;
//             const response2 = await fetch(searchApi, options);
//             const data2 = await response2.json();
//             console.log(data2);
//             show(data2);
//         }
//     } catch (error) {
//         document.getElementById("box").innerHTML = "An error occurred while fetching data.";
//         console.error(error);
//     }
// }
// function getinput() {
//     const searchName = document.getElementById('sear_opt').value;
//     movie(popularApi,searchApi,searchName, options);
// }
// let show = (data1) => {
//     console.log(data1);
//     document.getElementById("box").innerHTML = "";
//     let div = document.createElement("div");
//     div.setAttribute("style", "display:flex;flex-wrap:wrap; justify-content:space-around;");

//     data1.results.forEach(element => {
//         let search_img = document.createElement("img");
//         search_img.src = `https://image.tmdb.org/t/p/w500${element.poster_path}`;
//         search_img.style.border = "2px solid aqua";
//         search_img.style.width = "20vmax";
//         search_img.style.height = "20vmax";

//         let search_div = document.createElement("div");
//         search_div.id = "movie";
//         search_div.style.width = "20vmax";
//         search_div.style.height = "25vmax";
//         search_div.style.border = "2px solid red";
//         search_div.style.display = "flex";
//         search_div.style.flexDirection = "column";
//         search_div.style.alignItems = "center";

//         search_div.appendChild(search_img);

//         let title = document.createElement("p");
//         title.textContent = element.original_title;
//         title.style.fontWeight = "bold";
//         title.style.fontSize = "1.5vmax";
//         title.style.textOverflow = "scroll";
//         title.style.color = "rgb(0,0,255)";

//         let year = document.createElement("p");
//         year.textContent = element.release_date;
//         year.style.fontSize = "1vmax";

//         let rate = document.createElement("p");
//         rate.textContent = element.vote_average;
//         rate.style.fontSize = "1vmax";

//         let overview = document.createElement("p");
//         overview.textContent = element.overview;
//         overview.id = "overview";
//         overview.style.fontSize = "1.5vmax";
//         overview.style.fontWeight = "bold";
//         overview.style.position = "absolute";
//         overview.style.bottom = "0";
//         overview.style.left = "0";
//         overview.style.overflow = "scroll";

//         search_div.style.position = "relative";
//         search_div.appendChild(title);
//         search_div.appendChild(year);
//         search_div.appendChild(rate);
//         search_div.appendChild(overview);

//         div.appendChild(search_div);
//     });
//     document.getElementById("box").appendChild(div);
// }
// getinput();
// document.getElementById('sear_opt').addEventListener("input", getinput);
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
    title.textContent = element.original_title;
    title.style.fontWeight = "bold";
    title.style.fontSize = "1.5vmax";
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

getinput();
document.getElementById('sear_opt').addEventListener("input", getinput);