import React, { FC } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/system";

import { skills } from "../../Data/skill";
import SkillCard from "../organism/SkillCard";
import Header from "../template/Header";
import Footer from "../template/Footer";

const Skill: FC = () => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Typography my={3} variant="h4" align="center">
          Skill
        </Typography>
        <SkillsList>
          {skills.map((skill) => (
            <div key={skill.id}>
              <SkillCard title={skill.title} items={skill.items} />
              <Box sx={{ mb: 2 }}></Box>
            </div>
          ))}
        </SkillsList>
      </Container>
      <Footer />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 140px;
`;

const Container = styled.div`
  width: 100%;
  padding-top: 64px;
  background-color: white;
`;

const SkillsList = styled.div`
  padding-top: 30px;
  padding-bottom: 30px;
`;

export default Skill;
