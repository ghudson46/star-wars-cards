import React from 'react';


function Card({ character }) {
    return (
        <div className="card">
            <div className="card_img">
                <img src={character.image} alt={character.name} />
            </div>
            <div className="card_name">
                <h3>{character.name}</h3>
            </div>
            <div className="card_species">
                <p>{character.species}</p>
            </div>
            <div className="card_planet">
                <p>{character.homeworld}</p>
            </div>
        </div>
    )
}

export default Card;