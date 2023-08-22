// Getting the ID

const movieNight = document.getElementById("movieNight");
const recentVideos = document.getElementById("recentVideos");

// Assign the variable

const API_KEY = `api_key=4d95d99dd0ba577ee90bf446c8971b3a`;
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_URL = `${BASE_URL}/discover/movie?sory_by=popularity.desc&${API_KEY}`;
const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
const PATH_URL = `gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg`;

// Fetching the Data

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
      recentMovie(data.results);
    }, false);
}

// Call the function
getMovies(API_URL);

// Rcent Watched Moives

function recentMovie(data) {
  // Count variable to add 6 movies
  let cnt = 0;
  data.forEach((movie) => {
    if (cnt !== 6) {
      // Object to Use
      const { title, poster_path, release_date } = movie;

      // Creating Div
      const movie1 = document.createElement("div");
      // Adding some Css on the Div
      movie1.style.display = "flex";
      movie1.style.flexDirection = "column";
      movie1.style.width = "100%";
      movie1.style.height = "100%";

      // Creating Img tag to show the images

      const img = document.createElement("img");

      // Source of images

      img.src = `${IMG_URL + poster_path}`;

      // Some CSS apply on IMG tag

      img.style.display = "relative";
      img.style.width = "100%";
      img.style.height = "100%";
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

      // Count increment
      cnt = cnt + 1;
    }
  }, false);
}

// Movie Night Section

function showMovies(data) {
  // Count variable to add 3 movies

  let cnt = 0;
  data.forEach((movie) => {
    if (cnt !== 3) {
      // Object to Use

      const { title, poster_path, release_date } = movie;

      // Creating Div

      const movie1 = document.createElement("div");

      //   Adding Some Css
      movie1.style.display = "flex";
      movie1.style.flexDirection = "column";
      movie1.style.width = "100%";
      movie1.style.height = "100%";

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

      //    Count increment
      cnt = cnt + 1;
    }
  }, false);
}




