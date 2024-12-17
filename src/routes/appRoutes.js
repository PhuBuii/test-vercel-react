import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/public-page/auth-page/login/Login";
import SignupPage from "../pages/public-page/auth-page/signup/Signup";
import MainLayout from "../pages/protected-page/MainLayout";
import AuthLayout from "../pages/public-page/auth-page/layout";
import NotFound from "../pages/error-page/NotFound";
import ListService from "../pages/protected-page/danh-sach-dich-vu/Page";
import DocumentManage from "../pages/protected-page/quan-ly-ho-so/Page";
import Support from "../pages/protected-page/ho-tro/Page";
import Guide from "../pages/protected-page/huong-dan-thu-tuc/Page";
import DocumentDetail from "../pages/protected-page/quan-ly-ho-so/ho-so/Page";
import PageDetail from "../pages/protected-page/danh-sach-dich-vu/dich-vu/Page";
import MyAccount from "../pages/protected-page/quan-ly-tai-khoan/tai-khoan-cua-toi/Page";
import StaffList from "../pages/protected-page/quan-ly-tai-khoan/tai-khoan-nhan-vien/Page";
import EditUserInfo from "../pages/protected-page/quan-ly-tai-khoan/tai-khoan-cua-toi/EditProfile";
import UserInfo from "../pages/protected-page/quan-ly-tai-khoan/tai-khoan-nhan-vien/UserInfo";
import EmployeeForm from "../pages/protected-page/quan-ly-tai-khoan/tai-khoan-nhan-vien/NewEmployeeForm";
import UserEdit from "../pages/protected-page/quan-ly-tai-khoan/tai-khoan-nhan-vien/EditEmployeeProfile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<ListService />} />
          <Route path="/danh-sach-dich-vu" element={<ListService />} />
          <Route
            path="/danh-sach-dich-vu/dich-vu/:slug"
            element={<PageDetail />}
          />
          <Route path="/quan-ly-ho-so" element={<DocumentManage />} />
          <Route
            path="/quan-ly-ho-so/ho-so/:slug"
            element={<DocumentDetail />}
          />
          <Route path="/huong-dan-thu-tuc" element={<Guide />} />
          <Route path="/tai-khoan-cua-toi" element={<MyAccount />} />
          <Route
            path="/tai-khoan-cua-toi/chinh-sua"
            element={<EditUserInfo />}
          />
          <Route path="/danh-sach-nhan-vien" element={<MyAccount />} />
          <Route path="/tai-khoan-nhan-vien" element={<StaffList />} />
          <Route
            path="/tai-khoan-nhan-vien/nhan-vien/:id"
            element={<UserInfo />}
          />
          <Route
            path="/tai-khoan-nhan-vien/nhan-vien/:id/chinh-sua"
            element={<UserEdit />}
          />
          <Route
            path="/tai-khoan-nhan-vien/tao-nhan-vien-moi"
            element={<EmployeeForm />}
          />
          <Route path="/ho-tro" element={<Support />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
