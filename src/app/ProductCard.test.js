import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

test('renders product card with title and description', () => {
  render(
    <ProductCard
      image=""
      title="Test Product"
      description="A great product"
    />
  );

  expect(screen.getByText(/Test Product/)).toBeInTheDocument();
  expect(screen.getByText(/A great product/)).toBeInTheDocument();
});
