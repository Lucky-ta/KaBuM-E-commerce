import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Form from '../../src/components/Form';

describe('Test form component', () => {
  beforeEach(() => {
    render(<Form />);
  });

  it('Should have h1', () => {
    const title = screen.getByText(/FAZER LOGIN/i);
    expect(title).toBeInTheDocument();
  });
});
