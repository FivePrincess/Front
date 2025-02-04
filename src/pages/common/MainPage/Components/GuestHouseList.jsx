import { useState } from "react";
import { GuestHouseCard } from "./GuestHouseCard";

export function GuestHouseList({ title, guesthouses }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const showNext = () => {
        setCurrentIndex((prev) => (prev + 1) % guesthouses.length);
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev - 1 + guesthouses.length) % guesthouses.length);
    };

    // 현재 인덱스 기준으로 4개를 가져옴
    const visibleGuesthouses = [
        ...guesthouses.slice(currentIndex),
        ...guesthouses.slice(0, currentIndex)
    ].slice(0, 4);

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">{title}</h2>
            <div className="relative">
                <div className="grid grid-cols-1 gap-x-20 sm:grid-cols-2 md:grid-cols-4">
                    {visibleGuesthouses.map((guesthouse, index) => (
                        <GuestHouseCard
                            key={`${guesthouse.id}-${currentIndex}-${index}`} // 중복 방지
                            id={guesthouse.id}
                            title={guesthouse.title}
                            image={guesthouse.image}
                            location={guesthouse.location}
                            rating={guesthouse.rating}
                            reviews={guesthouse.reviews}
                            liked={guesthouse.liked}
                        />
                    ))}
                </div>
                <div className="absolute -left-3.5 top-1/2 flex -translate-y-1/2 space-x-1">
                    <button
                        className="h-8 w-8 rounded-full bg-white flex items-center border-2 justify-center text-gray-600 hover:bg-white"
                        onClick={showPrev}
                    >
                        ←
                    </button>
                </div>
                <div className="absolute -right-17 top-1/2 flex -translate-y-1/2 space-x-1">
                    <button
                        className="h-8 w-8 rounded-full bg-white flex items-center border-2 justify-center text-gray-600 hover:bg-white"
                        onClick={showNext}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}