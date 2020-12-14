import React, { useState, useEffect } from 'react';
import './App.css';

import { getAllCharacters, getCharacter } from './Services/characters';

import Card from './components/Card';

function App() {
  const [starWarsData, setStarWarsData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [prevUrl, setPrevUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const initialUrl = 'https://akabab.github.io/starwars-api/api';

  useEffect(() => {
    async function fetchData() {
      let response = await getAllCharacters(initialUrl + '/all.json');
      setNextUrl(response.next);
      setPrevUrl(response.previous);
      let character = await loadingCharacters(response);
      setLoading(false);
    }
    fetchData();
  }, []);

  const loadingCharacters = async data => {
    let _starWarsData = await Promise.all(data.map(async character => {
      let characterRecord = await getCharacter(initialUrl + '/id/' + character.id + '.json');
      return characterRecord;
    }))
    setStarWarsData(_starWarsData);
  }

  return (
    <div className="App">
      { loading ? <h1>Loading...</h1> 
      : (
        <>
          <div>
            {starWarsData.map((character, i) => {
              return <Card key={i} character={character} />
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
