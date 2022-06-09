import Header from './header/Header';
import BottomNav from './footer/BottomNav';
import Search from './Search';
import './css/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Trending from './Trending';

function App() {


  return (
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
    </div>
  );
}

export default App;