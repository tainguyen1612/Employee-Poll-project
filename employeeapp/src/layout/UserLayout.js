import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserLayout = () => {
    const users = JSON.parse(localStorage.getItem("user"));
    return users && users?.isLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default UserLayout;
