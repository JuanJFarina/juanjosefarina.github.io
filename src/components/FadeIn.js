import React, { useState, useEffect } from 'react'

export default function FadeIn(props) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, props.delay);
  }, [props.delay]);

  const containerStyle = {
    transition: `opacity ${props.fade}ms linear`,
    opacity: isVisible ? 1 : 0
  };

  return (
    <div className={`FadeIn ${isVisible ? 'visible' : ''}`} style={containerStyle}>
      {props.children}
    </div>
  );
}