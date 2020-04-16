import React from "react";
import Typed from "react-typed";


function Work () {
    return (
        <div>
        <h2>
        <Typed
          strings={["Some of my work"]}
          typeSpeed={40}
          backSpeed={50}
        />
      </h2>
            <p>loading...</p>
        </div>
    )
}
export default Work;