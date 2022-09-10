import React, { FC } from "react";
import Header from "../template/Header";
import Typography from "@mui/material/Typography";
import "../../assets/home.css";

const Home: FC = () => {
  return (
    <>
      {/* title-containerが横幅いっぱいにならない */}
      <Header />
      <div className="area">
        <div className="home__container container">
          <Typography mb={1} variant="h4">
            Hello I'm
          </Typography>
          <Typography mb={1} variant="h2">
            Shun Okamoto
          </Typography>
          <Typography variant="h4">Frontend Engineer</Typography>
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
};

export default Home;
