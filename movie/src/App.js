import Header from './header/Header';
import Search from './Search';
import './css/App.css'
import {BrowserRouter as Router} from 'react-router-dom'



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
      <Header />
      {<Search />}
    </div>
  }

  function SearchPage() {

  }

  function Pick() {

  }
}



export default App;