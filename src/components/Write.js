import React, { useState, useEffect } from 'react';

export default function Write(props) {
  const [writable, setWritable] = useState('');
  const [intervalExists, setIntervalExists] = useState(false);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      setIntervalExists(true);
    }, props.delay);

    return () => {
      clearTimeout(delayTimer);
    };
  }, [props.delay]);

  useEffect(() => {
    if (!intervalExists) return;

    const intervalId = setInterval(() => {
      if (writable.length < props.text.length) {
        setWritable(writable + props.text[writable.length]);
      } else {
        clearInterval(intervalId);
      }
      if (writable.length + 1 === props.text.length) {
        setIntervalExists(false);
      }
    }, props.time / props.text.length);

    return () => {
      clearInterval(intervalId);
    };
  }, [writable, props.text, props.time, intervalExists]);

  return (
    <>
      {intervalExists ? (
        <>
          {writable}|
        </>
      ) : (
        <>{writable}</>
      )}
    </>
  );
}