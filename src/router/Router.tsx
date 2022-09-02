import React, { memo } from "react";
import type { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../components/pages/Home";
import About from "../components/pages/About";
import Skill from "../components/pages/Skill";
import Works from "../components/pages/Works";
import Contact from "../components/pages/Contact";
import Page404 from "../components/pages/Page404";

const Router: FC = memo(() => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/skill" element={<Skill />}></Route>
        <Route path="/works" element={<Works />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/*" element={<Page404 />}></Route>
      </Routes>
    </>
  );
});

export default Router;
