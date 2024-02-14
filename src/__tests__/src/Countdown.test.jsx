// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import React from 'react';
import { render } from '@testing-library/react';
import Countdown from '../../Countdown'; // Correct relative path considering the file location

describe('Countdown Component', () => {
  const mockCountdownData = {
    isItBday: false,
    days: 10,
    hours: 20,
    minutes: 30,
    seconds: 40,
  };
  const mockName = 'Alice';

  test('renders the countdown correctly when it is not the birthday', () => {
    const { getByText } = render(<Countdown countdownData={mockCountdownData} name={mockName} />);
    expect(getByText(/Countdown to Alice's Birthday/i)).toBeInTheDocument();
    expect(getByText('10')).toBeInTheDocument();
    expect(getByText('Days')).toBeInTheDocument();
    expect(getByText('20')).toBeInTheDocument();
    expect(getByText('Hours')).toBeInTheDocument();
    expect(getByText('30')).toBeInTheDocument();
    expect(getByText('Minutes')).toBeInTheDocument();
    expect(getByText('40')).toBeInTheDocument();
    expect(getByText('Seconds')).toBeInTheDocument();
  });

  test('renders the birthday wish when it is the birthday', () => {
    const mockBirthDayData = { ...mockCountdownData, isItBday: true };
    const { getByText } = render(<Countdown countdownData={mockBirthDayData} name={mockName} />);
    expect(getByText(/Happy Birthday Alice!/i)).toBeInTheDocument();
  });

  // More tests can be added here to cover other scenarios and edge cases.
});
