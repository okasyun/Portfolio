import React, { memo, FC } from "react";
import Header from "../template/Header";
import styled from "styled-components";
import WorksCard from "../organism/WorksCard";
import { Typography } from "@mui/material";

import { works } from "../../works";
// フォント
// 使用した言語
// クリックした時の作品説明
// ボタンのデザイン
// cardhover時のアクション

const Works: FC = memo(() => {
  return (
    <>
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
    </>
  );
});

const Container = styled.div`
  width: 100%;
  padding-top: 64px;
  background-color: white;
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
