import React, { useState, useEffect } from 'react';
import './scss/trending.scss'
const key = '6b9f844777c1c7871dcdef89004ab36e';


export default function Trending({getTrending}) {
  const [cards, setCards] = useState('');
  async function ApiCall() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    getTrending(data)
  }

  useEffect(() => {
    console.log("executed only once!");
    ApiCall();
  }, [""]);

  return (
      <h1>Trending Movies</h1>
  )
}


// api key 6b9f844777c1c7871dcdef89004ab36e
// example request https://api.themoviedb.org/3/movie/550?api_key=6b9f844777c1c7871dcdef89004ab36e\
// api Read Access Token eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjlmODQ0Nzc3YzFjNzg3MWRjZGVmODkwMDRhYjM2ZSIsInN1YiI6IjYyYTBjY2IxZDIxNDdjMTE3ZTY3YzJmOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Mgew4Nf_BORP76TOmS9vnBmLWnwrSuSsXfLHmyUtOGs