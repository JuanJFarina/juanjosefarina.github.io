import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';
import Switch from './Switch';
import FadeIn from './FadeIn';

export default function Header() {
  const { theme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container-fluid">
      <div className="row">
        <div className="col-sm-1 d-none d-sm-block"></div>
        <div className="col-12 col-sm-10">
          <nav className={`burger-menu ${isMenuOpen ? 'open' : ''}`}>
            <FadeIn fade="1000" delay="60000">
              <p className="silly" style={{ fontSize: '10px', marginTop: '10px', marginRight: '30px', color: '#848', fontWeight: '900' }}>
                Still here? You must really like me! Why don't you hire me already? ;)
              </p>
            </FadeIn>
            <FadeIn fade="1000" delay="1500">
              <div className="menu-icon d-sm-none" onClick={toggleMenu}>
                &#9776;
              </div>
              <ul className="menu-items">
                <li><Link to="/portfolio" style={theme === 'light' ? { color: '#000' } : { color: '#fff' }}>Welcome</Link></li>
                <li><Link to="/projects" style={theme === 'light' ? { color: '#000' } : { color: '#fff' }}>Projects</Link></li>
                <li><Link to="/about" style={theme === 'light' ? { color: '#000' } : { color: '#fff' }}>About me</Link></li>
                <li><Link to="/contact" style={theme === 'light' ? { color: '#000' } : { color: '#fff' }}>Contact</Link></li>
              </ul>
            </FadeIn>
          </nav>
          <Switch />
        </div>
        <div className="col-sm-1 d-none d-sm-block"></div>
      </div>
    </header>
  );
}