import recruitmentAPI from "../api/RecruitmentAPI";

const getRecruitmentDetail = async (recruitment_id, setRecruitment) => {
  try {
    const response = await recruitmentAPI.getRecruitmentDetail(recruitment_id);
    setRecruitment(response.data[0]);
  } catch (error) {
    console.error(
      "게스트하우스 세부 정보 조회 실패",
      error.response?.data?.message || error.message
    );
  }
};

export { getRecruitmentDetail };
