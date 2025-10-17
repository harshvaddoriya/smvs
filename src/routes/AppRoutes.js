import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/index";
import SocialSidebarIcons from "../components/common/SocialSidebar/SocialSidebarIcons";
import Terms from "../components/legal/Terms/Terms";
import PrivacyPolicy from "../components/legal/PrivacyPolicy/PrivacyPolicy";

const AppRoutes = () => {
  return (
    <>
      <SocialSidebarIcons />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/legal/terms-and-condition" element={<Terms />} />
        <Route path="/legal/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
