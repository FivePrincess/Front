import React, { useEffect, useState } from "react";
import { GuestHouseList } from "./Components/GuestHouseList.jsx";
import mainpageAPI from "../../../api/MainpageAPI.jsx";

export default function MainPage() {
    const [topRatedGuesthouses, setTopRatedGuesthouses] = useState([]);
    const [popularGuesthouses, setPopularGuesthouses] = useState([]);

    useEffect(() => {
        const fetchRecommendedGuesthouses = async () => {
            try {
                const response = await mainpageAPI.getRecommendedGuesthouses();

                // API 응답 데이터를 GuestHouseCard의 props에 맞게 변환
                const formattedData = response.data.map(gh => ({
                    id: gh.id,
                    title: gh.name,
                    image: gh.image || "/placeholder.svg",
                    location: gh.address,
                    rating: gh.average_rating,
                    reviews: gh.rating_count,
                    liked: gh.liked
                }));

                setTopRatedGuesthouses(formattedData);
            } catch (error) {
                console.error("추천 게스트하우스 조회 실패", error.response?.data?.message || error.message);
            }
        };

        const fetchPopularGuesthouses = async () => {
            try {
                const response = await mainpageAPI.getPopularGuesthouses();

                const formattedData = response.data.map(gh => ({
                    id: gh.id,
                    title: gh.name,
                    image: gh.image || "/placeholder.svg",
                    location: gh.address,
                    rating: gh.average_rating,
                    reviews: gh.rating_count,
                    liked: gh.liked
                }));

                setPopularGuesthouses(formattedData);
            } catch (error) {
                console.error("인기 게스트하우스 조회 실패", error.response?.data?.message || error.message);
            }
        };

        fetchRecommendedGuesthouses();
        fetchPopularGuesthouses();
    }, []);

    return (
        <div className="container px-10 py-10 space-y-8">
            <GuestHouseList title="추천 게스트 하우스" guesthouses={topRatedGuesthouses} />
            <GuestHouseList title="인기 게스트 하우스" guesthouses={popularGuesthouses} />
        </div>
    );
}

// //백엔드로부터 게하 데이터 받아오기
// const topRatedGuesthouses = [
//   {
//     id: "1",
//     title: "스테이블 게스트하우스",
//     image: "https://modo-phinf.pstatic.net/20221214_44/1670978561247GUxLl_JPEG/mosaFsOJED.jpeg?type=f564_336",
//     location: "제주 서귀포시 안덕면 사계로 187-3",
//     rating: 9.3,
//     reviews: 5456,
//     liked: 0,
//   },
//   {
//     id: "2",
//     title: "틴디타운 게스트하우스",
//     image: "https://ldb-phinf.pstatic.net/20240624_63/1719227267041ppO58_PNG/%C1%A6%C1%D6%B5%B5_%B0%D4%BD%BA%C6%AE%C7%CF%BF%EC%BD%BA%C6%C4%C6%BC_%C6%BE%B4%F5%C5%B8%BF%EE_%2818%29.png",
//     location: "제주 제주시 구좌읍 구좌로",
//     rating: 9.5,
//     reviews: 5456,
//     liked: 0,
//   },
//   {
//     id: "3",
//     title: "그리고세화 게스트하우스",
//     image:
//         "https://lh3.googleusercontent.com/p/AF1QipNxwlyT3rEfuPO2TycNOGTLJsuvzcgyZqk2Byyn=s1360-w1360-h1020",
//     location: "제주 제주시 구좌읍 해맞이해안로",
//     rating: 9.2,
//     reviews: 5456,
//     liked: 0,
//   },
//   {
//     id: "4",
//     title: "비지티 게스트하우스",
//     image:
//         "https://yaimg.yanolja.com/v5/2024/08/13/11/1280/66bb3f41ba9243.87343589.jpg",
//     location: "제주 제주시 구좌읍 해맞이해안로",
//     rating: 9.1,
//     reviews: 5456,
//     liked: 0,
//   }
// ]
//
// const popularGuesthouses  = [
//   {
//     id: "1",
//     title: "스테이블 게스트하우스",
//     image: "https://modo-phinf.pstatic.net/20221214_44/1670978561247GUxLl_JPEG/mosaFsOJED.jpeg?type=f564_336",
//     location: "제주 서귀포시 안덕면 사계로 187-3",
//     rating: 9.3,
//     reviews: 5456,
//     liked: 0,
//   },
//   {
//     id: "2",
//     title: "틴디타운 게스트하우스",
//     image: "https://ldb-phinf.pstatic.net/20240624_63/1719227267041ppO58_PNG/%C1%A6%C1%D6%B5%B5_%B0%D4%BD%BA%C6%AE%C7%CF%BF%EC%BD%BA%C6%C4%C6%BC_%C6%BE%B4%F5%C5%B8%BF%EE_%2818%29.png",
//     location: "제주 제주시 구좌읍 구좌로",
//     rating: 9.5,
//     reviews: 5456,
//     liked: 0,
//   },
//   {
//     id: "3",
//     title: "그리고세화 게스트하우스",
//     image:
//         "https://lh3.googleusercontent.com/p/AF1QipNxwlyT3rEfuPO2TycNOGTLJsuvzcgyZqk2Byyn=s1360-w1360-h1020",
//     location: "제주 제주시 구좌읍 해맞이해안로",
//     rating: 9.2,
//     reviews: 5456,
//     liked: 0,
//   },
//   {
//     id: "4",
//     title: "비지티 게스트하우스",
//     image:
//         "https://yaimg.yanolja.com/v5/2024/08/13/11/1280/66bb3f41ba9243.87343589.jpg",
//     location: "제주 제주시 구좌읍 해맞이해안로",
//     rating: 9.1,
//     reviews: 5456,
//     liked: 0,
//   }
// ]
//


