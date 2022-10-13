import ecsite from "../assets/img/ecsite.png";
import me from "../assets/img/me.jpeg";
import pyxel from "../assets/img/pyxel.png";
import nobutyping from "../assets/img/nobutyping.png";
import photoportfolio from "../assets/img/photoportfolio.png";
import chat from "../assets/img/chat.png";
import netflix from "../assets/img/netflix.png";
import todoapp from "../assets/img/todoapp.png";

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
    cardDescription: "時間が経つとボールが増えるブロック崩しゲーム",
    dialogDescription:
      "大学の授業でPythonを使ってブロック崩しゲームを作成しました。時間が経つとボールが増える仕組みを作りました。",
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
    cardDescription: "ノブの名ツッコミでタイピングゲームができます",
    dialogDescription:
      "千鳥ノブの名ツッコミ30個くらいでタイピングゲームができます。難易度は「簡単」「普通」「クセすご」から選べて、文字数が変わります。普通のタイピングゲームは問題がつまらないので楽しく練習できるように作りました。",
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
    cardDescription: "自分が撮影してきた写真のポートフォリオ",
    dialogDescription:
      "趣味が写真なので撮影してきた写真をポートフォリオとしてまとめました。CSSとJavaScriptで時間経過とともに写真が移り変わるアニメーションなどを工夫しました。",
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
    cardDescription: "このポートフォリオ",
    dialogDescription: "初めてMUIを使いました。",
    tools: ["HTML&CSS", "Typescript", "React", "MUI"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/Portfolio",
      demoSite: "https://okasyun.netlify.app",
    },
  },
  {
    id: 5,
    image: todoapp,
    title: "Todoアプリ",
    cardDescription: "PWAで利用できるTodoアプリ",
    dialogDescription:
      "スマホアプリとしても使用できるTodoアプリを作成しました。参考:https://zenn.dev/sprout2000/articles/60cc8f1aa08b4b",
    tools: ["Typescript", "React", "MUI"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/ReactTypeScript_TodoApp",
      demoSite: "https://okasyun.github.io/ReactTypeScript_TodoApp/",
    },
  },
  {
    id: 5,
    image: chat,
    title: "チャットアプリ",
    cardDescription: "認証機能を持ったチャットアプリ",
    dialogDescription:
      "認証機能を持ったチャットアプリを作りました。アカウント登録とログインができてない場合はログインページとアカウント登録ページに遷移する点を工夫しました。",
    tools: ["Typescript", "React", "MUI", "Firebase"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/messageApp",
      demoSite: "https://authmessage.netlify.app/",
    },
  },
  {
    id: 5,
    image: netflix,
    title: "Netflixクローン",
    cardDescription: "TMDBデータベースAPIを使ったNetflixクローン",
    dialogDescription:
      "TMDBという映画情報が管理されているデータベースをAPIで引っ張ってきてNetflix風に表示しました。Youtubeの動画広告がある場合はクリックすると表示されます。参考:https://zenn.dev/gunners6518/books/4c4672f32dd100",
    tools: ["Typescript", "React"],
    link: {
      demoBoolean: true,
      sourceCode: "https://github.com/okasyun/Netflixclone",
      demoSite: "https://okasyun.github.io/Netflixclone/",
    },
  },
];
