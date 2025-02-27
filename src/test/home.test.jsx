import { render, screen } from '@testing-library/react';
import { MemoryRouter } from "react-router-dom";
import React from 'react';
import Home from '/Users/NateSherer/Desktop/G1-LRNR-ChatAI-Nate/src/pages/Home.jsx';
import Account from '/Users/NateSherer/Desktop/G1-LRNR-ChatAI-Nate/src/pages/Account.jsx'
import Quiz from '/Users/NateSherer/Desktop/G1-LRNR-ChatAI-Nate/src/pages/Quiz.jsx'

describe('Home', () => {
  it('renders the correct greeting', () => {
    render(<MemoryRouter><Home /></MemoryRouter>)
    const greetingElement = screen.getByText('Your guided path to programming enlightenment');
    expect(greetingElement).toBeInTheDocument();
  });
});

describe('Account', () => {
  it('renders the correct word', () => {
    render(<MemoryRouter><Account /></MemoryRouter>)
    const greetingElement = screen.getByText('Account');
    expect(greetingElement).toBeInTheDocument();
  });
});

describe('Quiz', () => {
  it('renders the correct sentence', () => {
    render(<MemoryRouter><Quiz /></MemoryRouter>)
    const greetingElement = screen.getByText('Please choose your preferences below to generate your personalized quiz');
    expect(greetingElement).toBeInTheDocument();
  });
});

describe('Account', () => {
  it('renders the correct phrase for the streak', () => {
    render(<MemoryRouter><Account /></MemoryRouter>)
    const greetingElement = screen.getByText('You have a streak of 5 days!');
    expect(greetingElement).toBeInTheDocument();
  });
});







