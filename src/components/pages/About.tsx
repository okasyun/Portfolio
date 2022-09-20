import React, { memo, FC } from "react";

import styled from "styled-components";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { FiMapPin } from "react-icons/fi";
import {
  AiOutlineMail,
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineLink,
} from "react-icons/ai";

import Header from "../template/Header";
import Footer from "../template/Footer";
import me from "../../assets/img/me.jpeg";

const About: FC = memo(() => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Header />
      <Container>
        <Typography my={3} variant="h4" align="center">
          About Me
        </Typography>
        <Card>
          <Me>
            <img src={me} alt="me" />
          </Me>
          <Introduction>
            <p>
              webエンジニア。特にフロントエンド開発が得意です。このポートフォリオでは私のスキルと作品などを公開しています。
            </p>
            {/* <p>
              I am a web engineer. My specialty is front-end development and
              coding. This portfolio site lists my skills, my background, and my
              productions.
            </p> */}
            <IconsList>
              <div>
                <FiMapPin />
                <IconDescription>Tokyo</IconDescription>
              </div>
              <Icon>
                <a href="mailto:okashun0326@gmail.com">
                  <AiOutlineMail />
                  <IconDescription>okashun0326@gmail.com</IconDescription>
                </a>
              </Icon>
              <Icon>
                <a href="https://github.com/okasyun">
                  <AiFillGithub />
                  <IconDescription>Github</IconDescription>
                </a>
              </Icon>
              <Icon>
                <a href="https://twitter.com/takoyakimayonai">
                  <AiFillTwitterSquare />
                  <IconDescription>Twitter</IconDescription>
                </a>
              </Icon>
              <Icon>
                <a href="https://qiita.com/gensokyo0326">
                  <AiOutlineLink />
                  <IconDescription>Qiita</IconDescription>
                </a>
              </Icon>
            </IconsList>
            <Button
              size="large"
              variant="contained"
              onClick={() => navigate("/contact")}
            >
              Let's talk
            </Button>
          </Introduction>
        </Card>
      </Container>
      <Footer />
    </Wrapper>
  );
});

// padding-bottom: footerのサイズ
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 140px;
`;
const Container = styled.div`
  width: 100%;
  padding-top: 64px;
  position: relative;
  background-color: white;
`;

const Card = styled.div`
  padding-bottom: 20px;
  gap: 4rem;
  position: relative;
  margin: 0 auto;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 1000px) {
    gap: 2rem;
    flex-direction: column;
  }
`;

const Me = styled.div`
  width: 20rem;
  height: 23rem;
  position: relative;
  & > img {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 3rem;
    top: 0;
    left: 0;
    object-fit: cover;
    object-position: 50% 100%;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 300ms ease;
    &:hover {
      box-shadow: none;
    }
  }
`;

const Introduction = styled.div`
  max-width: 30rem;
  position: relative;
  & > p {
    font-size: 25px;
    line-height: 30px;
    margin-bottom: 25px;
    @media screen and (max-width: 1000px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;

const IconsList = styled.div`
  flex-direction: column;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 25px;
`;

const Icon = styled.div`
  transition: all 400ms ease;
  &:hover {
    color: rgba(0, 0, 0, 0.2);
  }
}
`;

const IconDescription = styled.div`
  margin-left: 3px;
  display: inline-block;
  letter-spacing: 0.2rem;
`;

export default About;
