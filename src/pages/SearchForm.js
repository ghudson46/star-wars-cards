import React, { useState, useEffect } from 'react';

import { getCharacter, getAllCharacters } from '../Services/characters';

import Card from '../components/Card/Card';

function SearchForm() {
    const [searchValue, setSearchValue] = useState('');
    const [loading, setLoading] = useState(true);
    const [starWarsData, setStarWarsData] = useState([]);
    const [finalValue, setFinalValue] = useState('');

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
        setFinalValue('');
        setSearchValue(event.target.value);
    }


    function handleSubmit(event) {
        event.preventDefault();
        setFinalValue(searchValue);
        setSearchValue('');
    }



    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '3rem'}}>
            <label htmlFor='search' style={{color: '#f9d71c', fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem'}}>Search for a character by name</label>
            <input style={{width: '60%', alignItems: 'center', height: '2rem', borderRadius: '5px'}} type='text' value={searchValue} onChange={handleChange} />
            <button style={{backgroundColor: '#f9d71c', borderRadius: '5px', color: 'black', fontWeight: '800', marginTop: '2rem', border: '1px solid black', cursor: 'pointer', padding: '.5rem'}} onClick={handleSubmit}>SEARCH</button>
            {starWarsData.map((character, i) => {
            if (character.name === finalValue) {
                return <Card key={i} character={character} />
            }
              return null;
            })}
        </div>
    )
}

export default SearchForm;