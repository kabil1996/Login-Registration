import React, { useState } from "react";

// TOOLTIP
import { Tooltip } from "antd";

// ICONS
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { IconContext } from "react-icons";
import { FaUserCircle } from "react-icons/fa";

// ROUTING
import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SidebarDatas";

// STYLES
import "../css/Navbar.css";
import { useNavigate } from "react-router-dom";


export default function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };
  return (
    <div div className="header">
      <IconContext.Provider value={{ color: "#FFF" }}>
        <div className="asses-navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
       
          <div className="avatar-icon"></div>
          <Tooltip title="Logout" className="avatar-icon" placement="left">
            <FaUserCircle size={40} color="white" onClick={handleLogout} />
          </Tooltip>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="side-title">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </div>
  );
}
