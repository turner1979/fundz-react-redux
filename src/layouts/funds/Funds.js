import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addFund, openFundModal } from '../../redux';
import './Funds.scss';
import Footer from '../../components/footer/Footer';
import FundCard from '../../components/fundCard/fundCard';
import Header from '../../components/header/Header';
import ContentContainer from '../../components/contentContainer/ContentContainer';
import Icon from '../../components/icon/Icon';
import Version from '../../components/version/Version';
import Modal from '../../components/modal/Modal';

const Funds = (props) => {
  const history = useHistory();
  const onBackClick = () => {
    history.push('/');
  }
  const onAddFundClick = () => {
    props.openFundModal();
    props.addFund({
      id: Math.random().toString(36).substr(2),
      colour: { name: 'redSalsa', colour: '#F94144' },
      name: 'New Fund',
      current: 0,
      target: 1000
    })
  }

  return (
    <div className="funds">
      <Header />
      <ContentContainer>

        <Version />
        {
          props.fundModal.showModal
          ? <Modal>content</Modal>
          : null
        }

        {/* TODO: create funds controls component */}
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
          {props.funds.map((fund) => { return <FundCard key={fund.id} fund={fund} /> })}
        </div>

        <Footer />
      </ContentContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    funds: state.funds.funds,
    fundModal: state.fundModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFund: (fund) => {
      dispatch(addFund(fund))
    },
    openFundModal: () => {
      dispatch(openFundModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Funds);