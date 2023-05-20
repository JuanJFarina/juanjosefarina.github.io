import './App.css';

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
  const shootingStar = document.createElement('div');
  const randomX = Math.random();
  const randomY = Math.random();
  shootingStar.style.setProperty('--randomX', randomX);
  shootingStar.style.setProperty('--randomY', randomY);
  shootingStar.style.width = Math.random() * 10 + 'px'; // Random star size
  shootingStar.style.height = shootingStar.style.width;
  shootingStar.style.left = Math.random() * 100 + '%'; // Random horizontal position
  shootingStar.style.top = Math.random() * 100 + '%'; // Random vertical position
  document.getElementById('night-sky').appendChild(shootingStar);
  shootingStar.className = 'shooting-star';
  setTimeout(() => {
    shootingStar.remove();
  }, 900);
}

setTimeout(createStars, 2000);

setTimeout(() => {
  setInterval(createShootingStar, 4000);
}, 2000);

function App() {
  return (
    <div id="night-sky">
      <h1>Hola Mundo !</h1>
    </div>
  );
}

export default App;