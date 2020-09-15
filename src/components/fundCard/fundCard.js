import React from 'react';
import { connect } from 'react-redux';
import { deleteFund } from '../../redux';
import './fundCard.scss';

const FundCard = (props) => {
  const fund = props.fund ? props.fund : null;
  const cardColour = { 'background' : fund ? fund.colour.colour : '#ccc' };
  const onEditFund = () => { console.log('TODO: event handler') }
  const onDeleteFund = (fund) => { props.deleteFund(fund)}
  return(
    <div className="fund-card">
      <div className="fund-card__top" style={cardColour}>
        <div>
          <p>
            <strong>{fund.name}</strong>
          </p>
          <p>
            <i className="fas fa-bullseye"></i>
            <span>{fund.target}</span>
          </p>
        </div>
        <div className="fund-card__actions">
          <div className="fund-card__action" onClick={() => onEditFund()}>
            <i className="fas fa-pencil-alt"></i>
          </div>
          <div className="fund-card__action" onClick={() => onDeleteFund(fund)}>
            <i className="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>

      <div className="fund-card__bottom">TODO: content</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    funds: state.funds.funds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteFund: (fund) => {
      dispatch(deleteFund(fund))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FundCard);