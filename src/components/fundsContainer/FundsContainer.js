import React from 'react';
import { connect } from 'react-redux';
import './FundsContainer.scss';
import FundCard from '../fundCard/FundCard';

const FundsContainer = (props) => {
  return (
    <div className="funds-container">
      { props.funds ? props.funds.map((fund) => <FundCard className="fund-container__grid" key={fund.id} fund={fund} />) : null }
    </div>
  )
}

const mapStateToProps = state => {
  return {
    funds: state.funds.funds
  }
}

export default connect(
  mapStateToProps,
)(FundsContainer);
