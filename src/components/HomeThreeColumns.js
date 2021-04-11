import React, { useEffect } from 'react' 
import AOS from 'aos';


const HomeThreeColumns = () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, []);


    return (
        <section  className='columns' data-aos="fade">
            <div  className='columns__three'>
                <h1>10</h1>
                <h2>ODDANYCH WORKÓW</h2>
                <div className='columns__three__content'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                </div>
            </div>
            <div className='columns__three'>
                <h1>5</h1>
                <h2>WSPARTYCH ORGANIZACJI</h2>
                <div className='columns__three__content'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                </div>
            </div>
            <div className='columns__three'>
                <h1>7</h1>
                <h2>ZORGANIZOWANYCH ZBIÓREK</h2>
                <div className='columns__three__content'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque vel enim a elit viverra elementuma. Aliquam erat volutpat.</span>
                </div>
            </div>
        </section>
    )
}

export default HomeThreeColumns