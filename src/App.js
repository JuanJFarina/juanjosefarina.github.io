import './App.css';
import { useState, useEffect } from 'react';
import './NightSky.css';
import './DaySky.css';
import { ThemeProvider, useTheme } from './components/ThemeContext';
import Switch from './components/Switch';

function App() {
  const [shootingStars, setShootingStars] = useState('');
  const {theme} = useTheme();

  useEffect(() => {
    if (theme === 'dark') {
      document.getElementById('sky').style.setProperty('background-color', '#000');
      removeStarsMoonsClouds();
      clearInterval(shootingStars);
      createMoon();
      createStars();
      const intervalId = setInterval(createShootingStar, 4000);
      setShootingStars(intervalId);
    }
    else {
      document.getElementById('sky').style.setProperty('background-color', '#eef');
      removeStarsMoonsClouds();
      clearInterval(shootingStars);
      createClouds();
    }
  }, [theme]);

  function createMoon() {
    const nightSky = document.getElementById('sky');
    const moon = document.createElement('div');
    const randomX = Math.round(Math.random() * 100);
    const randomY = Math.round(Math.random() * 100);
    moon.style.setProperty('--randomX', randomX);
    moon.style.setProperty('--randomY', randomY);
    moon.className = 'moon';
    moon.style.width = (20 + (Math.random() * 20)) + 'px'; // Random star size
    moon.style.height = moon.style.width;
    moon.style.left = randomX + '%'; // Random horizontal position
    moon.style.top = randomY + '%'; // Random vertical position
    nightSky.appendChild(moon);
  }

  function createStars() {
    const nightSky = document.getElementById('sky');
    const numStars = 100; // Number of stars to create
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.width = Math.random() * 2 + 'px'; // Random star size
      star.style.height = star.style.width;
      star.style.left = Math.random() * 100 + '%'; // Random horizontal position
      star.style.top = Math.random() * 100 + '%'; // Random vertical position
      nightSky.appendChild(star);
    }
  }

  function createClouds() {
    const daySky = document.getElementById('sky');
    const numClouds = (10 + (Math.round(Math.random() * 10))); // Number of clouds to create
    console.log(numClouds);
    for (let i = 0; i < numClouds; i++) {
      const cloud = document.createElement('div');
      const opacity = Math.random();
      cloud.className = 'cloud';
      cloud.style.setProperty('--opacity', opacity);
      cloud.style.setProperty('--randomX', Math.round(Math.random() * 100));
      cloud.style.setProperty('--randomY', Math.round(Math.random() * 100));
      cloud.style.width = (30 + (Math.random() * 270)) + 'px'; // Random cloud size
      cloud.style.height = cloud.style.width;
      cloud.style.left = Math.random() * 100 + '%'; // Random horizontal position
      cloud.style.top = Math.random() * 100 + '%'; // Random vertical position
      daySky.appendChild(cloud);
    }
  }

  function createShootingStar() {
    const randomX = Math.round(Math.random() * 10);
    const randomY = Math.round(Math.random() * 10);
    const size = (randomX + randomY) / 10;
    if(size !== 0.5) {
      const shootingStar = document.createElement('div');
      shootingStar.style.setProperty('--randomX', randomX);
      shootingStar.style.setProperty('--randomY', randomY);
      shootingStar.style.width = ((size) + 1) + 'px'; // Random star size
      shootingStar.style.height = shootingStar.style.width;
      shootingStar.style.left = (Math.random() * 100) + '%'; // Random horizontal position
      shootingStar.style.top = (Math.random() * 100) + '%'; // Random vertical position
      document.getElementById('sky').appendChild(shootingStar);
      shootingStar.className = 'shooting-star';
      setTimeout(() => {
        shootingStar.remove();
      }, 1000);
    }
    else {
      const ufo = document.createElement('div');
      ufo.style.setProperty('--randomX', (randomX * 10));
      ufo.style.setProperty('--randomY', (randomY * 10));
      ufo.style.width = (10 + ((size) * 5)) + 'px'; // Random star size
      ufo.style.height = ufo.style.width;
      ufo.style.left = (Math.random() * 100) + '%'; // Random horizontal position
      ufo.style.top = (Math.random() * 100) + '%'; // Random vertical position
      document.getElementById('sky').appendChild(ufo);
      ufo.className = 'ufo';
      setTimeout(() => {
        ufo.remove();
      }, 5000);
    }
  }

  function removeStarsMoonsClouds() {
    const stars = document.getElementsByClassName('star');
    const moon = document.getElementsByClassName('moon');
    const clouds = document.getElementsByClassName('cloud');

    // Convert the HTMLCollection to an array
    const starsArray = Array.from(stars);
    const moonArray = Array.from(moon);
    const cloudsArray = Array.from(clouds);

    // Remove each star element
    starsArray.forEach((star) => star.remove());

    // Remove the moon element
    moonArray.forEach((moon) => moon.remove());

    // Remove each cloud element
    cloudsArray.forEach((cloud) => cloud.remove());
  }

  return (
    <div id="sky">
      <h1 style={theme === 'dark' ? {color:'#fff'} : {color:'#000'}}>Hola Mundo !</h1>
      <Switch></Switch>
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;