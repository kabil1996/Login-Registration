import React from "react";
import SideBar from "../components/Sidebar";
import "../css/sidebar.css";

export default function Home() {
  const [on, setOn] = React.useState(false);

  const handleOn = () => {
    setOn(!on);
  };
  return (
    <div>
      <div className="sidebar">
        <aside className={on ? "to-right" : ""}>
          <a href="#" onClick={handleOn} className="blink">
            <h1 className="arrow blinking">
              <span style={{ fontSize: "40px" }}>&#8680;</span>
            </h1>
          </a>
          <h1>Click Here</h1>
        </aside>
        {on && <SideBar openClass="open" />}
      </div>
    </div>
  );
}
