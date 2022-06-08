import Header from './header/Header';
import Search from './Search';
import PAGE from './PAGES'
import './css/App.css'



function App() {
  const [page, setPage] = useState(PAGE.HOME);

  const changePage = () => {
    switch (page) {
      case PAGE.HOME:
      case PAGE.SEARCH:
      case PAGE.PICK:
    }

  };

  return (
    <div className="App">
      <Header />
      {/* <Search /> */}
    </div>
  );
}

export default App;