import React from 'react';
import Switch from './Switch';
import FadeIn from './FadeIn';

export default function Header() {
  return (
    <header className="container-fluid">
        <div className="row">
            <div className="col-sm-1 d-none d-sm-block"></div>
            <div className="col-12 col-sm-10">
                <nav>
                    <FadeIn fade="1000" delay="12000">
                        <ul>
                            <li>My projects</li>
                            <li>About me</li>
                            <li>Contact</li>
                        </ul>
                    </FadeIn>
                    <Switch />
                </nav>
            </div>
            <div className="col-sm-1 d-none d-sm-block"></div>
        </div>
    </header>
  )
}