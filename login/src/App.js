import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./Auth/login";
import Dashboard from "./Auth/home";
import Register from "./Auth/register";
import Home from "./Auth/Dashboard/index";
import Aboutus from "./Auth/Dashboard/Aboutus";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute component={Dashboard} />}
        />
        <Route path="/home" element={<ProtectedRoute component={Home} />} />
        <Route
          path="/aboutus"
          element={<ProtectedRoute component={Aboutus} />}
        />
      </Routes>
      <ToastContainer />
    </div>
  );
};

const ProtectedRoute = ({ component: Component }) => {
  const hasToken = JSON.parse(localStorage.getItem("auth"));

  if (!hasToken) {
    return <Navigate to="/login" />;
  }

  return <Component />;
};

export default App;
