import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: true, //필요 시 인증 정보 포함
});

const recruitmentAPI = {
  //공고 상세 조회 (sample)
  getRecruitmentDetail: (recruitment_id) =>
    axiosInstance.get(`/recruitment/detail/${recruitment_id}`),
};

export default recruitmentAPI;
