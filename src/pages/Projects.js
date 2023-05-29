import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';
import JAMMING1 from '../assets/JAMMING1.jpeg';
import JAMMING2 from '../assets/JAMMING2.jpeg';
import JAMMING3 from '../assets/JAMMING3.jpeg';
import JAMMING4 from '../assets/JAMMING4.jpeg';
import JAMMING5 from '../assets/JAMMING5.jpeg';
import ARB1 from '../assets/ARB1.jpeg';
import ARB2 from '../assets/ARB2.jpeg';
import ARB3 from '../assets/ARB3.jpeg';
import ARB4 from '../assets/ARB4.jpeg';
import ARB5 from '../assets/ARB5.jpeg';
import FCC1 from '../assets/FCC1.jpeg';
import FCC2 from '../assets/FCC2.jpeg';
import FCC3 from '../assets/FCC3.jpeg';
import FCC4 from '../assets/FCC4.jpeg';
import FCC5 from '../assets/FCC5.jpeg';
import BACK1 from '../assets/BACK1.jpeg';
import BACK2 from '../assets/BACK2.jpeg';
import BACK3 from '../assets/BACK3.jpeg';
import BACK4 from '../assets/BACK4.jpeg';
import BACK5 from '../assets/BACK5.jpeg';
import META1 from '../assets/META1.jpeg';
import META2 from '../assets/META2.jpeg';
import META3 from '../assets/META3.jpeg';

export default function Projects() {
    const {theme} = useTheme();
    const imagesJamming = [JAMMING1, JAMMING2, JAMMING3, JAMMING4, JAMMING5];
    const imagesArb = [ARB1, ARB2, ARB3, ARB4, ARB5];
    const imagesFcc = [FCC1, FCC2, FCC3, FCC4, FCC5];
    const imagesBack = [BACK1, BACK2, BACK3, BACK4, BACK5];
    const imagesMeta = [META1, META2, META3];

    return (
      <main className="container-fluid">
            <div className="row">
                <div className="col-sm-1 d-none d-sm-block"></div>
                <div className="col-12 col-sm-10">
                    <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
                        <Write text="Projects" time="1000" delay="0" />
                    </h1>
                    <br />
                    <FadeIn fade="1000" delay="0">
                        <p>These are some of my most recent projects:</p>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <ProjectCard text="Back End Development and APIs" images={imagesBack} url="https://replit.com/@Juan-JoseJos952">
                                        <p style={{margin:'4px'}}>
                                            Final projects from my Back End Development and APIs Certification from FreeCodeCamp.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'red'}}>Node, MongoDB, Mongoose</span>
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'red'}}>#Back-End</span>
                                        </p>
                                    </ProjectCard>
                                </div>
                                <div className="col-12 col-sm-6">
                                    <ProjectCard text="Meta Certification" images={imagesMeta} url="https://juanjfarina.github.io/CapstoneProject">
                                        <p style={{margin:'4px'}}>
                                            Capstone project from my Meta Professional Certification in Front End Developer.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>HTML, CSS, Bootstrap, JavaScript, Formik, Yup, React</span>
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>#Front-End</span>
                                        </p>
                                    </ProjectCard>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <ProjectCard text="Free Code Camp" images={imagesFcc} url="https://codepen.io/JJFarina">
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
                                    <ProjectCard text="Academia Rosario Ballet" images={imagesArb} url="https://www.academiarosarioballet.com.ar">
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
                            </div>
                            <div className="row">
                                <div className="col-12 col-sm-6">
                                    <ProjectCard text="Jamming" images={imagesJamming} url="https://gamejolt.com/games/jamming/46288">
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
                                <div className="col-12 col-sm-6"></div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
                <div className="col-sm-1 d-none d-sm-block"></div>
            </div>
        </main>
    )
}