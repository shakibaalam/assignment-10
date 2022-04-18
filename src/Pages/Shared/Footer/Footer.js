import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='py-5' style={{ backgroundColor: '#247881' }}>
            <p className='text-center text-white'>Copyright @{year}</p>
        </div>
    );
};

export default Footer;