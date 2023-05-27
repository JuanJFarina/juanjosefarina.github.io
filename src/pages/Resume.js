import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';
import RecomCard from '../components/RecomCard';
import C1 from '../assets/C1.png';
import C2 from '../assets/C2.png';
import C3 from '../assets/C3.jpg';
import C4 from '../assets/C4.jpg';
import C5 from '../assets/C5.jpg';
import C6 from '../assets/C6.jpg';
import C7 from '../assets/C7.jpg';
import C8 from '../assets/C8.jpg';
import C9 from '../assets/C9.jpg';
import C10 from '../assets/C10.jpg';
import C11 from '../assets/C11.jpg';
import C12 from '../assets/C12.jpg';
import C13 from '../assets/C13.jpg';
import C14 from '../assets/C14.jpg';
import C15 from '../assets/C15.jpg';
import CertificatesCard from '../components/CertificatesCard';

export default function Resume() {
    const {theme} = useTheme();
    const certifImages = [C1, C2, C3, C4, C5, C6, C7, C8, C9, C10, C11, C12, C13, C14, C15];
    return (
        <main className="container-fluid">
        <div className="row">
            <div className="col-sm-2 d-none d-sm-block"></div>
            <div className="col-12 col-sm-8">
                <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
                    <Write text="Resume" time="1000" delay="0" />
                </h1>
                <br />
                <FadeIn fade="1000" delay="0">
                    <h2>Certificates</h2>
                    <CertificatesCard images={certifImages} text="Certificados" />
                    <h2>Recommendations</h2>
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