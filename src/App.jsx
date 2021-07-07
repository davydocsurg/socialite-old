import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./css/index.css";
import Routes from "./Routes";
import Feed from "./components/Feed";
import Widgets from "./components/Widgets";

// pages
// import home from "./pages/home";
// import signIn from "./pages/signIn";
// import signUp from "./pages/signUp";
// import { Guard } from "./Guard";
// import PrivateRoute from "./PrivateRoute";
// import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="container my-3">
      <div className="app row">
        <Router>
          <Sidebar />
          <Feed />
          <Widgets />
          <Routes></Routes>
        </Router>
      </div>
    </div>
  );
}
