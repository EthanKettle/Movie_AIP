import './scss/search.scss'

function fetchSearch(query){
  const get = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=38a763a2d61b4b9bf250355de45a7ac7&query=${query}&page=1`);
  return get.json()
}

function makeSearch(query){
  let HTML = `<h1>Search Results for ${query}</h1><div>`;
  for (let i = 0; i < page.results.length; i++) {
      HTML +=
    `<div class="CardStyle" 
      onClick={() => {
      changePage(pick/${page.results[i]})
      }}>
      <div class="movieImg">
        ${page.results[i].poster_path}
      </div>
      <div class="info">
        <p class="rating">${page.results[i].vote_average}</p>
        <span class="name">${page.results[i].title}</span>
        <p class="date">${page.results[i].release_date}</p>
      </div>
    </div>`;
  }
  HTML += `</div>`
}

export default function movieSearch({ changePage }) {
    return (
      <div >
        
      </div>
    );
  }