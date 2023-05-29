import React from 'react';
import FadeIn from './FadeIn';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

export default function Footer() {
  const openLinkedInProfile = () => {
    window.open('https://www.linkedin.com/in/juanjosefarina');
  };

  const openGitHubProfile = () => {
    window.open('https://github.com/juanjfarina');
  };

  return (
    <footer className="container-fluid">
      <div id="footer" className="row">
        <div className="col-sm-2 d-none d-sm-block"></div>
        <div className="col-12 col-sm-8">
          <FadeIn fade="1000" delay="1500">
            <div className="fixed-bottom-right">
              <img
                src={linkedin}
                alt="LinkedIn"
                className="footer-icon"
                onClick={openLinkedInProfile}
              />
              <img
                src={github}
                alt="GitHub"
                className="footer-icon"
                onClick={openGitHubProfile}
              />
            </div>
          </FadeIn>
        </div>
        <div className="col-sm-2 d-none d-sm-block"></div>
      </div>
    </footer>
  );
}