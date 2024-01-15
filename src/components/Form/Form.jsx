import React from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import './Form.css';

const Form = ({ onFormSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    onFormSubmit({ id, name, number });
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span className="label-span">Name</span>
        <input type="text" name="name" required />
      </label>
      <label htmlFor="number">
        <span className="label-span">Phone</span>
        <input type="tel" name="number" required />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
