import './App.css';
import { useState, useEffect } from 'react';
import * as Logic from './ThemeAnimations';
import './NightSky.css';
import './DaySky.css';
import './StarWarsEffect.css';
import './TheSimpsonsEffect.css';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Welcome from './pages/Welcome';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  const [shootingStars, setShootingStars] = useState([]);
  const [easterEgg, setEasterEgg] = useState(false);
  const {theme} = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.getElementById('sky').style.setProperty('background-color', '#000');
      removeStarsMoonsClouds();
      shootingStars.forEach(intervalId => clearInterval(intervalId));
      setShootingStars([]);
      Logic.createMoon();
      Logic.createStars();
      const intervalId = setInterval(Logic.createShootingStar, 4000);
      setShootingStars(prevArray => [...prevArray, intervalId]);
    }
    else {
      document.getElementById('sky').style.setProperty('background-color', '#aaf');
      removeStarsMoonsClouds();
      shootingStars.forEach(intervalId => clearInterval(intervalId));
      setShootingStars([]);
      Logic.createSun();
      Logic.createClouds();
    }
  }, [theme]);

  useEffect(createEasterEgg, [easterEgg]);

  function launchEasterEgg() {
    setEasterEgg(true);
  }

  setTimeout(launchEasterEgg, 60000);

  function removeStarsMoonsClouds() {
    const stars = document.getElementsByClassName('star');
    const moon = document.getElementsByClassName('moon');
    const clouds = document.getElementsByClassName('cloud');
    const suns = document.getElementsByClassName('sun');

    // Convert the HTMLCollection to an array
    const starsArray = Array.from(stars);
    const moonArray = Array.from(moon);
    const cloudsArray = Array.from(clouds);
    const sunsArray = Array.from(suns);

    // Remove each star element
    starsArray.forEach((star) => star.remove());

    // Remove the moon element
    moonArray.forEach((moon) => moon.remove());

    // Remove each cloud element
    cloudsArray.forEach((cloud) => cloud.remove());

    // Remove each sun element
    sunsArray.forEach((sun) => sun.remove());
  }

  function createEasterEgg() {
    if(easterEgg === true && theme === 'dark') {
      const container = document.createElement('div');
      container.className = 'star-wars';
      const paragraph = document.createElement('p');
      paragraph.className = 'crawl';
      const textLines = [
        'A NEW HOPE',
        '',
        'It is a period of poverty.',
        'Argentinian people is having',
        'the worst crisis in their',
        'history.',
        '',
        'You can make a change',
        'by hiring me,',
        'a young talented developer',
        'and defeat the evil empire.'
      ];
      textLines.forEach((line) => {
        const lineElement = document.createElement('span');
        lineElement.textContent = line;
        paragraph.appendChild(lineElement);
        const lineBreak = document.createElement('br');
        paragraph.appendChild(lineBreak);
      });
      container.appendChild(paragraph);
      document.getElementById('sky').appendChild(container);
    }
    else if(easterEgg === true && theme === 'light') {
      const container = document.createElement('div');
      container.className = 'the-simpsons';
      const paragraph = document.createElement('p');
      paragraph.className = 'intro';
      const textLines = [
        'HIRE',
        'ME, PLEASE'
      ];
      textLines.forEach((line) => {
        const lineElement = document.createElement('span');
        lineElement.textContent = line;
        paragraph.appendChild(lineElement);
        const lineBreak = document.createElement('br');
        paragraph.appendChild(lineBreak);
      });
      container.appendChild(paragraph);
      document.getElementById('sky').appendChild(container);
    }
  }

  return (
    <div>
      <div id="contenedor" className="container-fluid" style={theme === 'dark' ? {color:'#fff'} : {color:'#000'}}>
        <div className="row">
          <div className="col-12">
            <Header />
          </div>
        </div>
        <div className="row flex-grow-1">
          <div className="col-12" style={theme === 'dark' ? {textShadow:'1.5px 1.5px 1px #444'} : {textShadow:'1.5px 1.5px 1px #ccc'}}>
                <Routes>
                  <Route path="/portfolio" element={<Welcome />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/Resume" element={<Resume />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

function Root() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default Root;