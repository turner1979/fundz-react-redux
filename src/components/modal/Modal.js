import React from 'react';
import { connect } from 'react-redux';
import './Modal.scss';
import { closeFundModal } from '../../redux';
import Icon from '../icon/Icon';

const Modal = (props) => {
  const onCloseModal = () => {
    props.closeFundModal()
  }
  return (
    <div className="modal">
      <div className="modal__overlay"></div>
      <div className="modal__content">
        <div className="modal_close" onClick={() => onCloseModal() }>
          <Icon iconClass="fas fa-times" />
        </div>
        {props.children}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    fundModal: state.fundModal
  }
}

const mapDispatchToProps = dispatch => {
  return {
    closeFundModal: () => {
      dispatch(closeFundModal())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
