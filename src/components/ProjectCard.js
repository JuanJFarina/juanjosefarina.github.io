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
        clearInterval(arbInterval);
        imgRef.current.src = props.images[0];
        window.open(props.url, '_blank');
    }

  return (
    <div
      className="projectCard"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
      onClick={handleClick}
    >
        <img
            className="projectImage"
            title="Click me"
            ref={imgRef}
            src={props.images[0]}
            alt={props.text}
        />
        {props.children}
    </div>
  )
}