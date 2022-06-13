import React, { useEffect } from 'react';
import '../scss/landingMovies.scss'
const key = '6b9f844777c1c7871dcdef89004ab36e';

export default function LandingMovies({getLandingMovies}) {
  async function ApiCall() {
    let url = `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
    const response = await fetch(url)
    const data = await response.json()
    getLandingMovies(data)
  }

  useEffect(() => {
    ApiCall();
  }, [""]);

  return (
    <h1>Landing movies here</h1>
  )
}
