import React, { useState } from 'react';
import './scss/trending.scss'



export default function Trending() {
  const [cards, setCards] = useState('');
  const key = '6b9f844777c1c7871dcdef89004ab36e';
  let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
  fetch(url)
  .then(response => response.json())
  .then(content => {
    content.results.map((id, title, poster_path, overview, popularity) => {
      console.log(id);
    })
  })

  return (
    <div className='trending'>

    </div>
  )
}


// api key 6b9f844777c1c7871dcdef89004ab36e
// example request https://api.themoviedb.org/3/movie/550?api_key=6b9f844777c1c7871dcdef89004ab36e\
// api Read Access Token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjlmODQ0Nzc3YzFjNzg3MWRjZGVmODkwMDRhYjM2ZSIsInN1YiI6IjYyYTBjY2IxZDIxNDdjMTE3ZTY3YzJmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mgew4Nf_BORP76TOmS9vnBmLWnwrSuSsXfLHmyUtOGs