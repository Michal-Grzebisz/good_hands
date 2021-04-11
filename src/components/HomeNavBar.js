import React from 'react'
import { Link } from 'react-scroll'

const HomeNavBar = () => {

    return (
        <nav className='home__navigation'>
            <ul className='home__navigation__links'>
                <Link to='/'>Start</Link>
                <Link to='' smooth={true} duration={1000}>O co chodzi?</Link>
                <Link to='' smooth={true} duration={1000}>O nas</Link>
                <Link to='' smooth={true} duration={1000}>Fundacja i organizacje</Link>
                <Link to='' smooth={true} duration={1000}>Kontakt</Link>
            </ul>
        </nav>
    )
}

export default HomeNavBar
