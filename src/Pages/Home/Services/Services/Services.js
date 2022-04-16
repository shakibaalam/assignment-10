import React from 'react';
import { IoMdArrowDroprightCircle } from 'react-icons/io';

const Services = () => {
    return (
        <div className='container my-5 py-5'>
            <div className='row my-5 py-5'>
                <div className='col-12 col-md-6'>
                    <h2 className='service-heading'>Enjoy Some You-Time</h2>
                    <p>When you have too much to get done, the only thing you want to do is have a little me time. If this seems too hard to squeeze into your schedule, then think again! Having time to yourself can help in so many ways, and it doesn’t have to take loads of time either. Take a look at these amazing (and simple) me time ideas that you can use for inspiration right now. Enjoy – you deserve it.</p>
                    <button className='btn fw-bold fs-5 btn-style px-4 my-4'> Read more <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></button>
                </div>
                <div className='col-12 col-md-6 text-center'>
                    <img className='w-50' src="https://www.hotelplaza.hr/wp-content/uploads/2021/02/HotelPlaza_HomeBox_1-1.jpg" alt="" />
                </div>
            </div>

            <div className='row my-5 py-5'>
                <div className='col-12 col-md-6 text-center'>
                    <img className='w-50' src="https://www.flightexpert.com/blog/wp-content/uploads/2017/11/Dhaka-Hotels.jpg" alt="" />
                </div>
                <div className='col-12 col-md-6'>
                    <h2 className='service-heading'>The Perfect Surronding</h2>
                    <p>Always Surrounds yourself with positive souls and good vives will just come naturally.Remember that your surroundings will influence your experience so make it a positive one. </p>
                    <button className='btn fw-bold fs-5 btn-style px-4 mt-4'> Read more <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></button>
                </div>
            </div>

            <div className='row my-5 py-5'>
                <div className='col-12 col-md-6'>
                    <h2 className='service-heading'>Fine Food Cuisine</h2>
                    <p>Here you can find how you can preserve your favorite type of pumpkin, the latest trends in home design, and a hearty recipe for a cheesy green Shakshuka – all packed into beautiful stories, sufficiently long enough to keep you company over your morning coffee, and delivered to you directly by expert chefs and artistic decorators.</p>
                    <button className='btn fw-bold fs-5 btn-style px-4 my-4'> Read more <IoMdArrowDroprightCircle></IoMdArrowDroprightCircle></button>
                </div>
                <div className='col-12 col-md-6 text-center'>
                    <img className='w-50' src="https://www.ocregister.com/wp-content/uploads/migration/lh3/lh30a6-lh302rlagunabeachrestaurantinfo.jpg" alt="" />
                </div>
            </div>

        </div>
    );
};

export default Services;