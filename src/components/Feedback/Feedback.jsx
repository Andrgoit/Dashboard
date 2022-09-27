import React, { Component } from 'react';
import { Box } from 'components/Box';
import FeedbackButton from './FeedbackButton/FeedbackButton';
import Section from './Section/Section';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export default class Feedback extends Component {
  state = {
    isOpenFeedback: true,
    good: 0,
    neutral: 0,
    bad: 0,
  };

  toggleFeedbackButton = () => {
    this.setState(prevState => ({
      isOpenFeedback: !prevState.isOpenFeedback,
    }));
  };

  onLeaveFeedback = option => {
    const normalizeOption = option.toLowerCase();
    this.setState(prevState => ({
      [normalizeOption]: prevState[normalizeOption] + 1,
    }));
  };

  total() {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  }

  positivePercentage() {
    const { good } = this.state;
    const total = this.total();
    return Math.round((good / total) * 100);
  }

  render() {
    const { toggleFeedbackButton, onLeaveFeedback } = this;
    const total = this.total();
    const positivePercentag = this.positivePercentage();
    const { isOpenFeedback } = this.state;
    const options = ['Good', 'Neutral', 'Bad'];

    return (
      <div>
        <FeedbackButton
          isOpen={isOpenFeedback}
          onClick={toggleFeedbackButton}
        />
        {isOpenFeedback && (
          <Box
            p={2}
            textAlign="center"
            borderRadius="6px"
            height="320px"
            bg="feedback.bgContainer"
          >
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
              />
            </Section>
            {total > 0 ? (
              <Section title="Statistics">
                <Statistics
                  state={this.state}
                  total={total}
                  positivePercentage={positivePercentag}
                />
              </Section>
            ) : (
              <Notification message="There is no feedback" />
            )}
          </Box>
        )}
      </div>
    );
  }
}
