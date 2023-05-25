import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';

export default function Contact() {
    return (
      <main className="container-fluid">
            <div className="row">
                <div className="col-sm-2 d-none d-sm-block"></div>
                <div className="col-12 col-sm-8 contact">
                    <h1>
                        <Write text="Contact" time="1000" delay="0" />
                    </h1>
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