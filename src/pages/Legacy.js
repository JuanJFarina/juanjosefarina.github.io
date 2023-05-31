import React from 'react';
import { useTheme } from '../components/ThemeContext';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';

export default function Legacy() {
  const {theme} = useTheme();
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
                    <p>These are legacy projects that I've developed through my "programming as hobby" years (2012-2023):</p>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12 col-sm-6">
                            </div>
                            <div className="col-12 col-sm-6">
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-sm-6">
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