import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';
import { useTheme } from '../components/ThemeContext';

export default function Contact() {
    const {theme} = useTheme();
    return (
      <main className="container-fluid">
        <h1 style={theme === 'light' ? {animation:'dayLights 5s linear infinite'} : {animation:'nightLights 5s linear infinite'}}>
            <Write text="Contact" time="1000" delay="0" />
        </h1>
            <div className="row">
                <div className="col-sm-2 d-none d-sm-block"></div>
                <div className="col-12 col-sm-8 contact">
                    <br />
                    <FadeIn fade="1000" delay="0">
                        <p>I'm open to work or participate in projects. Please contact me at:</p>
                        <p>Email: juanjosefarina.jjf@gmail.com</p>
                        <p>LinkedIn: https://linkedin.com/in/juanjosefarina</p>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}