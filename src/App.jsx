import React from "react";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/header/Home";
import About from "./components/header/About";
import Experience from "./components/header/Experience";
import Footer from "./components/header/Footer";
import Skill from "./components/header/Skill";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skill" element={<Skill />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;

// <Route path="/" element={<Home/>}/>
// <Route path="/about" element={<About/>}/>
// <Route path="/experience" element={<Experience/>}/>
// <Route path="/skill" element={<Skill />}/>

// <Router>
//   <Navbar/>
//   <Routes>
//     <Route path="/" element={<Home/>}/>
//     <Route path="/about" element={<About/>}/>
//     <Route path="/experience" element={<Experience/>}/>
//     <Route path="/skill" element={<Skill/>}/>
//   </Routes>
//   <Footer/>
// </Router>

//       <Navbar/>
// <Home/>
// <About/>
// <Experience/>
// <Skill />
// <Footer/>
