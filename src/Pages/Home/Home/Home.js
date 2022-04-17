import React from 'react';
import { Carousel } from 'react-bootstrap';
import Services from '../Services/Services/Services';
import { IoMdArrowDroprightCircle } from 'react-icons/io';
import './Home.css'
import Footer from '../../Shared/Footer/Footer';
import CustomLink from '../../Shared/CustomLink/CustomLink';
import InfoSection from '../InfoSection/InfoSection ';

const Home = () => {
    return (
        <div>
            <div>
                <img className='w-100' src="https://unctad.org/sites/default/files/2021-08/2021-08-03_commentary_tourism_1200x675.jpg" alt="" />

                <div className='booking'>
                    <div className='row container'>
                        <div className='col-6 d-flex justify-content-center my-4 text-white'>
                            <h2>Your Dream Vacation is Here</h2>
                        </div>
                        <div className='col-6 d-flex justify-content-center my-4'>
                            <button className='btn fw-bold fs-5 btn-style px-4'><CustomLink to='/checkout'> Book Now <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></CustomLink></button>
                        </div>
                    </div>
                </div>
            </div>

            <Services></Services>
            <InfoSection></InfoSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;