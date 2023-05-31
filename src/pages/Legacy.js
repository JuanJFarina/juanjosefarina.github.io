import React from 'react';
import { useTheme } from '../components/ThemeContext';
import ProjectCard from '../components/ProjectCard';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import numerology from '../assets/LEGACYNumerologia.jpeg';
import LegacyMp3Organizer1 from '../assets/LEGACYMp3Organizer1.png';
import LegacyMp3Organizer2 from '../assets/LEGACYMp3Organizer2.jpeg';
import ahorcado from '../assets/LEGACYAhorcado.png';

export default function Legacy() {
  const {theme} = useTheme();
  const imagesNumerology = [numerology];
  const imagesMp3Org = [LegacyMp3Organizer1, LegacyMp3Organizer2];
  const imagesAhorcado = [ahorcado];
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
                    <p>These are legacy projects that I've developed for personal leisure through my "programming as hobby" years (2012-2023):</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                    <ProjectCard text="Numerology App" images={imagesNumerology} url="https://github.com/JuanJFarina/LegacyNumerologyApp">
                                        <p style={{margin:'4px'}}>
                                            Numerology personal app developed circa 2014. This app allows you to know many of the numbers derived from your full-name and birthdate.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>HTML, JavaScript</span>
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'blue'}}>#Front-End</span>
                                        </p>
                                    </ProjectCard>
                            </div>
                            <div className="col-12 col-sm-6">
                                    <ProjectCard text="MP3 Organizer" images={imagesMp3Org} url="https://github.com/JuanJFarina/JavaMp3Organizer">
                                        <p style={{margin:'4px'}}>
                                            Java application that scans your computer in search of potentially duplicated mp3 songs by using original search algorithms to look at names, sizes and duration, applying different levels of "possible duplicates". The application generates a report so the user can look up the files and listen/delete them. This application was developed circa 2011-2012.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'#848'}}>JAVA</span>
                                        </p>
                                    </ProjectCard>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                    <ProjectCard text="Ahorcado" images={imagesAhorcado} url="https://github.com/JuanJFarina/JavaAhorcado">
                                        <p style={{margin:'4px'}}>
                                            Simple numerical "ahorcado" game developed in JAVA circa 2011-2012.
                                        </p>
                                        <p style={{margin:'4px'}}>
                                            <span style={{color:'#848'}}>JAVA</span>
                                        </p>
                                    </ProjectCard>
                            </div>
                            <div className="col-12 col-sm-6">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
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