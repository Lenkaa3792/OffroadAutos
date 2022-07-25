import React from "react";
import Image1 from './Image/jeep.jpg'
import Image2 from "./Image/ford.jpg";
import Image3 from "./Image/rover.jpg";
export default function Vehicles ()
{
    return (
      <div>
        <h2>Best Off-Road Vehicles Currently Available</h2>

        <section className="jeep">
          <h3>Jeep Wrangler Rubicon</h3>
          <img src={Image1} />
          <p>
            Jeep Wrangler is the king of the castle. If you want the best of the
            best, look toward the Rubicon trim.
          </p>
        </section>
        <section className="ford">
          <h3>Ford F-150 Raptor</h3>
          <img src={Image2} />
          <p>
            While the majority of off-roading vehicles on this list are all
            about hitting trails, the F-150 Raptor is more interested in
            high-speed off-roading. That’s why it comes with a 450-horsepower
            twin-turbocharged V6 engine and Fox Racing dampers that offer 13
            inches of travel in the front and 13.9 inches at the rear.
          </p>
        </section>
        <section className="rover">
          <h3>Land Rover Defender</h3>
          <img src={Image3} />
          <p>
            The Land Rover Defender nameplate for the 2020 model year has been
            resurrected, bringing back one of the most capable off-roaders ever
            envisioned in a modern luxury vehicle. While the Defender might not
            have a body-on-frame setup or solid axles, the SUV can still go
            anywhere and do anything.{" "}
          </p>
        </section>
      </div>
    );
       
       

    }