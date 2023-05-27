import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';
import RecomCard from '../components/RecomCard';
import C1 from '../assets/C1.jpg';
import C2 from '../assets/C2.jpg';
import C3 from '../assets/C3.jpg';
import C4 from '../assets/C4.jpg';
import C5 from '../assets/C5.jpg';
import C6 from '../assets/C6.jpg';
import C7 from '../assets/C7.png';
import CertificatesCard from '../components/CertificatesCard';

export default function About() {
    const {theme} = useTheme();
    const certifImages = [C1, C2, C3, C4, C5, C6, C7];
    return (
        <main className="container-fluid">
        <div className="row">
            <div className="col-sm-2 d-none d-sm-block"></div>
            <div className="col-12 col-sm-8">
                <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
                    <Write text="About me" time="1000" delay="0" />
                </h1>
                <br />
                <FadeIn fade="1000" delay="0">
                    <p>I'm 32 years old, I'm from Argentina (currently there, in Rosario city), and I'm looking for a career change; my life has always gone from intellectual activities like problem-solving, puzzles, videogames, maths, computers and loving to study and learn, to loving high performance in physical activities, like sports, gymnastics and dancing.</p>
                    <p>I'm a developer since 2010 (Bachelor in 'Analista de Sistemas de Computación'), but I don't have formal experience because I changed to dance as a profession in 2013. Nevertheless, I think that profession taught me lots about perseverance, discipline, creativity, collaboration, hard-work and commitment.</p>
                    <p>Right now I'm looking for a mid-point, and I've realized I want to reach my full potential in the IT world, gain a better life quality, be able to have a happy family, and who knows ? Maybe even relocate. Whatever it is, I know I have a lot of potential and I want to give my all.</p>
                    <CertificatesCard images={certifImages} text="Certificados" />
                </FadeIn>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
            <div className="row">
                <div className="col-sm-2 d-none d-sm-block"></div>
                <div className="col-6 col-sm-4">
                    <FadeIn fade="1000" delay="0">
                        <RecomCard
                            name="Augusto Reategui"
                            job="Front-end web developer | Software engineer | Java | Javascript | Typescript | MySQL"
                            text="He is a good co-worker, I learned a lot from him, he's smart, proactive, diligent and persistent. He is always constantly searching for the latest technologies to do his job better.">
                        </RecomCard>
                    </FadeIn>
                </div>
                <div className="col-6 col-sm-4">
                    <FadeIn fade="1000" delay="0">
                        <RecomCard
                            name="Catalina Donoso"
                            job="Estudiante en Universidad Nacional de Rosario - UNR"
                            text="Juan is an excellent addition in any field in which he works. He has strength, attitude to keep going and is a very decisive and kind person. I was able to meet him as director of ARB that he was able to create from scratch with a die-hard attitude. Juan is extremely smart and a really comprehensive boss.">
                        </RecomCard>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}