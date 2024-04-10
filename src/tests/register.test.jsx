import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RegisterPage from '../RegisterPage';

describe('RegisterPage', () => {

  test('renders register form', () => {
    render(<RegisterPage />);
    const registerHeader = screen.getByText(/Regisztráljon, hogy ön is Nálunk tudja hirdetni terményeit!/i);
    expect(registerHeader).toBeInTheDocument();
  });

  test('handles name input change', () => {
    render(<RegisterPage />);
    const nameInput = screen.getByPlaceholderText(/Teljes név/i);
    userEvent.type(nameInput, 'John Doe');
    expect(nameInput).toHaveValue('John Doe');
  });

  test('handles invalid email error', () => {
    render(<RegisterPage />);
    const emailInput = screen.getByPlaceholderText(/E-mail cím/i);
    userEvent.type(emailInput, 'invalid');
    expect(screen.getByText(/Az email-cím nem megfelelő formátumú!/i)).toBeInTheDocument();
  });

  test('handles invalid phone error', () => {
    render(<RegisterPage />);
    const phoneInput = screen.getByPlaceholderText(/Telefonszám/i);
    userEvent.type(phoneInput, '123-456-789');
    expect(screen.getByText(/A telefonszám formátumánnak az alábbival kell megegyeznie: 06-XX-XXX-XXXX/i)).toBeInTheDocument();
  });

  test('handles weak password error', () => {
    render(<RegisterPage />);
    const passwordInput = screen.getByPlaceholderText(/Jelszó/i);
    userEvent.type(passwordInput, 'weak');
    expect(screen.getByText(/A jelszónak minimum 10 karakter hosszúnak kell lennie./i)).toBeInTheDocument();
  });

  test('handles password mismatch error', () => {
    render(<RegisterPage />);
    const passwordInput = screen.getByPlaceholderText(/Jelszó/i);
    userEvent.type(passwordInput, 'StrongPassword123!');
    const confirmPasswordInput = screen.getByPlaceholderText(/Jelszó megerősítése/i);
    userEvent.type(confirmPasswordInput, 'DifferentPassword123!');
    expect(screen.getByText(/A megadott jelszavak nem egyeznek./i)).toBeInTheDocument();
  });

  test('calls register API on form submit', async () => {
    // Mock API call
    const mockRegister = vi.fn();
    vi.spyOn(axios, 'post').mockImplementationOnce(() => {
      return Promise.resolve({ data: 'success' }); 
    });

    render(<RegisterPage />);  
    const nameInput = screen.getByPlaceholderText(/Teljes név/i);
    userEvent.type(nameInput, 'John Doe');
    const usernameInput = screen.getByPlaceholderText(/Felhasználónév/i);
    userEvent.type(usernameInput, 'johndoe');
    const emailInput = screen.getByPlaceholderText(/E-mail cím/i);
    userEvent.type(emailInput, 'johndoe@gmail.com');
    const phoneInput = screen.getByPlaceholderText(/Telefonszám/i);
    userEvent.type(phoneInput, '06-13-456-789');
    const passwordInput = screen.getByPlaceholderText(/Jelszó/i);
    userEvent.type(passwordInput, 'Ad1234567!');
    const confirmPasswordInput = screen.getByPlaceholderText(/Jelszó megerősítése/i);
    userEvent.type(confirmPasswordInput, 'Ad1234567!');



    const button = screen.getByText(/Regisztráció/i);
    userEvent.click(button);

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledTimes(1);
    });
  });

});
