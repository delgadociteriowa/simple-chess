import React from 'react';
import { screen, render } from '@testing-library/react';
import App from './App';

describe('Simple Chess Board', () => {
  beforeEach(() => {
    render(<App />);
  });

  it('Shows Simple Chess Board title', () => {
    const title = screen.getByRole('heading', {
      name: 'The Easy Chess Board',
    });
    expect(title).toBeInTheDocument();
  });
});
