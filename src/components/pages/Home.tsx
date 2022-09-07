import React, { memo, FC } from "react";
import Header from "../template/Header";
import "../../assets/home.css";

const Home: FC = memo(() => {
  return (
    <>
      {/* title-containerが横幅いっぱいにならない */}
      <Header />
      <div className="area">
        <div className="home__container">
          <h5>Hello I'm</h5>
          <h1>Shun Okamoto</h1>
          <h5>Frontend Engineer</h5>
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
