import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import { Expres, Title } from 'components/Expresso/Expresso.styled';
import Notification from './Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 1,
    bad: 2,
    };
    

  render() {
    return (
      <Expres>
        <Title>Please leave feedback</Title>
        <FeedbackOptions state={this.state} />
        <Title>Statistics</Title>
        <Notification />
      </Expres>
    );
  }
}
