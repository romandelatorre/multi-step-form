import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, it } from '@jest/globals';
import MainPage from '../Pages/MainPage';
import userEvent from '@testing-library/user-event';
require('jest');

describe('Form', () => {
  it('renders fields and submits form', async () => {
    const handleSubmit = jest.fn();

    render(<MainPage onSubmit={handleSubmit} />);

    const nameInput = screen.getByPlaceholderText('e.g. Stephen King');
    const emailInput = screen.getByPlaceholderText(
      'e.g. stephenking@lorem.com'
    );
    const phoneInput = screen.getByPlaceholderText('e.g. +1 234 567 890');

    userEvent.type(nameInput, 'Roman De la Torre');
    userEvent.type(emailInput, 'roman@example.com');
    userEvent.type(phoneInput, '3216987411');

    userEvent.click(screen.getByText('Next Step'));

    handleSubmit({
      name: 'Roman De la Torre',
      email: 'roman@example.com',
      phone: '3216987411',
    });

    await waitFor(() => expect(handleSubmit).toHaveBeenCalled());

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'Roman De la Torre',
      email: 'roman@example.com',
      phone: '3216987411',
    });
  });
});
