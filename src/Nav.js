import React from "react";
import{Link, NavLink} from "react-router-dom";

export function Nav ()
{
  const navStyle = {
    color:'beige'
  }
    return (
      <nav>
        <ul className="navlink">
         
          <NavLink style={navStyle} to="/about">
            About
          </NavLink>
          <NavLink style={navStyle} to="/tracks">
            Tracks
          </NavLink>
          <NavLink style={navStyle} to="/vehicles">
            Vehicles
          </NavLink>
        </ul>
      </nav>
    );
}