import React, { FC } from "react";
import Header from "../template/Header";
import styled from "styled-components";
import { Typography } from "@mui/material";

import SkillCard from "../organism/SkillCard";
import { skills } from "../../data";
import { Box } from "@mui/system";

const Skill: FC = () => {
  return (
    <>
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
    </>
  );
};

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
