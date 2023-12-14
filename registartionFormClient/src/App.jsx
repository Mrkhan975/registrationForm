import { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LogReg from "./Pages/Login/LogReg";
import Home from "./Pages/Dashboard/Home";
import PostDashBoard from "./Pages/PostDashboard/postDashBoard";
import Profile from "./Pages/Profile/Profile";
import NavBar from "./Components/NavBar/NavBar";
import Followers from "./Pages/Followers/Followers";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user)

  return (
    <>
     <LogReg/>
    </>
  );
}

export default App;
