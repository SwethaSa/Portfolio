import React from "react";
import { Link } from "react-scroll";

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="skills" smooth={true} duration={1500}>
        <button>View My Skills</button>
      </Link>
      <Link to="works" smooth={true} duration={1500}>
        <button>View My Work</button>
      </Link>
      <Link to="contact" smooth={true} duration={1500}>
        <button>View My Contacts</button>
      </Link>
    </div>
  );
};

export default Navigation;
