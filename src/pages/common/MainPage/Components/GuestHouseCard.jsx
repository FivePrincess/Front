import { useState } from "react";

export function GuestHouseCard({ id, title, image, location, rating, reviews, className = "", liked }) {
    const [isLiked, setIsLiked] = useState(liked === 1);

    const toggleLike = () => {
        setIsLiked(prev => !prev);
    };

    return (
        <div className={`group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-md ${className} w-[calc(100%+50px)]`}>
            <div className="aspect-[4/3] overflow-hidden">
                <img
                    src={image || "/placeholder.svg"}
                    alt={title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
            </div>
            <button
                className={`absolute right-2 bottom-16 rounded-full bg-white/90 p-2 transition-colors ${isLiked ? "text-red-500" : "text-gray-600"} hover:text-red-500 hover:scale-120`}
                aria-label="Like guesthouse"
                onClick={toggleLike}
            >
                ♥
            </button>
            <div className="flex flex-col space-y-1.5 p-4">
                <h3 className="font-semibold">{title}</h3>
                <div className="flex items-center text-sm text-gray-600">📍 {location}</div>
                <div className="flex items-center space-x-1 text-sm">
                    ⭐ <span className="font-medium px-2">{rating ?? "N/A"}</span>
                    <span className="text-gray-600">({(reviews ?? 0).toLocaleString()}명 평가)</span>
                </div>
            </div>
        </div>
    );
}