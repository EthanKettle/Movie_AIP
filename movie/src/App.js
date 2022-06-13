import React, {useState} from 'react';
import Header from './header/Header';
import BottomNav from './footer/BottomNav';
import Search from './Search';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './Trending';
import Landing from './landing/Landing';

function App() {
  const singleMovieView = (id) => {
    console.log(id)
  }

  const [searchResultsDisplay, setDisplay] = useState([]);
  const getResults = (data) => {
    const movieInfo = data.results;
    setDisplay(movieInfo)
  }
  const movieData = searchResultsDisplay.map(({id, title, backdrop_path, poster_path, popularity, release_date, overview}) => {
    return <div onClick={singleMovieView(id)} className='movieCard' key={id}>
              <img src={'https://image.tmdb.org/t/p/original' + poster_path} className='movieImage' alt={title}></img>
          </div>
  })

  const [trendingDisplay, setTrendingDisplay] = useState([]);
  const getTrending = (data) => {
    console.log(data)
    const movieInfo = data.results;
    setTrendingDisplay(movieInfo);
  }
  const trendingMovieData = trendingDisplay.map(({id, title, backdrop_path, poster_path, popularity, release_date, overview}) => {
    return <div onClick={singleMovieView(id)} className='movieCard' key={id}>
            <div className='imageOverlay'></div>
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} className='movieImage' alt={title}></img>
          </div>
  })
  
  const [landingMovies, setLandingMovies] = useState([]);
  const getLandingMovies = (data) => {
    console.log(data)
    const movieInfo = data.results;
    setLandingMovies(movieInfo);
  }
  const landingMovieData = landingMovies.map(({id, title, backdrop_path, poster_path, popularity, release_date, overview}) => {
    return <div onClick={singleMovieView(id)} className='movieCard' key={id}>
            <div className='imageOverlay'></div>
            <img src={'https://image.tmdb.org/t/p/original' + poster_path} className='movieImage' alt={title}></img>
          </div>
  })

  return (
    
    <div className="App">
          <Router>
            <Header />
            <div className='searchContainer'>
              <Routes>
                <Route exact path='/' element={<><Landing getLandingMovies={getLandingMovies}/><div className='landingMovieContainer'>{landingMovieData}</div></>}/>
                <Route path='/trending' element={<><Trending getTrending={getTrending}/><div className='trendingContainer'>{trendingMovieData}</div></>} />
                <Route path='/search' element={<><Search getResults={getResults}/><div className='movieCardContainer'>{movieData}</div></>} />
              </Routes>
            </div>
            <BottomNav />
          </Router>
    </div>
  );
}

export default App;

// Adding page for each movie - Click in to each movie.