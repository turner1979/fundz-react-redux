import React, { useState } from 'react';
import { connect } from 'react-redux';
import './AddFundForm.scss';
import Button from '../button/Button';
import Message from '../message/Message';
import { COLOURS } from '../../config/colours';
import FundColourChooser from '../fundColourChooser/FundColourChooser';
import { addFund } from '../../redux';

const AddFundForm = (props) => {
  const [form, setForm] = useState({
    fundName: '',
    fundTarget: '',
    fundColour: COLOURS[0]
  });

  const [errors, setErrors] = useState({
    fundName: null,
    fundTarget: null
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleColourChange = (fundColour) => {
    setForm({
      ...form,
      fundColour
    })
  }

  const validate = () => {
    let errors = {};
    if (form.fundName.length < 2) {
      errors.fundName = ['Must be at least 2 characters long.'];
    }
    if (form.fundTarget.length < 2) {
      errors.fundTarget = ['Must be at least 2 characters long.'];
    }
    if (isNaN(form.fundTarget)) {
      errors.fundTarget = ['Must be number (whole numbers only).'];
    }
    return errors;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      props.addFund({
        id: Math.random().toString(36).substr(2),
        colour: form.fundColour,
        name: form.fundName,
        current: 0,
        target: form.fundTarget
      })
    } else {
      setErrors(errors);
    }
  }

  return (
    <div className="add-fund-form">
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e) }>
        <p><strong>Add New Fund</strong></p>
        <div className="add-fund-form__row">
            <input
              type="text"
              name="fundName"
              placeholder="Name"
              maxLength="20"
              value={form.fundName}
              onChange={(e) => handleChange(e) } />
            { errors.fundName ? <Message options={{ text: errors.fundName, type: 'error' }}/> : '' }
        </div>

        <div className="add-fund-form__row">
            <input
              type="text"
              name="fundTarget"
              placeholder="Target"
              maxLength="12"
              value={form.fundTarget}
              onChange={(e) => handleChange(e) } />
            { errors.fundTarget ? <Message options={{ text: errors.fundTarget, type: 'error' }}/> : '' }
        </div>
        <div className="add-fund-form__row">
          <FundColourChooser activeColour={ form.fundColour } selectColour={ handleColourChange }/>
        </div>
        <Button text="Add" />
      </form>
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
    addFund: (fund) => {
      dispatch(addFund(fund))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFundForm);
