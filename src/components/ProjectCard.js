import React, { useState, useRef } from 'react';

export default function ProjectCard(props) {
    const [arbInterval, setArbInterval] = useState('');
    const imgRef = useRef(null);

    const handleHover = () => {
        let i = 0;
        setArbInterval(setInterval(function() {
          if(imgRef.current) {imgRef.current.src = props.images[i];}
          i++;
          if (i === props.images.length) {
            i = 0;
          }
        }, 1000)); // Change the duration (in milliseconds) between each image
    }

    const handleLeave = () => {
        clearInterval(arbInterval);
        if(imgRef.current) {imgRef.current.src = props.images[0];}
    }

    const handleClick = () => {
        clearInterval(arbInterval);
        if(imgRef.current) {imgRef.current.src = props.images[0];}
        window.open(props.url, '_blank');
    }

  return (
    <div
      className="projectCard"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
      onBlur={handleLeave}
    >
        <img
            className="projectImage"
            title="Click to go"
            ref={imgRef}
            src={props.images[0]}
            alt={props.text}
            onClick={handleClick}
        />
        {props.children}
    </div>
  )
}