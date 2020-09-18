import React from 'react';
import './FundProgress.scss';

const FundProgress = () => {
  return (
    <div className="fund-progress">
      <div className="fund-progress__top">
        {/* <fund-pill [options]="pillOptions"></fund-pill> */}
        <p>100%</p>
      </div>
      <div className="fund-progress__bar">
        <div className="fund-progress__bar-current"></div>
      </div>
      <div className="fund-progress__bottom">
        <p>£xxx</p>
      </div>
    </div>
  );
}

export default FundProgress;
