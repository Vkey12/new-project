import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';
import SearchForm from './SearchForm';
import Footer from './Footer';

function App() {

  const url = "https://movie-kohl-gamma.vercel.app/Search"
  
  const [Search, setSearch] = useState([])
  

  useEffect(() =>{
    fetch(url)
      .then(res => res.json())
      .then(data => setSearch(data))
  },[])

  console.log(Search)

  const handleSearch = (term) => {
    fetch(`${url}?s=${term}`)
      .then((res) => res.json())
      .then((data) => setSearch(data.Search));
  };
 
  return (
    <div className="App">
      <div className='"search-nav'>
        <div className='title'>
          <h1>Movies</h1>
        </div>

        <div>
        <SearchForm onSearch={handleSearch} />
        </div>
        <div className='movies'>
          {Search.map((movie) =>{
            return <MovieCard {...movie}/>
          })}

        </div>
        <div>
          <Footer/>
        </div>

      </div>
    </div>
  );
}

export default App;
