import React, {useState} from 'react';
import './scss/search.scss';


export default function Search({ onSearch }) {
  const [search, setSearch] = useState('');

  return (
    <>
      <input 
      placeholder="Search"
      value={search}
      onChange={e => setSearch(e.target.value)}
      />
      <button onClick={() => {
      setSearch('');
      // query(search);
      // changePage(`search/${query}`)
      }}>Search</button>
    </>
  )
}

