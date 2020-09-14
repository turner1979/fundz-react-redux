import React, { version } from 'react';
import './Version.scss';
import logo from '../../logo.svg';

function Version() {
  return (
    <div className="version">
      <div className="version__logo">
        <img src={logo} alt="" />
      </div>
      <p>This version of the fundz app was built with <strong>React v{version}</strong></p>
    </div>
  );
}

export default Version;