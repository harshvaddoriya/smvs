import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import SocialSidebarIcons from "../components/common/SocialSidebar/SocialSidebarIcons";

const AppRoutes = () => {
  return (
    <>
      <SocialSidebarIcons />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
