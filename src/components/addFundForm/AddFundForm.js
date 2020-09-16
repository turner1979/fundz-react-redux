import React, { useState } from 'react';
import { connect } from 'react-redux';
import './AddFundForm.scss';
import Button from '../button/Button';
import { COLOURS } from '../../config/colours';
import FundColourChooser from '../fundColourChooser/FundColourChooser';
import { addFund } from '../../redux';

const AddFundForm = (props) => {
  const [form, setForm] = useState({
    fundName: '',
    fundTarget: '',
    fundColour: COLOURS[0]
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

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addFund({
      id: Math.random().toString(36).substr(2),
      colour: form.fundColour,
      name: form.fundName,
      current: 0,
      target: form.fundTarget
    })
  }

  return (
    <div className="add-fund-form">
      <form autoComplete="off" onSubmit={(e) => handleSubmit(e) } >
        { JSON.stringify(form) }
        <p><strong>Add New Fund</strong></p>
        <div className="add-fund-form__row">
            <input
              type="text"
              name="fundName"
              placeholder="Name"
              maxLength="20"
              value={form.fundName}
              onChange={(e) => handleChange(e) } />
            {/* TODO: error message */}
        </div>

        <div className="add-fund-form__row">
            <input
              type="text"
              name="fundTarget"
              placeholder="Target"
              maxLength="12"
              value={form.fundTarget}
              onChange={(e) => handleChange(e) } />
            {/* TODO: error message */}
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
