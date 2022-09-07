import React, { memo, FC } from "react";
import Header from "../template/Header";

import me from "../../assets/img/me.jpeg";

const About: FC = memo(() => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="me">
          <img src={me} alt="me" />
        </div>
      </div>
    </>
  );
});

export default About;
