import React, { memo, FC } from "react";
import Header from "../template/Header";
import Typography from "@mui/material/Typography";
import styled from "styled-components";
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
      <Container>
        <Typography mt={3} variant="h4" align="center">
          About Me
        </Typography>
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
            <div className="icons__list">
              <div>
                <FiMapPin />
                <p className="il">Tokyo</p>
              </div>
              <div className="icon">
                <a href="mailto:okashun0326@gmail.com">
                  <AiOutlineMail />
                  <span className="il">okasyun0326@gmail.com</span>
                </a>
              </div>
              <div className="icon">
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
      </Container>
    </>
  );
});

const Container = styled.div`
  height: 100vh;
  width: 100%;
  padding-top: 64px;
  margin: 0 auto;
  position: relative;
  background-color: white;
`;

export default About;
