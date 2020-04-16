import React from "react";
import Typed from "react-typed";

function About() {
  return (
    <div>
      <h2 className="text-center">
        <Typed
          strings={["Hey! I am Wajiha"]}
          typeSpeed={40}
          backSpeed={50}
        />
      </h2>
    </div>
  );
}
export default About;
