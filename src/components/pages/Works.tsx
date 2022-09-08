import React, { memo, FC } from "react";
import Header from "../template/Header";
import styled from "styled-components";
import WorksCard from "../organism/WorksCard";

import me from "../../assets/img/me.jpeg";
import ecsite from "../../assets/img/ecsite.png";
import pyxel from "../../assets/img/pyxel.png";
import nobutyping from "../../assets/img/nobutyping.png";
import photoportfolio from "../../assets/img/photoportfolio.png";
// フォント
// 使用した言語
// クリックした時の作品説明
// 画像変更
// ボタンのデザイン
const Works: FC = memo(() => {
  const works = [
    {
      id: 0,
      image: ecsite,
      title: "ECサイト",
      description: "ファッションのECサイトを作りました",
    },
    {
      id: 1,
      image: pyxel,
      title: "ブロック崩しゲーム",
      description: "Pythonでブロック崩しを作りました",
    },
    {
      id: 2,
      image: nobutyping,
      title: "ノブのタイピングゲーム",
      description: "ノブのツッコミ集でタイピング練習ができます",
    },
    {
      id: 3,
      image: photoportfolio,
      title: "写真のポートフォリオ",
      description: "自分が撮った写真のポートフォリオです。",
    },
    {
      id: 4,
      image: me,
      title: "ポートフォリオ",
      description: "このWebサイトです。Reactで作りました。",
    },
  ];
  return (
    <>
      <Header />

      <Container>
        <h1 className="title">Works</h1>
        <WorksList>
          {works.map((work) => (
            <WorksCard
              key={work.id}
              image={work.image}
              title={work.title}
              description={work.description}
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
  background-color: rgb(35, 35, 39);
`;

const WorksList = styled.div`
  margin: 0 auto;
  padding-top: 30px;
  padding-bottom: 30px;
  gap: 40px;
  width: 95%;
  justify-content: center;
  display: flex;
  flex-flow: wrap;
`;

export default Works;
