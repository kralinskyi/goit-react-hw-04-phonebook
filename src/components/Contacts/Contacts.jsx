import React from 'react';
import './Contacts.css';
import PropTypes from 'prop-types';

const Contacts = ({ contacts, deleteContact }) => {
  return (
    <ul className="contacts-list">
      {contacts.map(({ id, name, number }) => (
        <li key={id} className="contacts-list__item">
          {name}:
          <span>
            <i>{number}</i>
          </span>
          <button type="button" onClick={() => deleteContact(id)}>
            delete
          </button>
        </li>
      ))}
    </ul>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contacts;
