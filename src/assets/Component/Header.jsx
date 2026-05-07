import { format } from 'date-fns';
import React from 'react';
import Marquee from 'react-fast-marquee';

const Header = () => {
    return (
        <div className='gap-3 flex justify-center flex-col items-center'>
            <img className='w-350px' src="../../../public/assets/logo.png" alt="Logo" />
            <p className='text-accent'>Junalisome without Fear or Favour </p>
            <p>{format(new Date(), "EEEE, MMMM MM yyyy")}</p>
            <div className='flex'>
                <p className='text-base-100 bg-secondary p-2'>Latest</p>
                <Marquee className='font-bold bg-base-200' pauseOnHover={true} speed={60}>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero impedit ea nihil alias distinctio est!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero impedit ea nihil alias distinctio est!</p><p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero impedit ea nihil alias distinctio est!</p>

                </Marquee>
            </div>
        </div>
    );
};

export default Header;