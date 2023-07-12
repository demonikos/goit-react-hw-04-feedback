import React from 'react';
import PropTypes from 'prop-types';

export const Statistics = ({ stateValues, total, positive }) => {
  const totalFeedback = total;
  const positivePercentage = positive;
  const staticArray = [];
  for (const el in stateValues) {
    staticArray.push(
      <p key={el}>
        <span>{el}: </span>
        {stateValues[el]}
      </p>
    );
  }
  return (
    <>
      {staticArray}
      {
        <p key={totalFeedback}>
          <span>Total: </span>
          {totalFeedback}
        </p>
      }
      {
        <p key={positivePercentage}>
          <span>Positive feedback: </span>
          {positivePercentage}%
        </p>
      }
    </>
  );
};

Statistics.propTypes = {
  stateValues: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
