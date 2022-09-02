import React, { memo, FC } from "react";
import Header from "../template/Header";
import "../../assets/home.css";

const Home: FC = memo(() => {
  return (
    <div className="title-container">
      {/* title-containerが横幅いっぱいにならない */}
      <div className="area">
        <Header />
        <h1 className="title">
          This is <br />
          Shun Okamoto's Portofilio
        </h1>
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
    </div>
  );
});

export default Home;
