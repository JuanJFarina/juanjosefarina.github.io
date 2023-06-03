import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';

export default function Welcome() {
    const {theme} = useTheme();
  return (
    <main className="container-fluid">
        <div className="row">
            <div className="col-sm-2 d-none d-sm-block"></div>
            <div className="col-12 col-sm-8">
                <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
                    <Write text="Juan José Farina" time="1000" delay="0" />
                </h1>
                <FadeIn fade="1000" delay="0">
                    <br />
                    <h2 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>Full-Stack Developer / Software Engineer</h2>
                    <br />
                    <p>Welcome to my portfolio !<br />
                        It's made using <span className="react">
                        React</span>, <span className="bootstrap">
                        Bootstrap</span>, <span className="javascript">
                        JavaScript</span>, <span className="css3">
                        CSS3</span> and <span className="html5">
                        HTML5</span>
                    </p>
                    <p>Your actual theme is because of your local time but you can change it using the upper right switch.<br />
                    There are many animations and hidden easter eggs, so have fun looking for them !</p>
                    <article className="welcomeText">
                        <p>I'm a 32 years old developer from Argentina (living in Rosario) who is looking for a career change; my life has always gone from intellectual activities like problem-solving, puzzles, videogames, maths, computers and loving to study and learn, to loving high performance in physical activities, like sports, gymnastics and dancing.</p>
                        <hr style={theme === 'dark' ? {borderColor:'#fff'} : {borderColor:'#000'}} /><p>I'm a developer since 2010 (Bachelor in Computer Systems Analyst), but I don't have formal experience because I changed to dance as a profession in 2013. I have to thank that profession for teaching me lots about perseverance, discipline, creativity, collaboration, hard-work and commitment.</p>
                        <hr style={theme === 'dark' ? {borderColor:'#fff'} : {borderColor:'#000'}} /><p>Right now I'm looking for a mid-point, and I've realized I want to reach my full potential in the IT world, gain a better life quality, be able to have a happy family, and who knows ? Maybe even relocate. Whatever it is, I know I have a lot of potential and I want to give my all.</p>
                    </article>
                </FadeIn>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
    </main>
  )
}
