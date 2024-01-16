import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { nanoid } from 'nanoid';
import './Form.css';

const Form = ({ onFormSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    const id = nanoid();
    onFormSubmit({ id, name, number });
    setName('');
    setNumber('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name">
        <span className="label-span">Name</span>
        <input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleChange}
        />
      </label>
      <label htmlFor="number">
        <span className="label-span">Phone</span>
        <input
          type="tel"
          name="number"
          value={number}
          required
          onChange={handleChange}
        />
      </label>
      <button type="submit">Add contact</button>
    </form>
  );
};

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
