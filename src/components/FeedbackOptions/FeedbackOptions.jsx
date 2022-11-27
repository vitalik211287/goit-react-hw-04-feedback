import React from 'react';
import PropTypes from 'prop-types';
import { BtnList, Button } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, toUpperCase, onClick }) => {
  return (
    <BtnList>
      {options().map((nameFeedback, index) => {
        return (
          <li key={index}>
            <Button
              onClick={() => {
                onClick(nameFeedback[0]);
              }}
            >
              {toUpperCase(nameFeedback[0])}
            </Button>
          </li>
        );
      })}
    </BtnList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypeі = {
  onClick: PropTypes.func,
  options: PropTypes.func,
  toUpperCase: PropTypes.func,
};