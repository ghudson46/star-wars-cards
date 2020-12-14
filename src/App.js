import React, { useState, useEffect } from 'react';
import './App.css';

import getAllCharacters from './Services/characters';

function App() {
  const [starWarsData, setStarWarsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://akabab.github.io/starwars-api/api';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllCharacters(initialUrl + '/all.json');
      console.log(response);
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      await loadingCharacters(response.results);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingCharacters = async (data) => {
    
  }

  return (
    <div className="App">
      { loading ? <h1>Loading...</h1> : (
        <h1>Data is fetched</h1>
      )}
    </div>
  );
}

export default App;
