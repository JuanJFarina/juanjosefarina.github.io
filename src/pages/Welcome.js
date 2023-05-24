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
                    <Write text="Welcome to my portfolio !" time="1000" delay="0" />
                </h1>
                <FadeIn fade="1000" delay="0">
                    <br />
                    <h2 className="name">Juan José Farina</h2>
                    <h4 className="title">Full-Stack Developer / Software Engineer</h4>
                    <br />
                    <p>Everything you see is made by me using these technologies:</p>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                    <p>You can change between night and day theme, but it will start according to your local time.</p>
                    <p>Also, there are a few fun animations in each one !</p>
                </FadeIn>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
    </main>
  )
}
