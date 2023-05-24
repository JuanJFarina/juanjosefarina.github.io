import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';

export default function Contact() {
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
                        <p>JAMMING, a videogame produced at the 2015 Global Game Jam</p>
                        <p>Academia Rosario Ballet, an institutional website in SPA format featuring registration, login, dashboard, CRUD operations, etc.</p>
                    </FadeIn>
                </div>
                <div className="col-sm-2 d-none d-sm-block"></div>
            </div>
        </main>
    )
}