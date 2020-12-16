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
                    <h2>Species: {character.species}</h2>
                    <h2>Home Planet: {character.homeworld}</h2>
                    {character.masters && (
                        <div style={{display: 'flex', justifyContent: 'flex-start'}}>
                           <ul>Masters</ul>
                           {[character.masters].map((master, i) => {
                               return <li>{master}</li>
                           })}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;