// Getting the ID

const movieNight = document.getElementById("movieNight");
const recentVideos = document.getElementById("recentVideos");
const xmarkLogo1 = document.getElementById("xmarkLogo1");
const xmarkLogo2 = document.getElementById("xmarkLogo2");
const one = document.getElementById("one");
const form = document.querySelector("form");
const searchBar = document.getElementById("searchBar");
const Action = document.getElementById("Action");
const Detectives = document.getElementById("Detectives");
const Fantasy = document.getElementById("Fantasy");
const Space = document.getElementById("Space");
const Blockbasters = document.getElementById("Blockbasters");
const Shitty = document.getElementById("Shitty");
const top100 = document.getElementById("top100");
const menuBarIcon = document.getElementById("menuBarIcon");
const list2 = document.getElementById("list2");
const createBtn = document.getElementById("createBtn");
const createBtnModal = document.getElementById("createBtnModal");
const modalBar = document.getElementById("modalBar");
const eventCreation = document.getElementById("eventCreation");
const createEventModal = document.getElementById("createEventModal");
const eventBar = document.getElementById("eventBar");
const eventBtn = document.getElementById("eventBtn");
const second = document.getElementById("second");

// Assign the variable

const API_KEY = `api_key=4d95d99dd0ba577ee90bf446c8971b3a`;
const BASE_URL = `https://api.themoviedb.org/3/`;
const API_URL = `${BASE_URL}discover/movie?sory_by=popularity.desc&${API_KEY}`;
const IMG_URL = `https://image.tmdb.org/t/p/w500/`;
const PATH_URL = `gq5Wi7i4SF3lo4HHkJasDV95xI9.jpg`;
const searchURL = `${BASE_URL}/search/movie?${API_URL}`;

// Fetching the Data

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      showMovies(data.results);
      // recentMovie(data.results);
    }, false);
}

// For Genre
function getMovies1(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      movieNight.innerHTML = "";
      if (data.results.length != 0) {
        showMovies(data.results);
      } else {
        const message =
          (movieNight.innerHTML = `<h1 id = "message">No Results Found</h1>`);
      }
    }, false);
}

const genre = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
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
      getMovies1(
        API_URL + "&with_genres=" + encodeURI(selectedGenre.join(","))
      );
      highlightedBars();
    });
    list2.append(t);
  }, false);
}

function highlightedBars() {
  const tags = document.querySelectorAll(".tags");
  tags.forEach((tag) => {
    tag.classList.remove("highlight");
  });
  if (selectedGenre.length != 0) {
    selectedGenre.forEach((id) => {
      const highlightedTag = document.getElementById(id);
      highlightedTag.classList.add("highlight");
    }, false);
  }
}

// Call the function
getMovies(API_URL);

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

    img.src = `${
      poster_path
        ? IMG_URL + poster_path
        : "https://via.placeholder.com/1080x1580"
    }`;

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
    movie1.append(headingRecentMovies);
    movie1.append(paraOfMovieNight);
    movieNight.append(movie1);

    // Add Event Listener
    movie1.addEventListener(
      "click",
      () => {
        one.style.display = "block";
        const div = document.createElement("div");
        const img = document.createElement("img");

        img.src = `${
          poster_path
            ? IMG_URL + poster_path
            : "https://via.placeholder.com/1080x1580"
        }`;

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
        div.append(img);
        div.append(headingRecentMovies);
        div.append(paraOfMovieNight);
        console.log(div);
        recentVideos.prepend(div);
      },
      false
    );
  }, false);
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

// SearchBar for Searching the content
form.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    selectedGenre = [];
    setGenre();
    const searchIteams = searchBar.value;
    if (searchIteams) {
      getMovies1(`${searchURL}&query=${searchIteams}`);
    } else {
      getMovies1(API_URL);
    }
    searchBar.value = "";
  },
  false
);

// Create List for LeftBar

createBtn.addEventListener(
  "click",
  () => {
    if (createBtnModal.style.display === "none") {
      createBtnModal.style.display = "block";
    } else {
      createBtnModal.style.display = "none";
    }
  },
  false
);

createBtnModal.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const div = document.createElement("div");
    div.classList.add("tags");
    div.append(modalBar.value);
    list2.append(div);
    modalBar.value = "";
    createBtnModal.style.display = "none";
  },
  false
);

// Create Event for Main
eventCreation.addEventListener(
  "click",
  () => {
    if (createEventModal.style.display === "none") {
      createEventModal.style.display = "block";
    } else {
      createEventModal.style.display = "none";
    }
  },
  false
);

createEventModal.addEventListener(
  "submit",
  (e) => {
    e.preventDefault();
    const div = document.createElement("div");
    div.classList.add("newEvent");
    const headingForNewDiv = document.createElement("p");
    headingForNewDiv.classList.add("headingOfNewEvent");
    headingForNewDiv.append(eventBar.value);
    div.append(headingForNewDiv);
    second.append(div);
    eventBar.value = "";
    createEventModal.style.display = "none";
  },
  false
);

// XmarkLogo1 Functionality
xmarkLogo1.addEventListener("click", () => {
  createBtnModal.style.display = "none";
},false);

// XmarkLogo2 Functionality
xmarkLogo2.addEventListener("click", () => {
  createEventModal.style.display = "none";
},false);