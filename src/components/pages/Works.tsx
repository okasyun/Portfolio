import React, { memo, FC } from "react";
import styled from "styled-components";
import Typography from "@mui/material/Typography";

import WorksCard from "../organism/WorksCard";
import Header from "../template/Header";
import Footer from "../template/Footer";
import { works } from "../../Data/work";

const Works: FC = memo(() => {
  return (
    <Wrapper>
      <Header />
      <Container>
        <Typography my={3} variant="h4" align="center">
          Works
        </Typography>
        <WorksList>
          {works.map((work) => (
            <WorksCard
              key={work.id}
              image={work.image}
              title={work.title}
              cardDescription={work.cardDescription}
              dialogDescription={work.dialogDescription}
              tools={work.tools}
              link={work.link}
            ></WorksCard>
          ))}
        </WorksList>
      </Container>
      <Footer />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  padding-bottom: 140px;
  position: relative;
  min-height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  padding-top: 64px;
`;

const WorksList = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 40px;
  width: 95%;

  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: wrap;
`;

export default Works;
