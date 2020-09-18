import React from 'react';
import './FundProgress.scss';
import FundPill from '../fundPill/FundPill';

const FundProgress = ({ fund }) => {

  const getPercentage = () => {
    return (100 / fund.target) * fund.current;
  }

  let percentage = getPercentage();

  const barStyles = () => {
    return {
      background: fund.colour.colour,
      width : percentage + '%'
    }
  }

  const pillOptions = () => {
    return {
      text: ( percentage === 100 ?  'Complete' : ((percentage > 0) ? 'In Progress' : 'Started'))
    };
  }

  return (
    <div className="fund-progress">
      <div className="fund-progress__top">
        <FundPill options={ pillOptions() }/>
        <p>{ percentage }%</p>
      </div>
      <div className="fund-progress__bar">
        <div className="fund-progress__bar-current" style={ barStyles() }></div>
      </div>
      <div className="fund-progress__bottom">
        <p>£{ fund.current }</p>
      </div>
    </div>
  );
}

export default FundProgress;
