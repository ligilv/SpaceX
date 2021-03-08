import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navWrapper">
      <Link
        to="/"
        className="navTitle"
        style={{ color: "black", textDecoration: "none" }}
      >
        S.P.A.C.E.X
      </Link>

      <div className="btnWrapper">
        <button className="launchBtn">
          <Link to="/past" style={{ textDecoration: "none", color: "black" }}>
            <i class="fas fa-backward"></i>
            <strong> Past Launches</strong>
          </Link>
        </button>
        <button className="launchBtn">
          <Link
            to="/upcoming"
            style={{ textDecoration: "none", color: "black" }}
          >
            <strong> Future Launches </strong> <i class="fas fa-forward"></i>
          </Link>
        </button>
        <button className="launchBtn" style={{ cursor: "pointer" }}>
          <i class="fas fa-power-off"></i>
        </button>
      </div>
    </div>
  );
}

export default Navbar;
