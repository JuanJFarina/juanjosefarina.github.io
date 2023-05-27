import React from 'react';

export default function RecomCard(props) {
  return (
    <div className="recomCard">
        <h5>
            {props.name}
        </h5>
        <h6>
            {props.job}
        </h6>
        <br />
        <p>
            "{props.text}"
        </p>
    </div>
  )
}