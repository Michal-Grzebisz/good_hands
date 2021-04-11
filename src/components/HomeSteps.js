import React, { useEffect } from 'react'
import { NavLink } from "react-router-dom";
import AOS from 'aos';
import Icon1 from '../assets/Icon-1.svg'
import Icon2 from '../assets/Icon-2.svg'
import Icon3 from '../assets/Icon-3.svg'
import Icon4 from '../assets/Icon-4.svg'

const HomeSteps = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <section className='steps' data-aos="fade">
            <div className='steps__title'>
                <h1>Wystarczą 4 proste kroki</h1>
            </div>
            <div className='steps__content'>
                <div className="steps__content__columns" data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <img src={Icon1} alt=""/>
                    <h2>Wybierz rzeczy</h2>
                    <span>ubrania, zabawki, sprzęt i inne</span>
                </div>
                <div className="steps__content__columns" data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <img src={Icon2} alt=""/>
                    <h2>Spakuj je</h2>
                    <span>skorzystaj z worków na śmieci</span>
                </div>
                <div className="steps__content__columns" data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <img src={Icon3} alt=""/>
                    <h2>Zdecyduj komu chcesz pomóc</h2>
                    <span>wybierz zaufane miejsce</span>    
                </div>
                <div className="steps__content__columns" data-aos="fade" data-aos-offset="200" data-aos-easing="ease-in-sine">
                    <img src={Icon4} alt=""/>
                    <h2>Zamów kuriera</h2>
                    <span>kurier przyjedzie w dogodnym terminie</span>
                </div>
            </div>
            <div className="steps__button"  >
                <NavLink to='/login' className='btn from-center'>ODDAJ RZECZY</NavLink>
            </div>
        </section>
    )
}

export default HomeSteps