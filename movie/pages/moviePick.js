export default function moviepick(movie) {
    return (
      <div class="centerStuff">
        <h1>${movie.title}</h1>
        ${movie.poster_path}
            <div class="information">
                <h5>Genres</h5>
                <ul id="genre">${genres}</ul>
                <p> ${movie.overview}</p>
                <div>Release Date: ${movie.release_date}</div>
                <div>Average rating: ${movie.vote_average}<div> Votes counted: ${movie.vote_count}</div></div>
                <div>Budget: ${movie.budget}</div>
                <div>Revenue: ${movie.revenue}</div>
            </div>
    </div>
    );
  }