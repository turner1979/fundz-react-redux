import React from 'react';
import './FundColourChooser.scss';
import { COLOURS } from '../../config/colours';

const FundColourChooser = ({ activeColour, selectColour }) => {
  const colours = COLOURS.map((colour) => {
    return (
      <div
        className="fund-colour-chooser__option"
        key={colour.name}
        style={{ background: colour.colour }}
        onClick={() => selectColour(colour)}>
        { colour.name === activeColour.name ? <i className="fas fa-check"></i> : '' }
      </div>
    )
  });
  return (
    <div className="fund-colour-chooser">
      {colours}
    </div>
  );
}

export default FundColourChooser;
