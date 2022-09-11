import React, { memo, FC } from "react";
import Header from "../template/Header";
import styled from "styled-components";
import WorksCard from "../organism/WorksCard";
import { Typography } from "@mui/material";

import me from "../../assets/img/me.jpeg";
import ecsite from "../../assets/img/ecsite.png";
import pyxel from "../../assets/img/pyxel.png";
import nobutyping from "../../assets/img/nobutyping.png";
import photoportfolio from "../../assets/img/photoportfolio.png";
// フォント
// 使用した言語
// クリックした時の作品説明
// ボタンのデザイン
// cardhover時のアクション

const works = [
  {
    id: 0,
    image: ecsite,
    title: "ECサイト",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
  },
  {
    id: 1,
    image: pyxel,
    title: "ブロック崩しゲーム",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
  },
  {
    id: 2,
    image: nobutyping,
    title: "ノブのタイピングゲーム",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
  },
  {
    id: 3,
    image: photoportfolio,
    title: "写真のポートフォリオ",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
  },
  {
    id: 4,
    image: me,
    title: "ポートフォリオ",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
  },
];
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
            ></WorksCard>
          ))}
        </WorksList>
      </Container>
    </>
  );
});

const Container = styled.div`
  position: relative;
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
