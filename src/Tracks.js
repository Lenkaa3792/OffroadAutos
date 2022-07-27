import React from "react";
import Image5 from "./Image/wild.jpg";
import Image6 from "./Image/white.jpg";
import Image7 from "./Image/dune.jpg";
import Image8 from "./Image/mud.jpg";
export default function Tracks ()
{
  return (
    <div className="row">
      <h2>Tracks Available for Offroading </h2>
      <div className="column">
        {/* <div>
          <h2>White Cliff 4×4</h2>
          <img src={Image6} alt="" />
        </div> */}
        <div id="jengwa">
          <h2>Wild Tracks</h2>
          <img src={Image5} alt="" className="wild" />
        </div>
        <div>
          <h2>Dunes and desert</h2>
          <img src={Image7} alt="" className="wild" />
        </div>
        <div>
          <h2>Mud Trails</h2>
          <img src={Image8} alt="" className="wild" />
        </div>        
      </div>
    </div>
  );
}