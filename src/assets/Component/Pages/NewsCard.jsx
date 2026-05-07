// import React from 'react';

// const NewsCard = ({ news }) => {
//     return (
//         <div>
//             {
//                 news.title
//             }
//         </div>
//     );
// };

// export default NewsCard;
import React from 'react';
import { FaRegBookmark, FaShareAlt, FaEye, FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const NewsCard = ({ news }) => {
    const { author, title, image_url, details, total_view, rating, id } = news;

    // Formatting date to a readable string
    const formattedDate = new Date(author.published_date).toLocaleDateString('en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm p-5 font-sans">
            {/* Header: Author Info and Actions */}
            <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                        <h4 className="font-bold text-gray-800 text-sm">{author.name}</h4>
                        <p className="text-gray-500 text-xs">{formattedDate}</p>
                    </div>
                </div>
                <div className="flex gap-3 text-gray-400">
                    <FaRegBookmark className="cursor-pointer hover:text-gray-600" />
                    <FaShareAlt className="cursor-pointer hover:text-gray-600" />
                </div>
            </div>

            {/* Title */}
            <h2 className="text-xl font-extrabold text-gray-800 mb-4 leading-tight">
                {title}
            </h2>

            {/* Main Image */}
            <div className="w-full h-64 overflow-hidden rounded-md mb-4">
                <img
                    src={image_url}
                    alt="News Thumbnail"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Details / Preview */}
            <div className="text-gray-600 text-sm leading-relaxed mb-4">
                <p>
                    {details.length > 250 ? `${details.slice(0, 250)}...` : details}
                </p>
                <Link to={`/newsdetelse/${id}`} className="text-orange-500 font-bold mt-2 hover:underline">
                    Read More
                </Link>
            </div>

            <hr className="border-gray-100 mb-4" />

            {/* Footer: Rating and Views */}
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                        <FaStar
                            key={i}
                            className={i < rating.number ? "text-orange-400" : "text-gray-200"}
                        />
                    ))}
                    <span className="ml-2 text-gray-500 font-medium">{rating.number.toFixed(1)}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span className="text-sm font-medium">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;