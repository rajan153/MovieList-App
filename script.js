// Getting the ID

const movieNight = document.getElementById("movieNight");
const recentVideos = document.getElementById("recentVideos");
const Action = document.getElementById("Action");
const Detectives = document.getElementById("Detectives");
const Fantasy = document.getElementById("Fantasy");
const Space = document.getElementById("Space");
const Blockbasters = document.getElementById("Blockbasters");
const Shitty = document.getElementById("Shitty");
const top100 = document.getElementById("top100");
const menuBarIcon = document.getElementById("menuBarIcon");
const list2 = document.getElementById("list2");

// Assign the variable

const API_KEY = `api_key=4d95d99dd0ba577ee90bf446c8971b3a`;
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_URL = `${BASE_URL}discover/movie?sory_by=popularity.desc&${API_KEY}`;
const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
const PATH_URL = `gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg`;

// Fetching the Data

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
      recentMovie(data.results);
      geetingIds(data.results);
    }, false);
}

const genre = [
  {
    "id": 28,
    "name": "Action"
  },
  {
    "id": 12,
    "name": "Adventure"
  },
  {
    "id": 16,
    "name": "Animation"
  },
  {
    "id": 35,
    "name": "Comedy"
  },
  {
    "id": 80,
    "name": "Crime"
  },
  {
    "id": 99,
    "name": "Documentary"
  },
  {
    "id": 18,
    "name": "Drama"
  },
  {
    "id": 10751,
    "name": "Family"
  },
  {
    "id": 14,
    "name": "Fantasy"
  },
  {
    "id": 36,
    "name": "History"
  },
  {
    "id": 27,
    "name": "Horror"
  },
  {
    "id": 10402,
    "name": "Music"
  },
  {
    "id": 9648,
    "name": "Mystery"
  },
  {
    "id": 10749,
    "name": "Romance"
  },
  {
    "id": 878,
    "name": "Science Fiction"
  },
  {
    "id": 10770,
    "name": "TV Movie"
  },
  {
    "id": 53,
    "name": "Thriller"
  },
  {
    "id": 10752,
    "name": "War"
  },
  {
    "id": 37,
    "name": "Western"
  }
];

let selectedGenre = [];

setGenre();

function setGenre() {
  list2.innerHTML = "";
  genre.forEach((genres) => {
    const t = document.createElement("div");
    t.classList.add("tags");
    t.id = genres.id;
    t.innerText = genres.name;
    t.addEventListener("click", () => {
      if (selectedGenre.length == 0) {
        selectedGenre.push(genres.id);
      } else if (selectedGenre.includes(genres.id)) {
        selectedGenre.forEach((id, idx) => {
          if (id == genres.id) {
            selectedGenre.splice(idx, 1);
          }
        });
      } else {
        selectedGenre.push(genres.id);
      }
      console.log(selectedGenre);
      getMovies(API_URL + "&with_genres=" + encodeURI(selectedGenre.join(",")))
    });
    list2.append(t);
  }, false);
}

// Call the function
getMovies(API_URL);

// Rcent Watched Moives

function recentMovie(data) {

  data.forEach((movie) => {
      const { title, poster_path, release_date } = movie;

      // Creating Div
      const movie1 = document.createElement("div");

      // Creating Img tag to show the images

      const img = document.createElement("img");

      // Source of images

      img.src = `${IMG_URL + poster_path}`;

      // Some CSS apply on IMG tag

      img.style.display = "relative";
      img.style.width = "100%";
      img.style.cursor = "pointer";

      // Creating h6 for title of the Movie

      const headingRecentMovies = document.createElement("h6");

      // Getting the title of Movie
      const titleHeading = `${title}`;

      // Css on h6
      headingRecentMovies.style.color = "#EAEAEA";
      headingRecentMovies.style.marginTop = "0.5rem";

      // Creating h6 for Relase Date of the Movie
      const paraOfRecentMovie = document.createElement("h6");

      // Apply Css on h6
      paraOfRecentMovie.style.color = "#808080";

      // Getting the relase date of Movie
      const releaseDate = `release Date: ${release_date}`;

      // Append the all things
      paraOfRecentMovie.append(releaseDate);
      movie1.append(img);
      headingRecentMovies.append(titleHeading);
      movie1.append(headingRecentMovies);
      movie1.append(paraOfRecentMovie);
      recentVideos.append(movie1);
  }, false);
}

// Movie Night Section

function showMovies(data) {

  data.forEach((movie) => {
      // Object to Use

      const { title, poster_path, release_date } = movie;

      // Creating Div

      const movie1 = document.createElement("div");

      // Creating img tag
      const img = document.createElement("img");

      // Source of images

      img.src = `${IMG_URL + poster_path}`;

      //   Adding some Css
      img.style.display = "relative";
      img.style.width = "100%";
      img.style.height = "100%";
      img.style.cursor = "pointer";

      //   Creating h6 tag for title
      const headingRecentMovies = document.createElement("h6");

      // Getting the title of Movie
      const titleHeading = `${title}`;

      // Adding Css
      headingRecentMovies.style.color = "#EAEAEA";
      headingRecentMovies.style.marginTop = "0.5rem";

      //   Create h6 tag for release date
      const paraOfMovieNight = document.createElement("h6");

      //   Adding Css
      paraOfMovieNight.style.color = "#808080";

      //   Getting the relase date for Moives
      const releaseDate = `release Date: ${release_date}`;

      //   Append the all things
      headingRecentMovies.append(titleHeading);
      paraOfMovieNight.append(releaseDate);
      movie1.append(img);
      movieNight.append(movie1);
      movie1.append(headingRecentMovies);
      movie1.append(paraOfMovieNight);
  }, false);
}

const storageOfIDs = [];

// For Getting IDs
function geetingIds(data) {
  data.forEach((iDs) => {
    const { id } = iDs;
    const collectingIds = `${id}`;
    storageOfIDs.push(collectingIds);
  });
}

// MenuBar On/Off Button
menuBarIcon.addEventListener(
  "click",
  () => {
    if (leftBar.style.display === "block") {
      leftBar.style.display = "none";
    } else {
      leftBar.style.display = "block";
    }
  },
  false
);
