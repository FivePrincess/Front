import mainpageAPI from "../api/MainpageAPI.jsx";

const getGuesthouseList = async (setGuesthouseList) => {
    try {
        const response = await mainpageAPI.getGuesthouseList();
        setGuesthouseList(response.data[0]);
    } catch (error) {
        console.error(
            "게스트하우스 조회 실패",
            error.response?.data?.message || error.message
        );
    }
};

export { getGuesthouseList };
