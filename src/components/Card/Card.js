import React from 'react';
import './Card.css';

import ListItem from '../ListItem/ListItem';

function Card({ character }) {

    return (
        <div class="flip-card">
            <div class="flip-card-inner">
                <div class="flip-card-front">
                    <img src={character.image} alt={character.name} />
                    <div className="overlay"><h1 className="front-text">{character.name}</h1></div>
                </div>
                <div class="flip-card-back">
                    <h1>{character.name}</h1>
                    <p>Species: {character.species}</p>
                    <p>Home Planet: {character.homeworld}</p>
                    <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                    {character.masters && (
                        <ul>Masters</ul>
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;