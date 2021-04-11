import React from 'react'
import { Link } from "react-router-dom";
import HomeLogIn from './HomeLogIn';
import HomeNavBar from './HomeNavBar';

const LogIn = () => {

    return (
        <>
        <HomeLogIn />
        <HomeNavBar />
        <div className='login__card'>
            <h1>Zaloguj się</h1>
            <form>
                <div className='login__inputs__wrapper'>
                    <input/>
                    <input/>
                </div>
                <div className='login__btns'>
                    <button>Zaloguj</button>
                    <Link to='/register'>Załóż konto</Link>
                </div>
            </form>
         </div>
    </>
    )
}

export default LogIn