import Header from './header/Header';
import BottomNav from './footer/BottomNav';
import Search from './Search';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './Trending';


function App() {
  

  return (
    <Router>
      <Route path="/" render={() => <Home />}>
      </Route>
      <Route path="/search/:query" compontent={SearchPage}>
      </Route>
      <Route path="/pick/:movie" compontent={Pick}>
      </Route>
    </Router> 
    
  );

  function Home() {
    <div className="App">

          <Router>
            <Header />
            <Routes>
              <Route exact path='/' />
              <Route path='/trending' element={<Trending />} />
              <Route path='/search' element={<Search />}/>
            </Routes>
            <BottomNav />
          </Router>

//       <Header />
//       {<Search />}

    </div>
  }

  function SearchPage() {

  }

  function Pick() {

  }
}



export default App;