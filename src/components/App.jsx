import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statics/Statistics';
import Notification from './Notification/Notification';
import { Expres } from './App.styled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = () => {
    return Object.entries(this.state);
  };

  toUpperCase = stat => {
    return stat.charAt(0).toUpperCase() + stat.slice(1);
  };

  handleClick = el => {
    this.setState(prevState => ({
      [el]: prevState[el] + 1,
    }));
  };

  countTotalFeedback = () => {
    const array = this.options().map(el => {
      return el[1];
    });
    const total = array.reduce((acc, stat) => {
      return acc + stat;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const array = this.options().map(el => {
      return el[1];
    });
    return Math.round((array[0] / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <Expres>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.options}
            toUpperCase={this.toUpperCase}
            onClick={this.handleClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              options={this.options}
              toUpperCase={this.toUpperCase}
              countTotalFeedback={this.countTotalFeedback}
              countPositiveFeedbackPercentage={
                this.countPositiveFeedbackPercentage
              }
            />
          ) : (
            <Notification
              message="There is no feedback"
              countTotalFeedback={this.countTotalFeedback}
            />
          )}
        </Section>
      </Expres>
    );
  }
}
