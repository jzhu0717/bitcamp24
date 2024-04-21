import { render, screen } from '@testing-library/react';
import App from './App';

test('funny link!', () => {
  render(<App />);
  const linkElement = screen.getByText(/yessir/i);
  expect(linkElement).toBeInTheDocument();
});
