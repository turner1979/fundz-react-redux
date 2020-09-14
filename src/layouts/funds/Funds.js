import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFund, deleteFund, updateFund } from '../../redux';
import './Funds.scss';
import Footer from '../../components/footer/Footer';
import FundCard from '../../components/fundCard/fundCard';
import Header from '../../components/header/Header';
import ContentContainer from '../../components/contentContainer/ContentContainer';
import Icon from '../../components/icon/Icon';
import Version from '../../components/version/Version';

function Funds(props) {
  const history = useHistory();
  const onBackClick = () => {
    history.push('/');
  }
  const onAddFundClick = () => {
    props.addFund()
  }
  return (
    <div className="funds">
      <Header />
      <ContentContainer>

        <Version />
        <div className="funds__controls">
          <div onClick={() => onBackClick() }>
            <Icon iconClass="fas fa-chevron-left" />
          </div>
          <div onClick={() => { onAddFundClick() }}>
            <Icon iconClass="fas fa-plus"  />
          </div>
        </div>

        {/* TODO: modal */}
        {/* TODO: loading icon  */}
        <div className="funds__grid">
          <FundCard />
          <FundCard />
          <FundCard />
          <FundCard />
        </div>

        <Footer />
      </ContentContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    funds: state.funds.funds
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFund: () => {
      dispatch(addFund())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Funds);