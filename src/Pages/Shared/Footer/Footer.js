import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div >
            <p className='text-center pt-5 mt-5'>Copyright @{year}</p>
        </div>
    );
};

export default Footer;