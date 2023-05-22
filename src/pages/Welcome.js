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
                <Write text="Hello ! How are u ? :)" time="1500" delay="0" />
                </h1>
                <p>
                <Write text="Welcome to my portfolio ! It's still a work in progress." time="1500" delay="2000" />
                </p>
                <p>
                <Write text="Everything you see is made by me, Juan José Farina, using these technologies:" time="1500" delay="4000" />
                </p>
                <FadeIn fade="1500" delay="6000">
                    <ul>
                        <li>React</li>
                        <li>JavaScript</li>
                        <li>CSS3</li>
                        <li>HTML5</li>
                    </ul>
                </FadeIn>
                <p>
                <Write text="You can change between night and day theme, but it will start according to your local time." time="1500" delay="8000" />
                </p>
                <p>
                <Write text="Also, there are a few fun animations in each one !" time="1500" delay="10000" />
                </p>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
    </main>
  )
}
