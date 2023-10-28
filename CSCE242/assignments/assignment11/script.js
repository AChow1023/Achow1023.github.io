const getMovies = async () => {
    const url =  "https://portiaportia.github.io/json/movies.json";

    try {
        const response = await fetch(url);
        return await response.json();
    }
    catch (error){
        console.log(error);
    }
};

const showMovies = async () => {
    let movies = await getMovies();
    let moviesSection = document.getElementById("movies");
    movies.forEach((movie) => moviesSection.append(getMovieItem(movie)));
};

const getMovieItem = (movie) =>{
    const movieSection = document.createElement("section");

    const img = document.createElement("img");
    img.src = 'https://portiaportia.github.io/json/' + movie.img;
    movieSection.append(img);

    const content = document.createElement("div");
    movieSection.append(content);

    const h3 = document.createElement("h3");
    h3.innerText = movie.title;
    content.append(h3);

    let ul = document.createElement("ul");
    content.append(ul);
    ul.append(getLi('Director: ' + movie.director));
    ul.append(getLi('Actors: ' + movie.actors));
    ul.append(getLi('Year Released: ' + movie.year));
    ul.append(getLi('Genres: ' + movie.genres));
    ul.append(getLi(movie.description));
    
    return movieSection;
};

const getLi = (data) => {
    const li = document.createElement("li");
    li.textContent = data;
    return li;
}

window.onload = () => showMovies();