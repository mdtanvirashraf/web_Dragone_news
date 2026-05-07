import React from 'react';
import NaveBar from '../Component/NaveBar';
import { Outlet } from 'react-router';

const Authorization = () => {
    return (
        <div className='bg-base-200 min-h-screen p-5'>
            <NaveBar></NaveBar>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Authorization;