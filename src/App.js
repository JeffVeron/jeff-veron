import React from "react";
import "./App.css";
import logo from "./logo.jpg";
import portfolio1 from "./fakeImage1.jpeg";
import portfolio2 from "./fakeImage2.jpeg";
import portfolio3 from "./FakeImages.jpeg";
import portfolio4 from "./Fakeimages4.jpeg";
import { Routes, Route, /*  Outlet, */ Link } from "react-router-dom";
import { inject } from '@vercel/analytics';




function Logo() {
  /*   const logo = logo */
  return (
    <div className="logoDiv">
      <img src={logo} alt={"logo"} className="logoImage" />
    </div>
  );
}

inject();

function About() {
  return <div className="aboutDiv">
    About
    <p className="bodyTopic"> A LITTLE ABOUT ME </p>
        <p className="bodyParagragh">
          Hi , My name is Jeff. I am a person of few words. I enjoy programing a
          lot . Below are some of the personal projects I've done . Have a look
          and tell me what you think about them .{" "}
        </p>
    </div>;
}

function Contact() {
  return <div className="contactDiv">
    
    <h1>Contact Me</h1>
    <p>connect with me on.....</p>
      <div>
        <p className="email">EMAIL : 57jeff.veron@gmail.com</p>
        <p>MOBILE : +233 0543962327</p>
      </div>
    </div>;
}

function Projects() {
  return <div className="projectsDiv">Projects
    <div className="portfolioContainer">
        <div className="portfolio1">
          <p className="portfolio1Description">
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github{" "}
          </p>
          <img
            src={portfolio1}
            alt={"portfolio 1"}
            className="portfolio1Image"
          />
        </div>
        <div className="portfolio2">
          <p className="portfolio2Description">
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github{" "}
          </p>
          <img
            src={portfolio2}
            alt={"portfolio 2"}
            className="portfolio2Image"
          />
        </div>
        <div className="portfolio3">
          <p className="portfolio3Description">
            {" "}
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github{" "}
          </p>
          <img
            src={portfolio3}
            alt={"portfolio 3"}
            className="portfolio3Image"
          />
        </div>
        <div className="portfolio4">
          <p className="portfolio4Description">
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github
          </p>
          <img
            src={portfolio4}
            alt={"portfolio 4"}
            className="portfolio4Image"
          />
        </div>
        </div>
     </div>;
}

function Header() {
  return (
    <div className="appHeader">
     {/*  <About />
      <Contact />
      <Projects /> */}
      <Link to="about"  style= { {textDecoration: 'none'}} >About Me</Link>
      <Link to="contact"style= { {textDecoration: 'none'}} >Contact Me</Link>
      <Link to="projects" style= { {textDecoration: 'none'}}>Projects</Link>
    </div>
  );
}

function Body() {
  return (
    <div>
      <div className="bodyDiv">
        <p className="bodyTopic"> A LITTLE ABOUT ME </p>
        <p className="bodyParagragh">
          Hi , My name is Jeff. I am a person of few words. I enjoy programing a
          lot . Below are some of the personal projects I've done . Have a look
          and tell me what you think about them .{" "}
        </p>
      </div>
      <div className="portfolioContainer">
        <div className="portfolio1">
          <p className="portfolio1Description">
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github{" "}
          </p>
          <img
            src={portfolio1}
            alt={"portfolio 1"}
            className="portfolio1Image"
          />
        </div>
        <div className="portfolio2">
          <p className="portfolio2Description">
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github{" "}
          </p>
          <img
            src={portfolio2}
            alt={"portfolio 2"}
            className="portfolio2Image"
          />
        </div>
        <div className="portfolio3">
          <p className="portfolio3Description">
            {" "}
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github{" "}
          </p>
          <img
            src={portfolio3}
            alt={"portfolio 3"}
            className="portfolio3Image"
          />
        </div>
        <div className="portfolio4">
          <p className="portfolio4Description">
            1.Rectangle with a screenshot of a project 2.link to the completed
            project on vercel of github
          </p>
          <img
            src={portfolio4}
            alt={"portfolio 4"}
            className="portfolio4Image"
          />
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footerDiv">
      <p>This personal website was made with React.js </p>
      <p>connect with me on.....</p>
      <div>
        <p className="email">EMAIL : 57jeff.veron@gmail.com</p>
        <p>MOBILE : +233 0543962327</p>
      </div>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      Sorry there is nothing to see here
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className="logoAndHeader">
        <Logo />
        <Header />
      </div>
 {/*   links  */}
 <Link to="*">Go to the home page</Link>
      <Body />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <div className="App">
      {/* introducing routes  */}
  

  {/* //vercel analytics tracking  */}
    {/*  inject(); */}


      <Routes>
        <Route>
       {/*  <Route path="/" element={<App />}> */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
         <Route path="contact" element= {<Contact/>} />
         <Route path="projects" element = {<Projects/>} />
         <Route path="body" element={<Body/>} />
          <Route path="*" element={<NoMatch />} /> 

          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
