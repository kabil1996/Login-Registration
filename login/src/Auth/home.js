import react from "react";

// STYLES
import "../css/sidebar.css";

// HEADER
import Navbar from "../components/Header";

// ICONS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import avatar from "../Assets/avatar.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="profiles">
        <div className="pro-card">
          <div className="cover-photo">
            <img src={avatar} className="profile" alt="Profile" />
          </div>
          <h3 className="profile-name">ABC ABC</h3>
          <p className="about">
            xxx@gmail.com <br /> Front End Developer
          </p>
          <button className="messagebtn">Message</button>
          <button className="messagebtn">Following</button>
          <div className="pro-icons">
            <FontAwesomeIcon icon={faLinkedin} className="fa-brands" />
            <FontAwesomeIcon icon={faGithub} className="fa-brands" />
            <FontAwesomeIcon icon={faYoutube} className="fa-brands" />
            <FontAwesomeIcon icon={faTwitter} className="fa-brands" />
          </div>
        </div>
      </div>
    </div>
  );
}
