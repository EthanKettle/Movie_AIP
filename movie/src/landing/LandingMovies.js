import React, { useState, useEffect } from 'react';
const key = '6b9f844777c1c7871dcdef89004ab36e';

export default function Trending({getTrending}) {
  const [cards, setCards] = useState('');
  async function ApiCall() {
    let url = `https://api.themoviedb.org/3/movie/latest?api_key=${key}&language=en-US`;
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
      <h1>Most Recent Movies</h1>
  )
}