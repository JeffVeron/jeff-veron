import React from "react";
import { useEffect , useState} from 'react'
import { BiLogoPlayStore } from "react-icons/bi";
import "./App.css";
import logo from "./logo.jpg";
import aceWordImage1 from './assets/acewordsImages/1.jpg'
import aceWordImage2 from './assets/acewordsImages/2.jpg'
import aceWordImage3 from './assets/acewordsImages/3.jpg'
import aceWordImage4 from './assets/acewordsImages/4.jpg'
import aceWordImage5 from './assets/acewordsImages/5.jpg'
import aceWordImage6 from './assets/acewordsImages/6.jpg'
import aceWordImage7 from './assets/acewordsImages/7.jpg'
 
import vwwlsImages1 from './assets/vwwlsImages/1.jpg'
import vwwlsImages2 from './assets/vwwlsImages/2.jpg'
import vwwlsImages3 from './assets/vwwlsImages/3.jpg'
import vwwlsImages4 from './assets/vwwlsImages/4.jpg'
import vwwlsImages5 from './assets/vwwlsImages/5.jpg'
import vwwlsImages6 from './assets/vwwlsImages/6.jpg'
import vwwlsImages7 from './assets/vwwlsImages/7.jpg'
import vwwlsImages8 from './assets/vwwlsImages/8.jpg'
import vwwlsImages9 from './assets/vwwlsImages/9.jpg'
import vwwlsImages10 from './assets/vwwlsImages/10.jpg'
import vwwlsImages11 from './assets/vwwlsImages/11.jpg'
import vwwlsImages12 from './assets/vwwlsImages/12.jpg'
import vwwlsImages13 from './assets/vwwlsImages/13.jpg'
 
import wordeeImages1 from './assets/wordeeImages/1.jpg'
import wordeeImages2 from './assets/wordeeImages/2.jpg'
import wordeeImages3 from './assets/wordeeImages/3.jpg'
import wordeeImages4 from './assets/wordeeImages/4.jpg'
import wordeeImages5 from './assets/wordeeImages/5.jpg'
import wordeeImages6 from './assets/wordeeImages/6.jpg'
import wordeeImages7 from './assets/wordeeImages/7.jpg'
import wordeeImages8 from './assets/wordeeImages/8.jpg'
import wordeeImages9 from './assets/wordeeImages/9.jpg'
import playstoreImage from  './assets/back2.png'
import back from './assets/back4.jpg'

import portfolio1 from "./fakeImage1.jpeg";
import portfolio2 from "./fakeImage2.jpeg";
import portfolio3 from "./FakeImages.jpeg";
import portfolio4 from "./Fakeimages4.jpeg";
import { Routes, Route, /*  Outlet, */ Link } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
 


function Logo() {
   
  return (
    <div className="logoDiv">
      <img src={logo} alt={"logo"} className="logoImage" />
    </div>
  );
}

function About() {
  return(
    <div className="aboutDiv">  
    <div  className="home">
    


  
       <div className = 'topic-div'>  
     <p className="bodyTopic"> A LITTLE ABOUT ME </p>
      </div> 

{/* <div className="about-full-pager"> 

</div>
*/}
        <p className="about-Paragragh">
          Hi , My name is Jeff. I am a person of few words. I enjoy programing a
          lot . Below are some of the personal projects I've done . Have a look
          and tell me what you think about them .{" "}
        </p> 
       {/*  </div> */}


     </div>  
     </div> 
    )
}

function Contact() {
  return(

    <div className="home">

<div className="contactDiv">
    
    <h1 className="contact-me">Contact Me</h1>
    <p className="connect-me">connect with me on.....</p>
      <div>
        <p className="email">EMAIL : 57jeff.veron@gmail.com</p>
        <p className="mobile">MOBILE : +233 0543962327</p>
      </div>
    </div>
    </div>

    
  )
 
}

 

const MasonryLayout = ({ items, columns }) => {
  const [columnHeights, setColumnHeights] = useState(
    new Array(columns).fill(0)
  );
  const [columnItems, setColumnItems] = useState(
    new Array(columns).fill().map(() => [])
  );

  useEffect(() => {
    // Reset column heights and items
    const newColumnHeights = new Array(columns).fill(0);
    const newColumnItems = new Array(columns).fill().map(() => []);

    // Distribute items into columns
    items.forEach((item) => {
      const shortestColumnIndex = newColumnHeights.indexOf(
        Math.min(...newColumnHeights)
      );
      newColumnItems[shortestColumnIndex].push(item);
      newColumnHeights[shortestColumnIndex] += item.height; // Use the fixed height from the item
    });

    setColumnHeights(newColumnHeights);
    setColumnItems(newColumnItems);
  }, [items, columns]);

  return (
    <div style={{ display: "flex", gap: "16px" }}>
      {columnItems.map((column, colIndex) => (
        <div key={colIndex} style={{ flex: 1 }}>
          {column.map((item, index) => (
            <div
              key={index}
              style={{
                marginBottom: "16px",
                backgroundColor: "#eee",
                padding: "16px",
                borderRadius: "8px",
                height: `${item.height}px`, // Set the fixed height for each item
                overflow: "hidden", // Ensure content doesn't overflow
              }}
            >
              <img
                src={item.content}
                alt={`Item ${index}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover", // Ensure the image fits within the fixed height
                }}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

 

function Projects() {
  const items = [
    { height: 100, content: vwwlsImages1 },
    { height: 200, content:  vwwlsImages2 },
    { height: 150, content: vwwlsImages3 },
    { height: 300, content:  vwwlsImages4 },
    { height: 120, content: vwwlsImages5 },
    { height: 250, content: vwwlsImages6 },
    { height: 250, content: vwwlsImages7 },
    { height: 250, content: vwwlsImages8 },
    { height: 250, content: vwwlsImages9 },
    { height: 250, content: vwwlsImages10 },
    { height: 250, content: vwwlsImages11},
    { height: 250, content: vwwlsImages12},
  ];

  const wordeeImages = [
    { height: 100, content: wordeeImages1 },
    { height: 200, content:  wordeeImages2},
    { height: 150, content: wordeeImages3},
    { height: 300, content: wordeeImages4},
    { height: 120, content: wordeeImages5 },
    { height: 250, content: wordeeImages6 },
    { height: 250, content: wordeeImages7 },
    { height: 250, content: wordeeImages8 },
    { height: 250, content: wordeeImages9 },
     
  ]

  const acewordsImages = [
    { height: 100, content: aceWordImage1 },
    { height: 100, content: aceWordImage2 },
    { height: 100, content: aceWordImage3 },
    { height: 100, content: aceWordImage4 },
    { height: 100, content: aceWordImage5 },
    { height: 100, content: aceWordImage6 },
    { height: 100, content: aceWordImage7 },
  ]


  return( 



    <div className="home">

<div className="projectsDiv"> 
    <div className="portfolioContainer">

      <h1 className="project-header">Images of the projects I have worked on so far </h1>


<div className="project-image-group">
<p className="project-text" > Vwls Images</p>
<MasonryLayout items={items} columns={3} />
<p className="project-link-text" >Link to Google play store :  </p>
</div>

<div className="project-image-group" >
  <p  className="project-text" > Wordee Images</p>
<MasonryLayout items={wordeeImages} columns={3} />
<p className="project-link-text" >Link to Google play store :  </p>
</div>


<div className="project-image-group" >
  <p className="project-text" > Ace Words Images</p>
<MasonryLayout items={acewordsImages} columns={3} />
<p className="project-link-text" >Link to Google play store :  </p>
</div>

        
        </div>
     </div>

    </div>

)}

 

 

 

function Header() {
  return (
    <div className="appHeader">
 
      <Link to="about"  style= { {textDecoration: 'none' , color :'white'}} >About </Link>
      <Link to="contact"style= { {textDecoration: 'none', color :'white'}} >Contact </Link>
      <Link to="projects" style= { {textDecoration: 'none' , color :'white'}}>Projects</Link>
    </div>
  );
}

function Body() {


  const wordeeImages = [
    wordeeImages1,
    wordeeImages2,
    wordeeImages3,
    wordeeImages5,
    wordeeImages6,
    wordeeImages7,
    wordeeImages8,
    wordeeImages9
     ]


const acewordsImages = [
  aceWordImage1,
  aceWordImage2,
  aceWordImage3,
  aceWordImage4,
  aceWordImage5,
  aceWordImage6,
  aceWordImage7,
  
]

const vwwlsImages = [
  vwwlsImages1,
  vwwlsImages2,
  vwwlsImages3,
  vwwlsImages4,
  vwwlsImages5,
  vwwlsImages6,
  vwwlsImages7,
  vwwlsImages8,
  vwwlsImages9,
  vwwlsImages10,
  vwwlsImages11,
  vwwlsImages12,
  vwwlsImages13
]


  return (
    <div>
      <div className="bodyDiv">
      

      <div className = 'topic-div'>
      <p className="bodyTopic"> A LITTLE ABOUT ME </p> </div> 


        <p className="intro-paragraph">
          Hi , My name is Jeff. I am a person of few words. I enjoy programing a
          lot . Below are some of the personal projects I've done . Have a look
          and tell me what you think about them .{" "}
        </p>
      </div>
      <div className="portfolioContainer">
 
        <div className="portfolio2">
          <h1 className="game-header">WORDEE</h1>
          <p className="game-description">
            I developed a word puzzle game named Wordee. In this game 
            you rearrange a group of scrambled letters to form a word 
            for each level of the game . Find the link for the game on playstore  
            below.
          </p>
          <ImageCarousel images={wordeeImages} />;


           

           <BiLogoPlayStore  color=" white"  size={ 50} />


        </div>





        <div className="portfolio3">
          <h1 className="game-header">ACE WORDS</h1>
          <p className="game-description">
          I also developed a word puzzle mobile game using 
          react native 

          </p>

          <ImageCarousel images={acewordsImages} />;

   


</div>
          <div className="portfolio4">
            <h1 className="game-header" >VWLS</h1>
          <p className="game-description">
           I Delevloped a word game called VWLS (Vowels) using React  native .In This 
         game you have to guess the correct vowels in a given word 
         for each level.
          </p>

          <ImageCarousel images={vwwlsImages} />;
   



        </div>  
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="footerDiv">
      <p   className="text" >This personal website was made with React.js </p>
      <p  className="text" >connect with me on.....</p>
      <div>
        <p className="email">EMAIL : 57jeff.veron@gmail.com</p>
        <p className="text">MOBILE : +233 0543962327</p>
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
      <div className = 'intro'>
       
        <p className="hello">Hello,</p>

       <p className="name"> I’m  Jeffrey Quartey</p>

      </div>


      <div className="luminescent-div">
      <div className="logoAndHeader">
        <Logo />
        <Header />
      </div>

 

   <div>
   <Body />
   <Footer />
   </div>

      </div>
    </div>
  );
}

 

 
const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically cycle through images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
     
      nextImage();
    }, 3000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex]);

  return (
    <div style={styles.carousel}>
      <button style={styles.arrowButton} onClick={prevImage}>
        {"<"}
      </button>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
        style={styles.image}
      />
      <button style={styles.rightArrowButton} onClick={nextImage}>
        {">"}
      </button>
    </div>
  );
};


function App() {

   
  return (
    <div className="App">
  
      <Routes>
        <Route>
        
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


const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "600px",
    height: "300px",
    margin: "auto",
  },
/*   arrowButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
    position: "absolute",
    zIndex: 1,
    color: "white",
    fontSize: "24px",
    top: "50%",
    transform: "translateY(-50%)",
  },
  */
  carousel: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    width: "100%",
    maxWidth: "600px",
    margin: "auto",
  },
  image: {
    width: "80%",
    height: "400px",
    borderRadius: "8px",
  },
  arrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    transform: "translateX(-400%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "50%",
    fontSize: "18px",
  },
  rightArrowButton: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    transform: "translateX(400%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    border: "none",
    padding: "10px",
    cursor: "pointer",
    borderRadius: "50%",
    fontSize: "18px",
  },
};


export default App;
