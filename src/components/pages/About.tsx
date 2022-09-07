import React, { memo, FC } from "react";
import Header from "../template/Header";

import me from "../../assets/img/me.jpeg";
import { Button } from "@mui/material";

import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const About: FC = memo(() => {
  return (
    <>
      <Header />
      <div className="container__top">
        <h1>About Me</h1>
        <div className="container">
          <div className="cards">
            <div className="me">
              <img src={me} alt="me" />
            </div>
            <div className="introduction">
              <p>
                I am a web engineer. My specialty is front-end development and
                coding. This portfolio site lists my skills, my background, and
                my productions.
              </p>
              <div className="icons">
                <div className="">
                  <FiMapPin />
                  <p className="il">Tokyo</p>
                </div>
                <div>
                  <AiOutlineMail />
                  <p className="il">shunshun1207shun@gmail.com</p>
                </div>
                <div>
                  <AiFillGithub />
                  <a href="https://github.com/okasyun" className="il">
                    okasyun
                  </a>
                </div>
              </div>
              <Button size="large" variant="contained">
                Let's talk
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
