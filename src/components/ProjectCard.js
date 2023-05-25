import React, { useState, useRef } from 'react';

export default function ProjectCard(props) {
    const [arbInterval, setArbInterval] = useState('');
    const imgRef = useRef(null);

    const handleHover = () => {
        let i = 0;
        setArbInterval(setInterval(function() {
          imgRef.current.src = props.images[i];
          i++;
          if (i === props.images.length) {
            i = 0;
          }
        }, 1000)); // Change the duration (in milliseconds) between each image
    }

    const handleLeave = () => {
        clearInterval(arbInterval);
        imgRef.current.src = props.images[0];
    }

    const handleClick = () => {
        window.open(props.url, '_blank');
    }

  return (
    <div className="projectCard">
        <img
            className="projectImage"
            ref={imgRef}
            src={props.image}
            alt={props.text}
            title={props.text}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={handleClick}
        />
        {props.children}
    </div>
  )
}