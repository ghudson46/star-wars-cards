import React, { useEffect, useState } from 'react';

import { getAllCharacters, getCharacter } from '../Services/characters';
import Card from '../components/Card/Card.js';

function AllCharacters() {
    const [starWarsData, setStarWarsData] = useState([]);

    const [loading, setLoading] = useState(true);
    const initialUrl = 'https://akabab.github.io/starwars-api/api';

    useEffect(() => {
        async function fetchData() {
          let response = await getAllCharacters(initialUrl + '/all.json');
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
        <div>
          { loading ? <h1>Loading...</h1> 
          : (
            <>
              <div className="grid-container">
                {starWarsData.map((character, i) => {
                  return <Card key={i} character={character} />
                })}
              </div>
            </>
          )}
        </div>
      );

}

export default AllCharacters;