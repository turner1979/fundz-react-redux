import React from 'react';
import './ContentContainer.scss'

function ContentContainer(props) {
  return (
    <div className="content-container">
      <div className="content-container__inner">{props.children}</div>
    </div>
  );
}

export default ContentContainer;