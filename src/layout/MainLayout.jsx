import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";
import Home from "../page/Home/Home";

const MainLayout = () => {
  return (
    <div className=" max-w-[1200px] mx-auto">
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
