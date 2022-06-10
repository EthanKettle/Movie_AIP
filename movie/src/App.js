import React, {useState} from 'react';
import Header from './header/Header';
import BottomNav from './footer/BottomNav';
import Search from './Search';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './Trending';

function App() {
  const [searchResultsDisplay, setDisplay] = useState([]);
  // 1) Variable containing needed data 2) Setting state to that variable 3) Using state to render JSX
  const getResults = (data) => {
    const movieInfo = data.results;
    setDisplay(movieInfo)
    const movieData = data.results.map(({id, title, backdrop_path, poster_path, popularity, release_date, overview}) => {
      return <li key={id}>
                <img className='movieImage' alt={title}>{poster_path}</img>
                
            </li>
    })
  }
}

function App() {

  const parentToChild = (data) => {
    
  }
  
  return (
    <div className="App">
          <Router>
            <Header />
            <Routes>
              <Route exact path='/' />
              <Route path='/trending' element={<Trending />} />
              <Route path='/search' element={<Search getResults={getResults}/>}/>
            </Routes>
            <BottomNav />
          </Router>
    </div>
  );
}

export default App;