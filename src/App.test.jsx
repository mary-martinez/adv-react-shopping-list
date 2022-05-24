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
    const appleHeading = screen.getByText(/apple/i);
    expect(appleHeading).toBeInTheDocument();

    userEvent.type(input, 'potatoes');
    userEvent.click(addBtn);

    const potatoDelete = screen.getByLabelText('button to delete potatoes');
    expect(potatoDelete).toBeInTheDocument();

    userEvent.click(potatoDelete);
    expect(potatoDelete).not.toBeInTheDocument();

    userEvent.click(appleEdit);
    expect(appleHeading).not.toBeInTheDocument();
    const appleInput = screen.getByLabelText('editing apple');
    expect(appleInput).toBeInTheDocument();
    const saveBtn = screen.getByRole('button', { name: 'Save Changes' });
    expect(saveBtn).toBeInTheDocument();

    userEvent.type(appleInput, 's');
    userEvent.click(saveBtn);

    const applesHeading = screen.getByText(/apples/i);
    expect(applesHeading).toBeInTheDocument();

    const applesCheckboxFalse = screen.getByRole('checkbox', {
      name: 'apples completed false',
    });
    expect(applesCheckboxFalse).toBeInTheDocument();
    userEvent.click(applesCheckboxFalse);
    screen.debug();
    const applesCheckboxTrue = screen.getByRole('checkbox', {
      name: 'apples completed true',
    });
    expect(applesCheckboxTrue).toBeInTheDocument();
  });
});
