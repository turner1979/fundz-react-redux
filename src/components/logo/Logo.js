import React from 'react';
import './Logo.scss';
import { COLOURS } from '../../config/colours';

function Logo(props) {
  const topLevelClass = props.alt ? 'logo logo--alt' : 'logo';
  return (
    <div className={topLevelClass}>
      <div className="logo__text">
        <h1>fundz</h1>
      </div>
      <div className="logo__colours">
        {
          COLOURS.map((colour, index) => {
            return <div className="logo__colour" key={index} style={{ 'background' : colour.colour }}></div>
          })
        }
      </div>
    </div>
  );
}

export default Logo;