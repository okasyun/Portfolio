import React, { memo, FC } from "react";
import Header from "../template/Header";
import "../../assets/home.css";

const Home: FC = memo(() => {
  return (
    <>
      {/* title-containerが横幅いっぱいにならない */}
      <Header />
      <div className="area">
        <div className="home__container container">
          <h3>Hello I'm</h3>
          <h1>Shun Okamoto</h1>
          <h3>Frontend Engineer</h3>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
});

export default Home;
