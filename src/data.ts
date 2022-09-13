import me from "./assets/img/me.jpeg";
import ecsite from "./assets/img/ecsite.png";
import pyxel from "./assets/img/pyxel.png";
import nobutyping from "./assets/img/nobutyping.png";
import photoportfolio from "./assets/img/photoportfolio.png";

// import { DjJavascript1 } from "react-icons/di";

export const works = [
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

export const skills = [
  {
    id: 0,
    title: "Language",
    items: [
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        rating: 4,
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        rating: 4,
      },
      {
        name: "SASS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
        rating: 4,
      },
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        rating: 3,
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        rating: 2,
      },
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        rating: 2,
      },
      {
        name: "PHP",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        rating: 1,
      },
    ],
  },
  {
    id: 1,
    title: "Framework&Libraries",
    items: [
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        rating: 3,
      },
      {
        name: "MUI",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        rating: 3,
      },
      {
        name: "Bootstrap",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        rating: 2,
      },
    ],
  },
  {
    id: 2,
    title: "Tools & Others",
    items: [
      {
        name: "Linux",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
        rating: 3,
      },
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        rating: 3,
      },
      {
        name: "Firebase",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        rating: 2,
      },
    ],
  },
];
