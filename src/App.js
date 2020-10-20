import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Presentational from './Components/Presentational';
import About from "./Components/About/About";
import Services from './Components/Services/Services';
import Resume from "./Components/Resume/Resume";
import Portfolio from "./Components/Portfolio/Portfolio";
import Footer from "./Components/Footer/Footer";
import Blog from "./Components/Blog/Blog";
import "./media.scss";



const backgroundDark = {
  background: "#161d26",
}


function App() {
  return (
    <div className="App" style={backgroundDark} >
      <Navbar />
      <Hero />
      <Presentational section={'about'} title={"About Us"} subTitle={"Why choose me?"} bg={false}>
        <About/>
      </Presentational>
      <Presentational section={'services'} title={"Services"} subTitle={"Wat can we provide you?"} bg={false}>
        <Services/>
      </Presentational>
      <Presentational section={'resume'} title={"Resume"} subTitle={"My formal bio details."} bg={true}>
        <Resume />
      </Presentational>
      <Presentational section={'portfolio'} title={"Portfolio"} subTitle={"Check out the lastest works."} bg={false}>
        <Portfolio />
      </Presentational>
      <Presentational section={'blog'} title={"Blog"} subTitle={"Some arcticles that raised my interest."} bg={true}>
        <Blog />
      </Presentational>
      <Footer />

    </div>
  );
}

export default App;
