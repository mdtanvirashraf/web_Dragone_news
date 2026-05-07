import React from 'react';
import { FaBackspace } from 'react-icons/fa';
import { LuArrowLeftFromLine } from 'react-icons/lu';
import { Link } from 'react-router';

const FullNews = ({ news }) => {
    if (!news) {
        return <p>Loading...</p>;
    }
    const {
        title,
        author,
        image_url,
        details,
        total_view,
        rating,
    } = news;

    return (
        <div className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <img src={image_url} alt={title} className="w-full h-56 object-cover" />

            <div className="p-5">
                <h2 className="text-xl font-bold mb-2">{title}</h2>

                <div className="flex items-center gap-3 mb-3">
                    <img
                        src={author?.img}
                        alt={author?.name}
                        className="w-10 h-10 rounded-full"
                    />
                    <div>
                        <p className="text-sm font-semibold">{author?.name}</p>
                        <p className="text-xs text-gray-500">
                            {author?.published_date
                                ? new Date(author.published_date).toDateString()
                                : ""}
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 text-sm mb-4 flex justify-around">
                    {details}
                </p>

                <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">
                        👁 {total_view}
                    </span>

                    <span className="text-sm text-orange-500">
                        ⭐ {rating?.number} ({rating?.badge})
                    </span>
                </div>
                <Link className='items-center flex gap-3 bg-red-600 px-4 py-1.5 text-white text-2xl w-3/12 rounded-xl my-1.5' to={`/category/${news.category_id}`}><LuArrowLeftFromLine size={35} color='white' />Go back</Link>
            </div>
        </div>
    );
};

export default FullNews;