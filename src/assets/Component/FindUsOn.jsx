import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUsOn = () => {
    return (
        <div className='rounded-2xl bg-base-200 my-5'>
            <h2 className='font-bold justify-start flex p-4'>Find Us On</h2>
            <div className="join join-vertical w-full">
                <button className="btn join-item w-full justify-start"><FaFacebook size={30}></FaFacebook> Facebook</button>
                <button className="btn justify-start join-item w-full"><FaTwitter size={30}></FaTwitter> Twitter</button>
                <button className="btn justify-start join-item w-full"><FaInstagram size={30}></FaInstagram> Instagram</button>
            </div>
        </div>
    );
};

export default FindUsOn;