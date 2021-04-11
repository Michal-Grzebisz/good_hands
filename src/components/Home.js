import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import HomeAbout from './HomeAbout';
import HomeHelp from './HomeHelp';
import HomeLogIn from './HomeLogIn';
import HomeNavBar from './HomeNavBar';
import HomeSteps from './HomeSteps';
import HomeThreeColumns from './HomeThreeColumns';
import HomeContact from './HomeContact';


const Home = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <>
            <div className='home'>
                <div className='home__info'>
                    <div className='home__info__background'/>
                    <div className='home__info__content'>
                        <HomeLogIn />
                        <HomeNavBar />
                        <div className='home__info__content__text'>
                            <h1>Zacznij pomagać! Oddaj niechciane rzeczy w zaufane ręce</h1>
                            <div className='home__info__buttons' data-aos="fade">
                                <NavLink to='/login' className='btn from-center'>ODDAJ RZECZY</NavLink>
                                <NavLink to='/login' className='btn from-center'>ZORGANIZUJ ZBIÓRKĘ</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <HomeThreeColumns />
            <HomeSteps />
            <HomeAbout />
            <HomeHelp />
            <HomeContact />
        </>
    )
}

export default Home