import './App.css';

function createMoon() {
  const nightSky = document.getElementById('night-sky');
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
  const nightSky = document.getElementById('night-sky');
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
    document.getElementById('night-sky').appendChild(shootingStar);
    shootingStar.className = 'shooting-star';
    setTimeout(() => {
      shootingStar.remove();
    }, 1000);
  }
  else {
    console.log('El numero es: ' + size);
    const ufo = document.createElement('div');
    ufo.style.setProperty('--randomX', (randomX * 10));
    ufo.style.setProperty('--randomY', (randomY * 10));
    ufo.style.width = (10 + ((size) * 5)) + 'px'; // Random star size
    ufo.style.height = ufo.style.width;
    ufo.style.left = (Math.random() * 100) + '%'; // Random horizontal position
    ufo.style.top = (Math.random() * 100) + '%'; // Random vertical position
    document.getElementById('night-sky').appendChild(ufo);
    ufo.className = 'ufo';
    setTimeout(() => {
      ufo.remove();
    }, 5000);
  }
}

setTimeout(createMoon, 500);

setTimeout(createStars, 500);

setTimeout(() => {
  setInterval(createShootingStar, 4000);
}, 500);

function App() {
  return (
    <div id="night-sky">
      <h1 style={{color:'#fff'}}>Hola Mundo !</h1>
    </div>
  );
}

export default App;