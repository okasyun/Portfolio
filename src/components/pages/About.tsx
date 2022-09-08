import React, { memo, FC } from "react";
import Header from "../template/Header";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { FiMapPin } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

import me from "../../assets/img/me.jpeg";
const About: FC = memo(() => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <div className="container">
        <h1 className="title">About Me</h1>
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
            <div className="icons">
              <div>
                <FiMapPin />
                <p className="il">Tokyo</p>
              </div>
              <div>
                <a href="mailto:okashun0326@gmail.com">
                  <AiOutlineMail />
                  <span className="il">okasyun0326@gmail.com</span>
                </a>
              </div>
              <div>
                <a href="https://github.com/okasyun">
                  <AiFillGithub />
                  <span className="il">okasyun</span>
                </a>
              </div>
            </div>
            <Button
              size="large"
              variant="contained"
              onClick={() => navigate("/contact")}
            >
              Let's talk
            </Button>
          </div>
        </div>
      </div>
    </>
  );
});

export default About;
