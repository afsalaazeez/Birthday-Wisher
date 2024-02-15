// ********RoostGPT********
// Test generated by RoostGPT for test react-tic using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import React from 'react';
import { render } from '@testing-library/react';
import RouterBirthday from '../../RouterBirthday';

describe('RouterBirthday component', () => {
  // Mock props to be passed to the RouterBirthday component
  const mockProps = {
    match: {
      params: {
        name: 'John',
        day: '24',
        month: 'December'
      }
    }
  };

  test('renders without crashing', () => {
    const { unmount } = render(<RouterBirthday {...mockProps} />);
    unmount();
  });

  test('passes correct params to Birthday component', () => {
    const { getByTestId } = render(<RouterBirthday {...mockProps} />);
    
    // Assuming Birthday component uses passed props and renders them in elements with proper 'data-testid's
    const nameElement = getByTestId('birthday-name');
    expect(nameElement.textContent).toBe(mockProps.match.params.name);

    const dayElement = getByTestId('birthday-day');
    expect(dayElement.textContent).toBe(mockProps.match.params.day);

    const monthElement = getByTestId('birthday-month');
    expect(monthElement.textContent).toBe(mockProps.match.params.month);
  });

  // Add more test cases as needed
});

export default RouterBirthday;

