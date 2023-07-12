import React from 'react';
import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const btnArray = options.map((el, index) => (
    <button key={index} type="button" onClick={onLeaveFeedback}>
      {el}
    </button>
  ));
  return [btnArray];
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
