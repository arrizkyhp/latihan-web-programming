$('.search-button').on('click', function() {

    $.ajax({
        url: 'http://www.omdbapi.com/?i=tt3896198&apikey=649932da&s=' + $('.input-keyword').val(),
        success: results => {
            const movies = results.Search;
            let cards = '';
            console.log(movies);
            movies.forEach(movie => {
                cards += showCards(movie);
            });
            $('.movie-container').html(cards);

            // ketika tombol detail di klik
            $('.modal-detail-button').on('click', function() {
                $.ajax({
                    url: 'http://www.omdbapi.com/?apikey=649932da&i=' + $(this).data('imdbid'),
                    success: m => {
                        console.log('test');
                        const movieDetail = showMovieDetail(m);
                        $('.modal-body').html(movieDetail);
                    },
                    error: (e) => {
                        console.log(e.responseText);
                    }
                })
            });


        },
        error: (e) => {
            console.log(e.responseText);
        }
    });

})




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