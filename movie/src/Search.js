import React, {useState} from 'react';
import './scss/search.scss';
const key = '6b9f844777c1c7871dcdef89004ab36e';


export default function Search() {
  const [query, setQuery] = useState('');
  return (
    <>
      <input 
      placeholder="Search"
      value={query}
      onChange={e => setQuery(e.target.value)}
      />
      <button onClick={() => {
        ApiCall(query)
      }}>Search
      </button>
      <div className='searchResults'>

      </div>
    </>
  )
}

async function ApiCall(query) {
  let url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}&page=1`;
  const response = await fetch(url)
  const data = await response.json()
  // console.log(data.results)
  data.results.map(({id, title}) => {
    console.log(id);
    return id;
  })
}

// function makeSearch(searchInput){
//   let HTML = `Search Results for ${query}`;
//   for (let i = 0; i < page.results.length; i++) {
//       HTML +=
//     `<div class="CardStyle" 
//       onClick={() => {
//       changePage(pick/${page.results[i]})
//       }}>
//       <div class="movieImg">
//         ${page.results[i].poster_path}
//       </div>
//       <div class="info">
//         <p class="rating">${page.results[i].vote_average}</p>
//         <span class="name">${page.results[i].title}</span>
//         <p class="date">${page.results[i].release_date}</p>
//       </div>
//     </div>`;
//   }
// }