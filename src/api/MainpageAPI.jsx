import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: true, //필요 시 인증 정보 포함
});

const mainpageAPI = {
    // 추천 게스트하우스 목록 조회
    getRecommendedGuesthouses: () => axiosInstance.get(`/main/guesthouse/list-by-recommend`),

    // 인기 게스트하우스 목록 조회
    getPopularGuesthouses: () => axiosInstance.get(`/main/guesthouse/list-by-liked`),
};

export default mainpageAPI;
