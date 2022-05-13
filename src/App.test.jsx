import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('App', () => {
  it('should load a header, an input, and an initial list of items', () => {
    render(<App />);
    const header = screen.getByText(/welcome/i);
    expect(header).toBeInTheDocument();

    const input = screen.getByRole('textbox');
    const addBtn = screen.getByLabelText('submit new item');
    userEvent.type(input, 'apple');
    userEvent.click(addBtn);

    const appleEdit = screen.getByLabelText('button to edit apple');
    expect(appleEdit).toBeInTheDocument();

    userEvent.type(input, 'potatoes');
    userEvent.click(addBtn);

    const potatoDelete = screen.getByLabelText('button to delete potatoes');
    expect(potatoDelete).toBeInTheDocument();

    screen.debug();
  });
});
