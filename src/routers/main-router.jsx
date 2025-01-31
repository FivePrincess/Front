import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import SimpleLayout from "../layout/SimpleLayout";

// 공통 사용 페이지
import LoginPage from "../pages/common/LoginPage/LoginPage";
import GuestHouseDetailPage from "../pages/common/GuestHouseDetailPage/GuestHouseDetailPage";
import MainPage from "../pages/common/MainPage/MainPage";
import SelectSignUpPage from "../pages/common/SignUpPage/SelectSignUpPage";
import StaffSignUpPage from "../pages/common/SignUpPage/StaffSignUpPage";
import GuestHouseSignUpPage from "../pages/common/SignUpPage/GHSignUpPage";
import StaffRecruitmentDetailPage from "../pages/common/StaffRecruitmentDetailPage/StaffRecruitmentDetailPage";
import StaffRecruitmentPage from "../pages/common/StaffRecruitmentPage/StaffRecruitmentPage";

// 게스트하우스 회원 전용 페이지
import GHGuestHouseMyPage from "../pages/guesthouse/MyPage/MyPage";
import GHApplicantPage from "../pages/guesthouse/ApplicantPage/ApplicantPage";
import GHGuesHouseFormPage from "../pages/guesthouse/GuestHouseFormPage/GuestHouseFormPage";
import GHScrapPage from "../pages/guesthouse/ScrapPage/ScrapPage";
import GHStaffRecruitmentFormPage from "../pages/guesthouse/StaffRecruitmentFormPage/StaffRecruitmentFormPage";
import GHStaffRecruitmentPage from "../pages/guesthouse/StaffRecruitmentPage/StaffRecruitmentPage";

// 개인 회원 전용 페이지
import AlarmPage from "../pages/staff/AlarmPage/AlarmPage";
import STApplicantPage from "../pages/staff/ApplicantPage/ApplicantPage";
import STMyPage from "../pages/staff/MyPage/MyPage";
import STProfilFormPage from "../pages/staff/ProfileFormPage/ProfileFormPage";
import STResumeDetailPage from "../pages/staff/ResumeDetailPage/ResumeDetailPage";
import STResumeFormPage from "../pages/staff/ResumeFormPage/ResumeFormPage";
import STResumePage from "../pages/staff/ResumePage/ResumePage";
import STReviewPage from "../pages/staff/ReviewPage/ReviewPage";
import STScrapPage from "../pages/staff/ScrapPage/ScrapPage";

const router = createBrowserRouter([
  // 일반 페이지 (Layout 사용)
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "main", element: <MainPage /> },
      {
        path: "recruitment/:recruitmentId",
        element: <StaffRecruitmentDetailPage />,
      },
      { path: "recruitment", element: <StaffRecruitmentPage /> },
      { path: "guestHouse/:guestHouseId", element: <GuestHouseDetailPage /> },

      // 게스트하우스 회원 전용
      { path: "guesthouse/mypage", element: <GHGuestHouseMyPage /> },
      { path: "guesthouse/applicants", element: <GHApplicantPage /> },
      { path: "guesthouse/form", element: <GHGuesHouseFormPage /> },
      { path: "guesthouse/scrap", element: <GHScrapPage /> },
      {
        path: "guesthouse/recruitment/form",
        element: <GHStaffRecruitmentFormPage />,
      },
      { path: "guesthouse/recruitment", element: <GHStaffRecruitmentPage /> },

      // 개인 회원 전용
      { path: "staff/alarm", element: <AlarmPage /> },
      { path: "staff/applicants", element: <STApplicantPage /> },
      { path: "staff/mypage", element: <STMyPage /> },
      { path: "staff/profile", element: <STProfilFormPage /> },
      {
        path: "staff/resume/detail/:resumeId",
        element: <STResumeDetailPage />,
      },
      { path: "staff/resume/form", element: <STResumeFormPage /> },
      { path: "staff/resume", element: <STResumePage /> },
      { path: "staff/review", element: <STReviewPage /> },
      { path: "staff/scrap", element: <STScrapPage /> },
    ],
  },

  // 로그인 및 회원가입 페이지 (SimpleLayout 사용)
  {
    path: "/user",
    element: <SimpleLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "signUp", element: <SelectSignUpPage /> },
      { path: "signUp/staff", element: <StaffSignUpPage /> },
      { path: "signUp/guesthouse", element: <GuestHouseSignUpPage /> },
    ],
  },
]);

export default router;
