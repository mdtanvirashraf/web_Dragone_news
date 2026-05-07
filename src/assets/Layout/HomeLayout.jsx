import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../Component/Header';
import NaveBar from '../Component/NaveBar';
import LeftAcid from '../Component/HomeLayout/LeftAcid';
import RigtAcid from '../Component/HomeLayout/RigtAcid';
import Loading from '../Component/PrivateRoute/Loading';

const HomeLayout = () => {
    const { state } = useNavigation()
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <NaveBar></NaveBar>
            </header>
            <main className='mx-auto w-11/12 my-3 gap-1 *: grid grid-cols-12'>
                <section className='left_nav col-span-3 sticky top-3 h-fit'>
                    <LeftAcid></LeftAcid>
                </section>
                <section className='main  col-span-6'>
                    // eslint-disable-next-line no-constant-condition
                    <Outlet></Outlet>
                </section>
                <section className='right_nav col-span-3 sticky top-0 h-fit'>
                    <RigtAcid></RigtAcid>
                </section>
            </main>
        </div>
    );
};

export default HomeLayout;