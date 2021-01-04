import React from 'react';
import { Link } from 'react-router-dom';

import './Navbar';

function Navbar() {
    return(
        <div style={{alignItems: 'center', display: 'flex', justifyContent: 'space-around', margin: '0 10rem 0 10rem'}}>
            <Link to='/'><img src='https://icons-for-free.com/iconfiles/png/512/r2d2+robot+starwars+icon-1320166698566079188.png' alt='BB8' style={{height: '8rem', width: '8rem'}} /><p style={{color: 'white', fontWeight: '800', textDecoration: 'none' }}>HOME</p></Link>
            <Link to='/search'><img src='https://img.icons8.com/plasticine/2x/stormtrooper.png' alt='storm trooper' style={{height: '8rem', width: '8rem'}} /><p style={{color: 'white', fontWeight: '800', textDecoration: 'none' }}>SEARCH</p></Link>
            <Link to='/all'><img src='https://cdn4.iconfinder.com/data/icons/movies-2-ultra-color/60/073_-_X_Wing-512.png' alt='X wing' style={{height: '8rem', width: '8rem'}} /><p style={{color: 'white', fontWeight: '800', textDecoration: 'none' }}>ALL</p></Link>
        </div>
    )
}

export default Navbar