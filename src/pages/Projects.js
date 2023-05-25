import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import ARB1 from '../assets/ARB1.jpeg';
import ARB2 from '../assets/ARB2.jpeg';
import ARB3 from '../assets/ARB3.jpeg';
import ARB4 from '../assets/ARB4.jpeg';
import ARB5 from '../assets/ARB5.jpeg';
import JAMMING1 from '../assets/JAMMING1.jpeg';
import JAMMING2 from '../assets/JAMMING2.jpeg';
import JAMMING3 from '../assets/JAMMING3.jpeg';
import JAMMING4 from '../assets/JAMMING4.jpeg';
import JAMMING5 from '../assets/JAMMING5.jpeg';
import FCC1 from '../assets/FCC1.jpeg';
import FCC2 from '../assets/FCC2.jpeg';
import FCC3 from '../assets/FCC3.jpeg';
import FCC4 from '../assets/FCC4.jpeg';
import FCC5 from '../assets/FCC5.jpeg';

export default function Projects() {
    const imagesArb = [ARB1, ARB2, ARB3, ARB4, ARB5];
    const imagesJamming = [JAMMING1, JAMMING2, JAMMING3, JAMMING4, JAMMING5];
    const imagesFcc = [FCC1, FCC2, FCC3, FCC4, FCC5];

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
                                <div className="col-12 col-sm-6">
                                    <ProjectCard image={ARB1} text="Academia Rosario Ballet" images={imagesArb} url="https://www.academiarosarioballet.com.ar">
                                        <p style={{margin:'4px'}}>
                                            Institutional website in SPA format featuring registration, login, dashboard, CRUD operations, search filters and other features.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>HTML, CSS, Bootstrap, jQuery, JavaScript</span>, <span style={{color:'red'}}>AJAX, PHP, MySQL</span>
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>#Front-End</span> <span style={{color:'red'}}>#Back-End</span>
                                        </p>
                                    </ProjectCard>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <ProjectCard image={JAMMING1} text="Jamming" images={imagesJamming} url="https://gamejolt.com/games/jamming/46288">
                                        <p style={{margin:'4px'}}>
                                            JAMMING, a videogame produced at the 2015 Global Game Jam.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>HTML, CSS, JavaScript</span>
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>#Front-End</span>
                                        </p>
                                    </ProjectCard>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <ProjectCard image={FCC1} text="Free Code Camp" images={imagesFcc} url="https://codepen.io/JJFarina">
                                        <p style={{margin:'4px'}}>
                                            Projects from my Front End Development Libraries Certification at FreeCodeCamp.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>HTML, CSS, Bootstrap, JavaScript, React</span>
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>#Front-End</span>
                                        </p>
                                    </ProjectCard>
                                </div>
                                <div className="col-12 col-sm-6">
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}