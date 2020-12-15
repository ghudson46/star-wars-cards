import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Navbar() {
    return(
        <>
        <Link to='/all'><Button>All</Button></Link>
        <Link to='/search'><Button>search</Button></Link>

        </>
    )
}

export default Navbar