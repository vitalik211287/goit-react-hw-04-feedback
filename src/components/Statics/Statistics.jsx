import React from 'react';
import PropTypes from 'prop-types';
import { Number, PositiveNumber, StatList, StatMessage } from './Statics.styled';

const Statistics = ({ options, toUpperCase, countTotalFeedback,countPositiveFeedbackPercentage }) => {
   return (
    <StatList>
      {options().map((stat, index) => {
        return (
          <li key={index}>
            <StatMessage>{toUpperCase(stat[0])}:</StatMessage>
            <Number>{stat[1]}</Number>
          </li>
        );
      })}
      <li>
        <StatMessage>Total:</StatMessage>
        <Number>{countTotalFeedback()}</Number>
      </li>
      <PositiveNumber>
        <StatMessage>Positive feedback:</StatMessage>
        <Number>{countPositiveFeedbackPercentage()}%</Number>
      </PositiveNumber>
    </StatList>
  );
   
};

export default Statistics;

Statistics.propTypes = {
  options: PropTypes.func,
  toUpperCase: PropTypes.func,
  countTotalFeedback: PropTypes.func,
  countPositiveFeedbackPercentage: PropTypes.func,
  positivePercentage: PropTypes.number,
};