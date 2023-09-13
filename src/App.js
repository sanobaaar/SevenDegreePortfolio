import React from "react";
import "./index.css";
import { Routes, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "@splidejs/splide/dist/css/splide.min.css";



import Home from "./routes/Home";
import Projects from "./routes/Projects";
import Services from "./routes/Services";
import Contact from "./routes/Contact";
import CloudKitchen from "./routes/CloudKitchen";
import Consultant from "./routes/Consultant";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/projects" element={<Projects />}  />
      {/* <Route path="/projects/cloudkitchen" element={<CloudKitchen />}  /> */}
      <Route path="/industrial" element={<Home />}  />

      <Route path="/services" element={<Services />}  />
      <Route path="/contact" element={<Contact />}  />
      <Route path="/consultant" element={<Consultant />}  />



    </Routes>
    </>
  );
}

export default App;
