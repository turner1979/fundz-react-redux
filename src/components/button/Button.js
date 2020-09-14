import React from 'react';
import './Button.scss';

function Button(props) {
  const button = props.text ? <button>{props.text}</button> : '';
  return (
    <div className="button">
      {button}
    </div>
  );
}

export default Button;