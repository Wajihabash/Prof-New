import React from "react";
import Typed from "react-typed";


function Contact () {
    return (
        <div>
        <h2>
        <Typed
          strings={["Reach out to me"]}
          typeSpeed={40}
          backSpeed={50}
        />
      </h2>
            <p>loading...</p>
        </div>
    )
}
export default Contact;