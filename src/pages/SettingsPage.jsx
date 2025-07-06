import { useState } from "react";
import HeaderComponent from "../components/HeaderComponent";
import { Navigate } from "react-router-dom";
import { useContext } from "react";
import {  UserContext } from "../context/User.Context";
function SettingsPage() {
    const {user} = useContext(UserContext)

  if (!user?.isAdmin) return <Navigate to={"/error"} />

  return (
    <>
      <HeaderComponent></HeaderComponent>

      <div>Settings</div>
    </>
  );
}

export default SettingsPage;