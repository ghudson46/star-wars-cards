import React from 'react';
import './Card.css';

import ReactToPdf from 'react-to-pdf';

const ref = React.createRef();



function CardPDF({ character }) {


    return (
        <div class="flip-card">
            <div class="flip-card-inner">
            <div />
                <div>
                    <ReactToPdf targetRef={ref} filename="SWcard.pdf">
                        {({ toPdf }) => (
                            <button onClick={toPdf}>Export as PDF</button>
                        )}
                    </ReactToPdf>
                    <div class="flip-card-front" ref={ref}>
                    <img src={character.image} alt={character.name} />
                    <div className="overlay"><h1 className="front-text">{character.name}</h1></div>
                </div>
                </div>
                <div class="flip-card-back">
                    <h1>{character.name}</h1>
                    <h2>{character.species}</h2>
                    <h2>{character.homeworld}</h2>
                    {character.masters && (
                        <>
                            <p>{character.name} was trained by {character.masters}</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CardPDF;