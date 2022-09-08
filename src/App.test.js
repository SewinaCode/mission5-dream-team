import { render, screen } from '@testing-library/react';
import App from './App';

describe('App renders all different home components', () => {
  
  test('renders Header component in App', () => {
    render(<App />);
    const textSection = screen.getByText(/My Account/i);
    expect(textSection).toBeInTheDocument();
  
  });

  test('renders Header-nav component in App', () => {
    render(<App />);
    const textSection = screen.getByText(/中文/i);
    expect(textSection).toBeInTheDocument();
  
  });

  test('renders Intro-Section component in App', () => {
    render(<App />);
    const textSection = screen.getByText(/Insure your car from the car experts./i);
    expect(textSection).toBeInTheDocument();
  
  });
  
})
