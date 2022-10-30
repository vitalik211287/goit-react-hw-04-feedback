import React, { Component } from 'react';
import { BtnList, Message, Number } from './Expresso/Expresso.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';

const feedbackOptions = new FeedbackOptions();

class Notification extends Component {
  render() {
    return (
      <BtnList>
        {feedbackOptions.objKeysValues().map(stat => {
          return (
            <li>
              <Message>{feedbackOptions.toUpperCase(stat[0])}</Message>
              <Number>{stat[1]}</Number>
            </li>
          );
        })}
      </BtnList>
    );
  }
}

export default Notification;
