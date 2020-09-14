import React from 'react';
import './Icon.scss';

function Icon(props) {
  const icon = props.iconClass ? <i className={props.iconClass}></i> : '';
  return (
    <div className="icon">{icon}</div>
  );
}

export default Icon;
