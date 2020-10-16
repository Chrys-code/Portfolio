import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Presentational from './Components/Presentational';
import About from "./Components/About/About";
import Services from './Components/Services/Services';

import Footer from "./Components/Footer/Footer";
import "./media.scss";



const backgroundDark = {
  background: "#161d26",
}


function App() {
  return (
    <div className="App" style={backgroundDark} >
      <Navbar />
      <Hero />
      <Presentational section={'about'} title={"About Us"} subTitle={"Why choose me?"}>
        <About/>
      </Presentational>
      <Presentational section={'services'} title={"Services"} subTitle={"Wat can we provide you?"}>
        <Services/>
      </Presentational>
      <Presentational section={'resume'} title={"Resume"} subTitle={"My formal bio details."}>
      </Presentational>
      <Presentational section={'blog'} title={"Blog"} subTitle={"Some arcticles that raised my interest."}>
      </Presentational>
      <Footer />
    </div>
  );
}

export default App;
