import React, { useEffect, useState } from 'react';
import Header from '../Header';
import RigtAcid from '../HomeLayout/RigtAcid';
import FullNews from './FullNews';
import { useLoaderData, useParams } from 'react-router';




const NewsDetelse = () => {
    const data = useLoaderData()
    const { id } = useParams()
    const [news, setNews] = useState()
    // console.log(data, id, news)
    useEffect(() => {
        const newsDetelse = data.find((singleNews) => singleNews.id == id)
        setNews(newsDetelse)
    }, [data, id])
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 grid grid-cols-12'>
                <section className='col-span-9 m-2'>
                    <h2 className='font-bold text-xl '>Dragon News</h2>
                    <FullNews news={news}></FullNews>
                </section>
                <section className='col-span-3'>
                    <RigtAcid></RigtAcid>
                </section>
            </main>
        </div>
    );
};

export default NewsDetelse;