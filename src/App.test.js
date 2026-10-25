// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TokenHalo title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TokenHalo/i);
    expect(titleElement).toBeInTheDocument();
});
