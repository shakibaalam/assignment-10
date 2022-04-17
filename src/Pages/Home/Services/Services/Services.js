import React from 'react';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

const Services = () => {
    return (
        <div id='services' className='container my-5 py-5 '>
            <div className='row my-5 py-5'>
                <div className='col-12 col-md-6'>
                    <h2 className='service-heading'>Private Tour: 5 Days - Bangladesh Nature & Culture Tour - North-eastern part</h2>
                    <p>This Tour is a great combination of Nature, Culture and Heritage of Bangladesh. Our knowledgeable and friendly guides work behind the scenes which is different from others. A trip with us will broaden your horizons and deepen your understanding of Bangladeshi tradition and culture.</p>
                    <h3>Price: $666.67</h3>
                    <button className='btn fw-bold fs-5 btn-style px-4 my-3'> Check Availability <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></button>
                </div>
                <div className='col-12 col-md-6 text-center'>
                    <img className='w-75' src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/1b/53/29.jpg" alt="" />
                </div>
            </div>

            <div className='row my-5 py-5'>
                <div className='col-12 col-md-6 text-center'>
                    <img className='w-75' src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/de/90/64.jpg" alt="" />
                </div>
                <div className='col-12 col-md-6'>
                    <h2 className='service-heading'>6 Days Ancient North Bengal Tour</h2>
                    <p>Bangladesh is a nation significantly wealthy in archeological riches, especially of the crude time frame, both during the Muslim and pre-Muslim standards. North Bengal is an earlier territory assigned by the a large portion of archeological destinations like UNESCO world legacy Paharpur, Kantajee sanctuary, Puthia sanctuary complex, Choto Sona mosque in Gaud, remains of Mahasthangarh and a lot more places. In this visit, we'll spread all the destinations of Rajshahi, Chapai Nawabganj, Puthia, Rangpur, Dinajpur, Paharpur, Bogra and Rajbari areas.</p>
                    <h3>Price: $800</h3>
                    <button className='btn fw-bold fs-5 btn-style px-4 mt-3'> Check Availability <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></button>
                </div>
            </div>

            <div className='row my-5 py-5'>
                <div className='col-12 col-md-6'>
                    <h2 className='service-heading'>Dhaka City Tour</h2>
                    <p>Dhaka is the capital city of Bangladesh, in southern Asia. Set next to the Buriganga River, it's at the focal point of national government, exchange and culture. The seventeenth extremely old city was the Mughal capital of Bengal, and numerous royal residences and mosques remain. American draftsman Louis Khan's National Parliament House complex exemplifies the immense, quickly developing present day city. So I hope you will have fun with tour.</p>
                    <h3>Price: $90</h3>
                    <button className='btn fw-bold fs-5 btn-style px-4 my-4'> Check Availability <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></button>
                </div>
                <div className='col-12 col-md-6 text-center'>
                    <img className='w-75' src="https://media.tacdn.com/media/attractions-splice-spp-674x446/09/c3/39/fe.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Services;