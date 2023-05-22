import React from 'react';
import FadeIn from './FadeIn';

export default function Footer() {
  return (
    <footer className="container-fluid">
        <div id="footer" className="row">
            <div className="col-sm-2 d-none d-sm-block"></div>
            <div className="col-12 col-sm-8">
                <FadeIn fade="1000" delay="12000">

                </FadeIn>
            </div>
            <div className="col-sm-2 d-none d-sm-block"></div>
        </div>
    </footer>
  )
}