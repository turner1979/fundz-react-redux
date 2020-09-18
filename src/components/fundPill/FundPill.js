import React from 'react';
import './FundPill.scss';

const FundPill = ({ options }) => {
  const className = options.text ? `fund-pill fund-pill--${options.text.toLowerCase().replace(' ', '-')}` : 'fund-pill'
  return (
    <div className={ className }>
      <p>{ options.text }</p>
    </div>
  );
}

export default FundPill;
