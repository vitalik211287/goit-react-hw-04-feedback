// import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statics/Statistics';
import Notification from './Notification/Notification';
import { Expres } from './App.styled';
import { useState } from 'react';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setState = { good, neutral, bad };
  const options = () => {
    return Object.entries(setState);
  };

  const toUpperCase = stat => {
    return stat.charAt(0).toUpperCase() + stat.slice(1);
  };

  const handleClick = el => {
    switch (el[0]) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const array = options().map(el => {
      return el[1];
    });
    const total = array.reduce((acc, stat) => {
      return acc + stat;
    }, 0);
    return total;
  };
  console.log(options());
  const countPositiveFeedbackPercentage = () => {
    const array = options().map(el => {
      return el[1];
    });
    return Math.round((array[0] / countTotalFeedback()) * 100);
  };
  return (
    <Expres>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={options}
          toUpperCase={toUpperCase}
          onClick={handleClick}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            options={options}
            toUpperCase={toUpperCase}
            countTotalFeedback={countTotalFeedback}
            countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification
            message="There is no feedback"
            countTotalFeedback={countTotalFeedback}
          />
        )}
      </Section>
    </Expres>
  );
}
