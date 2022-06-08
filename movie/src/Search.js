const [search, setSearch] = useState('');

export default function Search({ onSearch }) {

  return (
    <>
      <input 
      placeholder="Search"
      value={search}
      onChange={e => setSearch(e.target.value)}
      />
      <button onClick={() => {
      setSearch('');
      query(search);
      changePage(`search/${query}`)
      }}></button>
    </>
  )
}

