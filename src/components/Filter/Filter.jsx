import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ filter, onFilter }) => {
  return (
    <div>
      <label>
        <input
          name="filter"
          type="text"
          onChange={onFilter}
          value={filter}
        ></input>
      </label>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
