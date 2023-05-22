export function createMoon() {
    const nightSky = document.getElementById('sky');
    const moon = document.createElement('div');
    moon.className = 'moon';
    const time = (new Date()).getHours();
    let position = 0;
    switch(time) {
      case 7:
      case 19:
        position = 9;
        break;
      case 8:
      case 20:
        position = 18;
        break;
      case 9:
      case 21:
        position = 27;
        break;
      case 10:
      case 22:
        position = 36;
        break;
      case 11:
      case 23:
        position = 45;
        break;
      case 12:
      case 0:
        position = 54;
        break;
      case 13:
      case 1:
        position = 63;
        break;
      case 14:
      case 2:
        position = 72;
        break;
      case 15:
      case 3:
        position = 81;
        break;
      case 16:
      case 4:
        position = 90;
        break;
      case 17:
      case 5:
        position = 99;
        break;
      default:
    }
    moon.style.left = position + '%'; // Random horizontal position
    moon.style.top = '5%';//Vertical position
    nightSky.appendChild(moon);
  }

export function createSun() {
    const daySky = document.getElementById('sky');
    const sun = document.createElement('div');
    sun.className = 'sun';
    const time = (new Date()).getHours();
    let position = 0;
    switch(time) {
      case 7:
      case 19:
        position = 9;
        break;
      case 8:
      case 20:
        position = 18;
        break;
      case 9:
      case 21:
        position = 27;
        break;
      case 10:
      case 22:
        position = 36;
        break;
      case 11:
      case 23:
        position = 45;
        break;
      case 12:
      case 0:
        position = 54;
        break;
      case 13:
      case 1:
        position = 63;
        break;
      case 14:
      case 2:
        position = 72;
        break;
      case 15:
      case 3:
        position = 81;
        break;
      case 16:
      case 4:
        position = 90;
        break;
      case 17:
      case 5:
        position = 99;
        break;
      default:
    }
    sun.style.left = (position - 10) + '%'; // Horizontal position
    sun.style.top = '-25%';// Vertical position
    daySky.appendChild(sun);
  }

export function createStars() {
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

export function createClouds() {
    const daySky = document.getElementById('sky');
    const numClouds = (20 + (Math.round(Math.random() * 10))); // Number of clouds to create
    const randomX = Math.round(Math.random() * 100);
    const randomY = Math.round(Math.random() * 100);
    for (let i = 0; i < numClouds; i++) {
      const cloud = document.createElement('div');
      const opacity = 0.8 + (Math.random() * 0.2);
      cloud.className = 'cloud';
      cloud.style.setProperty('--opacity', opacity);
      cloud.style.setProperty('--rotation', (Math.floor(Math.random() * 360) + 'deg'));
      cloud.style.setProperty('--randomX', randomX);
      cloud.style.setProperty('--randomY', randomY);
      cloud.style.width = (150 + (Math.random() * 150)) + 'px'; // Random cloud size
      cloud.style.height = (150 + (Math.random() * 150)) + 'px'; // Random cloud size
      cloud.style.left = Math.random() * 100 + '%'; // Random horizontal position
      cloud.style.top = Math.random() * 100 + '%'; // Random vertical position
      daySky.appendChild(cloud);
    }
  }

export function createShootingStar() {
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