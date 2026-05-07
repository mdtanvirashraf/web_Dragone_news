import React, { Suspense, use } from 'react';
import { NavLink } from "react-router-dom";

import './AllCatagary.css';

const categaryPromise = fetch("/demo-data/categories.json").then(res => res.json())
const AllCatagary = () => {
    const categories = use(categaryPromise)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                <h2 className='font-bold'>All Category {categories.length}</h2>
                <div className='leftLink grid grid-cols-1 gap-0.5'>
                    {categories.map(categorie => (<NavLink to={`/category/${categorie.id}`} className="btn p-3 hover:text-xl">{categorie.name}</NavLink>))}
                </div>
            </Suspense>
        </div>
    );
};

export default AllCatagary;