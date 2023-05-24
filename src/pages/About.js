import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';

export default function About() {
    return (
        <main className="container-fluid">
            <div className="row">
                <div className="col-sm-2 d-none d-sm-block"></div>
                <div className="col-12 col-sm-8">
                    <h1>
                        <Write text="About me" time="1000" delay="0" />
                    </h1>
                    <br />
                    <FadeIn fade="1000" delay="0">
                        <p>I'm 32 years old, I'm from Argentina (currently there, in Rosario city), and I'm looking for a career change; my life has always gone from intellectual activities like problem-solving, puzzles, videogames, maths, computers and loving to study and learn, to loving high performance in physical activities, like sports, gymnastics and dancing.</p>
                        <p>I'm a developer since 2010 (Bachelor in 'Analista de Sistemas de Computación'), but I don't have formal experience because I changed to dance as a profession in 2013. Nevertheless, I think that profession taught me lots about perseverance, discipline, creativity, collaboration, hard-work and commitment.</p>
                        <p>Right now I'm looking for a mid-point, and I've realized I want to reach my full potential in the IT world, gain a better life quality, be able to have a happy family, and who knows ? Maybe even relocate. Whatever it is, I know I have a lot of potential and I want to give my all.</p>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}