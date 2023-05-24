import React from 'react';
import Write from '../components/Write';
import FadeIn from '../components/FadeIn';

export default function Welcome() {
  return (
    <main className="container-fluid">
        <div className="row">
            <div className="col-sm-2 d-none d-sm-block"></div>
            <div className="col-12 col-sm-8">
                <h1>
                    <Write text="Juan José Farina" time="1000" delay="0" />
                </h1>
                <FadeIn fade="1000" delay="0">
                    <br />
                    <h2 className="title">Full-Stack Developer / Software Engineer</h2>
                    <br />
                    <p>Welcome to my portfolio ! Everything is made using these technologies:</p>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                    <p>Your actual theme is because of your local time but you can change it using the upper right switch.</p>
                    <p>There are many animations and hidden easter eggs, so have fun looking for them !</p>
                </FadeIn>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
    </main>
  )
}
