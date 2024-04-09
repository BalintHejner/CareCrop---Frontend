describe("login", () => {
  it("should login with valid credentials", async () => {
    const { getByPlaceholderText, getByText } = render(<Login />);

    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });

    const submitButton = getByText("Log In");
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(getByText("Welcome testuser!")).toBeInTheDocument()
    );
  });

  it("should display error with invalid credentials", async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Login />);

    const usernameInput = getByPlaceholderText("Username");
    const passwordInput = getByPlaceholderText("Password");

    fireEvent.change(usernameInput, { target: { value: "invaliduser" } });
    fireEvent.change(passwordInput, { target: { value: "invalidpassword" } });

    const submitButton = getByText("Log In");
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(queryByText("Welcome testuser!")).not.toBeInTheDocument()
    );
    expect(getByText("Invalid username or password")).toBeInTheDocument();
  });

  it("should display required field errors with empty inputs", async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(<Login />);

    const submitButton = getByText("Log In");
    fireEvent.click(submitButton);

    await waitFor(() =>
      expect(queryByText("Welcome testuser!")).not.toBeInTheDocument()
    );
    expect(getByText("Username is required")).toBeInTheDocument();
    expect(getByText("Password is required")).toBeInTheDocument();
  });
});
