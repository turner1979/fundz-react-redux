import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { openFundModal } from '../../redux';
import './Funds.scss';
import AddFundForm from '../../components/addFundForm/AddFundForm';
import ContentContainer from '../../components/contentContainer/ContentContainer';
import Footer from '../../components/footer/Footer';
import FundsContainer from '../../components/fundsContainer/FundsContainer';
import Header from '../../components/header/Header';
import Icon from '../../components/icon/Icon';
import Modal from '../../components/modal/Modal';
import Version from '../../components/version/Version';

const Funds = (props) => {
  const history = useHistory();
  const onBackClick = () => {
    history.push('/');
  }
  const onAddFundClick = () => {
    props.openFundModal();
  }

  return (
    <div className="funds">
      <Header />
      <ContentContainer>

        <Version />
        {
          props.fundModal.showModal
          ? <Modal><AddFundForm /></Modal>
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

        {/* TODO: loading icon  */}
        <div className="funds__grid">
          <FundsContainer />
        </div>

        <Footer />
      </ContentContainer>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    fundModal: state.fundModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    openFundModal: () => {
      dispatch(openFundModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Funds);