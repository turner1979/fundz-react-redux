import React from 'react';
import './fundCard.scss';

function FundCard (props) {
  const fund = props.fund ? props.fund : null;
  const cardColour = { 'background' : fund ? fund.colour.colour : '#ccc' };
  const onEditFund = () => { console.log('TODO: event handler') }
  const onDeleteFund = () => { console.log('TODO: event handler') }
  return(
    <div className="fund-card">
      <div className="fund-card__top" style={cardColour}>
        <div>
          <p>
            <strong>Fund Name</strong>
          </p>
          <p>
            <i className="fas fa-bullseye"></i>
            <span>0</span>
          </p>
        </div>
        <div className="fund-card__actions">
          <div className="fund-card__action" onClick={() => onEditFund()}>
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className="fund-card__action" onClick={() => onDeleteFund()}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>

      <div className="fund-card__bottom">TODO: content</div>
    </div>
  )
}

export default FundCard;