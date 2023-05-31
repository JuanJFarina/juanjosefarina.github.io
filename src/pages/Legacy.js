import React from 'react';
import { useTheme } from '../components/ThemeContext';
import ProjectCard from '../components/ProjectCard';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import borderlands from '../assets/LEGACYBorderlands.jpeg';
import numerology from '../assets/LEGACYNumerologia.jpeg';
import corazontachero from '../assets/LEGACYCorazonDeTachero.jpg';
import apleno from '../assets/LEGACYAPleno.jpeg';
import LegacyMp3Organizer1 from '../assets/LEGACYMp3Organizer1.png';
import LegacyMp3Organizer2 from '../assets/LEGACYMp3Organizer2.jpeg';
import ahorcado from '../assets/LEGACYAhorcado.png';

export default function Legacy() {
  const {theme} = useTheme();
  const imagesBorderlands = [borderlands];
  const imagesNumerology = [numerology];
  const imagesCorazon = [corazontachero];
  const imagesAPleno = [apleno];
  const imagesMp3Org = [LegacyMp3Organizer1, LegacyMp3Organizer2];
  const imagesAhorcado = [ahorcado];
  return (
    <main className="container-fluid">
        <div className="row">
            <div className="col-sm-1 d-none d-sm-block"></div>
            <div className="col-12 col-sm-10">
                <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
                    <Write text="Legacy Projects" time="1000" delay="0" />
                </h1>
                <br />
                <FadeIn fade="1000" delay="0">
                    <p>These are some of my legacy projects which I've developed for personal leisure throughout my "programming as hobby" years (2012-2023).<br />Please keep in mind that most of these were never intended for the public but rather for personal interest:</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <ProjectCard text="Borderlands DPS Calc" images={imagesBorderlands} url="https://github.com/JuanJFarina/BorderlandsDPSCalculator">
                                    <p style={{margin:'4px'}}>
                                        This app calculates the damage per second of weapons in Borderlands, a PC game where weapons are generated procedurally. It was developed in HTML and JavaScript between 2015-2017 and takes into consideration the weapon's Damage, Accuracy, Firerate and Bullets per load.
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
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
                                <ProjectCard text="Corazon de Tachero" images={imagesCorazon} url="https://github.com/JuanJFarina/CorazonDeTachero">
                                    <p style={{margin:'4px'}}>
                                        "Corazon De Tachero" is a game developed in legacy Flash and Flixel in 2013 for the Global Game Jam. Sadly, I've not been able to run it in today's tech.
                                    </p>
                                    <p style={{margin:'4px'}}>
                                        <span style={{color:'#848'}}>ActionScript, Flixel</span>
                                    </p>
                                </ProjectCard>
                            </div>
                            <div className="col-12 col-sm-6">
                                <ProjectCard text="A Pleno" images={imagesAPleno} url="https://github.com/JuanJFarina/LegacyAPleno">
                                    <p style={{margin:'4px'}}>
                                        "A Pleno" is a personal app developed in HTML and JavaScript to keep record of numbers in a casino roulette game. After a series of numbers, it returns information on which numbers have been missing, which have been most repeated, etc. This was developed circa 2013.
                                    </p>
                                    <p style={{margin:'4px'}}>
                                        <span style={{color:'blue'}}>HTML, JavaScript</span>
                                    </p>
                                    <p style={{margin:'4px'}}>
                                        <span style={{color:'blue'}}>#Front-End</span>
                                    </p>
                                </ProjectCard>
                            </div>
                        </div>
                        <div className="row">
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
                        </div>
                    </div>
                </FadeIn>
            </div>
            <div className="col-sm-1 d-none d-sm-block"></div>
        </div>
    </main>
  )
}