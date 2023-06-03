import React, { useState, useEffect, useRef } from 'react';

export default function CertificatesCard(props) {
  const [timeoutId, setTimeoutId] = useState(null);
  const [fadeOutId, setFadeOutId] = useState(null);
  const [doTransition, setDoTransition] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const image = useRef(null);

  const transition = () => {
    setTimeoutId(
      setTimeout(() => {
        if (currentIndex < props.images.length - 1) {
          setCurrentIndex(currentIndex + 1);
        } else {
          setCurrentIndex(0);
        }
        setTimeout(() => {
            if(image.current) {image.current.style.opacity = '1';}
        }, 200);
      }, 1500)
    );
  };

  useEffect(() => {
    if(doTransition) {
        transition();
        setFadeOutId(setTimeout(() => {
            if(image.current) {image.current.style.opacity = '0';}
        }, 1300));
        return () => {
        clearTimeout(timeoutId);
        };
    }
  }, [currentIndex, doTransition]);

  const stopTransition = () => {
    setDoTransition(false);
    clearTimeout(timeoutId);
    clearTimeout(fadeOutId);
  }

  const startTransition = () => {
    setDoTransition(true);
  }

  return (
    <div className="certificateCard">
      <img
        ref={image}
        className="certificateImage"
        src={props.images[currentIndex]}
        alt={props.text}
        onMouseEnter={stopTransition}
        onMouseLeave={startTransition}
      />
      {props.children}
    </div>
  );
}