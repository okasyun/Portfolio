import React, { memo, FC } from "react";
import Header from "../template/Header";

import me from "../../assets/img/me.jpeg";
import { Button } from "@mui/material";

const About: FC = memo(() => {
  return (
    <>
      <Header />
      <div className="container">
        <h1>About Me</h1>
        <div className="cards">
          <div className="me">
            <img src={me} alt="me" />
          </div>
          <div className="introduction">
            <p>
              I am a web engineer. My specialty is front-end development and
              coding. This portfolio site lists my skills, my background, and my
              productions.
            </p>
            <Button variant="contained">Let's talk</Button>
          </div>
        </div>
      </div>
      {/* <Header />
      <div className="container">
        <h1>About Me</h1>
        <div className="cards">
          <div className="me">
            <img src={me} alt="me" />
          </div>
          <div className="introduction">
            <p>
              I am a web engineer. My specialty is front-end development and
              coding. This portfolio site lists my skills, my background, and my
              productions.
            </p>
            <Button>Let's talk</Button>
          </div>
        </div>
      </div> */}
    </>
  );
});

export default About;
