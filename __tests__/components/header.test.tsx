import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../../src/components/Header/Header';

describe('Test main page header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('should have an image', () => {
    const headerImage = screen.getByRole('img');
    expect(headerImage).toBeInTheDocument();
  });

  it('should have an search input', () => {
    const headerSearchInput = screen.getByPlaceholderText(/Busca.../i);
    expect(headerSearchInput).toBeInTheDocument();
  });

  it('should have an search button', () => {
    const headerButtons = screen.getAllByRole('button');
    expect(headerButtons[0]).toBeInTheDocument();
  });

  it('should have an cart button', () => {
    const headerButtons = screen.getAllByRole('button');
    expect(headerButtons[1]).toBeInTheDocument();
  });

  it('should have an more options button', () => {
    const headerButtons = screen.getAllByRole('button');
    expect(headerButtons[2]).toBeInTheDocument();
  });
});
