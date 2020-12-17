import React from 'react';
import './Card.css';


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
                    <h2>{character.species}</h2>
                    <h2>{character.homeworld}</h2>
                    {character.masters && (
                        <>
                            <p>{character.name} was trained by {character.masters[0]}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card;