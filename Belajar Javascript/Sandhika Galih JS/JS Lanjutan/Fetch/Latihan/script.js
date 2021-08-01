/* // Search Button
const searchButton = document.querySelector('.search-button');
searchButton.addEventListener('click', function() {

    const inputKeyword = document.querySelector('.input-keyword')
    // fetch(resource)
    fetch('http://www.omdbapi.com/?&apikey=649932da&s=' + inputKeyword.value) // berupa Promise
    .then(response => response.json()) // masih berupa promise
    .then(response => {
        const movies = response.Search; // masuk ke Object yang namanya Search
        let cards = '';
        movies.forEach(m => cards += showCards(m));

        const movieContainer = document.querySelector('.movie-container');
        movieContainer.innerHTML = cards;

        // ketika tombol detail di-klik
        const modalDetailButton = document.querySelectorAll('.modal-detail-button');
        // looping tombol karena banyak
        modalDetailButton.forEach(btn => {
            btn.addEventListener('click', function() {
                const imdbid = this.dataset.imdbid;

                fetch('http://www.omdbapi.com/?apikey=649932da&i=' + imdbid)
                .then(response => response.json())
                .then(m => {
                    const movieDetail = showMovieDetail(m);

                    const modalBody = document.querySelector('.modal-body');
                    modalBody.innerHTML = movieDetail;
                })
            })
        })


    }); // berupa Object

}); */

// ! =========================================== FETCH Refractor ===========================================

// cara kita untuk membuat coding kita terlihat seperti Synchronous padahal Asynchronous.

const searchButton = document.querySelector('.search-button');
// async memberitahu JavaScript
searchButton.addEventListener('click', async function () {
    const inputKeyword = document.querySelector('.input-keyword');

    // async await
    const movies = await getMovies(inputKeyword.value);
    updateUI(movies);

});


// modal
// event binding
// memberikan event ke element yang awalnya belom ada, tapi ketika dia ada eventnya tetap bisa berjalan.
document.addEventListener('click', async function(e) {
    if( e.target.classList.contains('modal-detail-button')) {
        const imdbid = e.target.dataset.imdbid;
        const movieDetail = await getMovieDetails(imdbid);
        updateUIdetail(movieDetail);
    }
});




function getMovies(keyword) {
    return fetch('http://www.omdbapi.com/?&apikey=649932da&s=' + keyword) // berupa Promise
    .then(response => response.json()) // masih berupa promise
    .then(response => response.Search);

}

function updateUI (movies) {
    const movieContainer = document.querySelector('.movie-container');

    if (movies !== undefined) {
        let cards = '';
        // Looping
        movies.forEach(m => cards += showCards(m));

        movieContainer.innerHTML = cards;
    } else {
        movieContainer.innerHTML = movieNotFound();
    }

}

function getMovieDetails(imdbid) {
    return fetch('http://www.omdbapi.com/?apikey=649932da&i=' + imdbid)
            .then(response => response.json())
            .then(m => m);
}

function updateUIdetail(m) {
    const movieDetail = showMovieDetail(m);

    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = movieDetail;
}


function showCards(movie) {
    return `<div class="col-md-4 my-3">
                <div class="card">
                    <img src="${movie.Poster}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${movie.Title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${movie.Year}</h6>
                        <a href="#" class="btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${movie.imdbID}">Show Details</a>
                    </div>
                </div>
            </div>`;
}

function showMovieDetail(m) {
    return `<div class="container-fluid">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${m.Poster}" class="img-fluid">
                    </div>
                    <div class="col-md">
                        <ul class="list-group">
                            <li class="list-group-item">
                                <h4>${m.Title} (${m.Year})</h4>
                            </li>
                            <li class="list-group-item"><strong>Director:</strong> ${m.Director}</li>
                            <li class="list-group-item"><Strong>Actors:</Strong> ${m.Actors}</li>
                            <li class="list-group-item"><strong>Genre:</strong> ${m.Genre}</li>
                            <li class="list-group-item"><strong>Plot:</strong> <br> ${m.Plot}</li>
                        </ul>
                    </div>
                </div>
            </div>`;
}

function movieNotFound() {
    return `<h2>Movies not found</h2>
                <h5>try another keyword..</h5>`
}
