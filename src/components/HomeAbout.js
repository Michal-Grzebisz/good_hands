import React, { useEffect } from 'react'
import AOS from 'aos';

const HomeAbout = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);

    return (
        <section className="about" data-aos="fade">
            <div className="about__content">
                <h1>O nas</h1>
                <span>Nori grape silver beet broccoli kombu 
                    beet greens fava bean potato quandong celery. 
                    Bunya nuts black-eyed pea prairie turnip leek
                    lentil turnip greens parsnip.</span>
            </div>
            <div className="about__image" data-aos="fade" data-aos-offset="300" data-aos-easing="ease-in-sine"/>
        </section>
    )
}

export default HomeAbout