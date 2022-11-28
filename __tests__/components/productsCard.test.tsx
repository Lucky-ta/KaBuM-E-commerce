import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ProductsCards from '../../src/components/ProductsCard/ProductsCard';

describe('Test ProductsCard component', () => {
  beforeEach(() => {
    render(<ProductsCards />);
  });

  it('should have a product image', () => {
    const productImage = screen.getByRole('img');
    expect(productImage).toBeInTheDocument();
  });

  it('should have a product name', () => {
    const productName = screen.getByRole('heading');
    expect(productName).toBeInTheDocument();
  });

  it('should have a product price', () => {
    const productPrice = screen.getByAltText(/productPrice/i);
    expect(productPrice).toBeInTheDocument();
  });

  it('should have a buy button', () => {
    const buyButton = screen.getByRole('button');
    expect(buyButton).toBeInTheDocument();
  });

  it('should have a add favorite option', () => {
    const addFavoriteButton = screen.getByAltText(/addFavoriteButton/i);
    expect(addFavoriteButton).toBeInTheDocument();
  });

  it('should have a 5 stars product review', () => {
    const fiveStarsProductReview = screen.getByAltText(/fiveStarsButton/i);
    expect(fiveStarsProductReview).toBeInTheDocument();
  });
});
