import React, { useState } from 'react';
import { connect } from 'react-redux';
import './AddFundForm.scss';
import Button from '../button/Button';
import { addFund } from '../../redux';

const AddFundForm = (props) => {
  const [form, setForm] = useState({
    fundName: '',
    fundTarget: ''
  });
  const onAddFundClick = () => {
    props.addFund({
      id: Math.random().toString(36).substr(2),
      colour: { name: 'redSalsa', colour: '#F94144' },
      name: 'New Fund',
      current: 0,
      target: 1000
    })
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }
  return (
    <div className="add-fund-form">
      {JSON.stringify(form)}
      <form autoComplete="off">
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
          {/* TODO: add colours */}
        </div>
        <div onClick={() => { onAddFundClick() }}>
          <Button text="Add" />
        </div>
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
