import React from "react";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About";
import Skills from "./routes/SkillSet";

import { Route, Routes} from "react-router-dom";
import Project from "./routes/Project";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/project" element={<Project/>} />
        <Route path="/skillSet" element={<Skills/>}/>
      </Routes>
    </>
  );
}

export default App;
