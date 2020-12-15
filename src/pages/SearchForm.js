import React, { useState, useEffect } from 'react';

import { getCharacter, getAllCharacters } from '../Services/characters';

function SearchForm() {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [starWarsData, setStarWarsData] = useState([]);

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

    function handleChange(event) {
        setSearchValue(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        getCharacter(initialUrl + '/id/1.json');

        setSearchValue('');
    }



    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem'}}>
            <label htmlFor='search' style={{color: '#f9d71c', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem'}}>Search for a character by name</label>
            <input style={{width: '60%', alignItems: 'center'}} type='text' value={searchValue} onChange={handleChange} />
            <button onClick={handleSubmit}>SEARCH</button>

            <Card key='1' character={character} />
        </div>
    )
}

export default SearchForm;