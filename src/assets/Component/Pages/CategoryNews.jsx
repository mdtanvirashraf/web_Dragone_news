// import React, { useEffect, useState } from 'react';
// import { useLoaderData, useParams } from 'react-router';

// const CategoryNews = () => {
//     const { id } = useParams()
//     const data = useLoaderData()
//     const [categoryNews, SetCategoryNews] = useState([])
//     console.log(id, data)
//     // useEffect(() => {
//     //     if (id == '0') {
//     //         SetCategoryNews(data);
//     //         console.log(data)
//     //     }
//     //     else if (id == "1") {
//     //         const filteredNews = data.filter(news => news.others.is_today_pick == true)
//     //         SetCategoryNews(filteredNews)
//     //     }
//     // }, [id, data])

//     return (
//         <div>
//             <p>calgary news {categoryNews.length}</p>

//         </div>
//     );
// };

// export default CategoryNews;


import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom"; // ✅ react-router-dom
import NewsCard from "./NewsCard";

const CategoryNews = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(() => {
        if (!data) return;

        if (id === "0") {
            setCategoryNews(data);
        } else if (id === "1") {
            const filteredNews = data.filter(
                (news) => news?.others?.is_today_pick === true
            );
            setCategoryNews(filteredNews);
        } else {
            // ✅ অন্য category id থাকলে filter (যদি category_id থাকে)
            const filteredNews = data.filter((news) => news?.category_id == id);
            setCategoryNews(filteredNews);
        }
    }, [id, data]);

    return (
        <div>
            <h2 className="font-bold">category news: <span className="text-secondary">{categoryNews.length}</span></h2>
            <div className="grid grid-cols-1 gap-5">
                {
                    categoryNews.map((news) => <NewsCard key={news.id} news={news}></NewsCard>)
                }

            </div>
        </div>
    );
};

export default CategoryNews;
