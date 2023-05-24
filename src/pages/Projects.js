import React, { useState, useRef } from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import ARB1 from '../assets/ARB1.jpeg';
import ARB2 from '../assets/ARB2.jpeg';
import ARB3 from '../assets/ARB3.jpeg';
import ARB4 from '../assets/ARB4.jpeg';
import ARB5 from '../assets/ARB5.jpeg';

export default function Projects() {
    const [arbInterval, setArbInterval] = useState('');
    const imgArb = useRef(null);

    const images = [ARB1, ARB2, ARB3, ARB4, ARB5];

    const handleHover = () => {
        let i = 0;
        setArbInterval(setInterval(function() {
          imgArb.current.src = images[i];
          i++;
          if (i === images.length) {
            i = 0;
          }
        }, 1000)); // Change the duration (in milliseconds) between each image
    }

    const handleLeave = () => {
        clearInterval(arbInterval);
        imgArb.current.src = images[0];
    }

    return (
      <main className="container-fluid">
            <div className="row">
                <div className="col-sm-2 d-none d-sm-block"></div>
                <div className="col-12 col-sm-8">
                    <h1>
                        <Write text="Projects" time="1000" delay="0" />
                    </h1>
                    <br />
                    <FadeIn fade="1000" delay="0">
                        <p>These are some of the projects I've developed through the years:</p>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <img ref={imgArb} className="projectImage" src={ARB1} alt="Academia Rosario Ballet" title="Academia Rosario Ballet" width="200" onMouseEnter={handleHover} onMouseLeave={handleLeave} />
                                </div>
                                <div className="col-6"></div>
                            </div>
                        </div>
                        <p>JAMMING, a videogame produced at the 2015 Global Game Jam</p>
                        <p>Academia Rosario Ballet, an institutional website in SPA format featuring registration, login, dashboard, CRUD operations, etc.</p>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}