import ecsite from "../assets/img/ecsite.png";
import me from "../assets/img/me.jpeg";
import pyxel from "../assets/img/pyxel.png";
import nobutyping from "../assets/img/nobutyping.png";
import photoportfolio from "../assets/img/photoportfolio.png";

import { Work } from "../type";

export const works: Work[] = [
  {
    id: 0,
    image: ecsite,
    title: "ECサイト",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
    tools: [
      "HTML&CSS",
      "JavaScript",
      "React",
      "React Redux",
      "Firebase",
      "MUI",
    ],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/ecApp",
      demoSite: "https://test2-ec-app.web.app/",
    },
  },
  {
    id: 1,
    image: pyxel,
    title: "ブロック崩しゲーム",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しましたYoutubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しましたYoutubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しましたYoutubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しましたYoutubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
    tools: ["Python"],
    link: {
      demoBoolean: false,
      sourceCode: "https://github.com/okasyun/break_ball",
      demoSite: "https://test2-ec-app.web.app/",
    },
  },
  {
    id: 2,
    image: nobutyping,
    title: "ノブのタイピングゲーム",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
    tools: ["HTML&CSS", "Javascript"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/Nobu-Typing",
      demoSite: "https://nobu-typing.netlify.app",
    },
  },
  {
    id: 3,
    image: photoportfolio,
    title: "写真のポートフォリオ",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
    tools: ["HTML&CSS", "JavaScript", "Jquery"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/photoPortofolio",
      demoSite: "https://shun-okamoto.netlify.app",
    },
  },
  {
    id: 4,
    image: me,
    title: "ポートフォリオ",
    cardDescription: "ファッションのECサイトを作りました",
    dialogDescription:
      "Youtubeの動画を参考にしてファッションのECサイトを作りました。初めてReact-reduxを使用しました",
    tools: ["HTML&CSS", "Typescript", "React", "MUI"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/Portfolio",
      demoSite: "https://okasyun.netlify.app",
    },
  },
];