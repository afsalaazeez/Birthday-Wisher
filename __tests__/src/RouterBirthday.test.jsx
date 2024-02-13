// ********RoostGPT********
// Test generated by RoostGPT for test react-bday using AI Type Open AI and AI Model gpt-4-1106-preview



// ********RoostGPT********
import React from 'react';
import { render } from '@testing-library/react';
import RouterBirthday from '../../src/RouterBirthday';
import { MemoryRouter, Route } from 'react-router-dom';

describe('RouterBirthday Component', () => {
  const renderWithRouter = (ui, { route = '/' } = {}) => {
    window.history.pushState({}, 'Test page', route)
    return {
      ...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>)
    }
  }

  test('renders with correct props', () => {
    const route = '/birthday/John/1/January';
    const { getByText } = renderWithRouter(
      <Route path="/birthday/:name/:day/:month" component={RouterBirthday} />,
      { route }
    );

    expect(getByText(/john/i)).toBeInTheDocument();
    expect(getByText(/1/i)).toBeInTheDocument();
    expect(getByText(/january/i)).toBeInTheDocument();
  });

  test('handles missing props', () => {
    console.error = jest.fn(); // Suppress React prop-type error logging
    const { queryByText } = renderWithRouter(
      <Route path="/birthday/:name/:day/:month" component={RouterBirthday} />
    );

    expect(queryByText(/name/i)).not.toBeInTheDocument();
    expect(queryByText(/day/i)).not.toBeInTheDocument();
    expect(queryByText(/month/i)).not.toBeInTheDocument();
    expect(console.error).toHaveBeenCalled();
  });

  // Additional tests can be added here to cover more scenarios
});

