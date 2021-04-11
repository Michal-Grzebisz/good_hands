import React from 'react'
import { Link } from "react-router-dom";

const HomeLogIn = () => {

    return (
        <div className='nav__log'>
        <Link to='/login'>Zaloguj</Link>
        <Link to='/register'>Załóż konto</Link>
    </div>
    )
}

export default HomeLogIn