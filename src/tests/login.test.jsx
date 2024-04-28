import React from "react";
import { render, screen, userEvent } from "@testing-library/react";
import LoginForm from "../pages/LoginPage";
import { vi } from "vitest";

describe("LoginForm", () => {
  it("should call handleLogin when form is submitted", () => {
    const handleLogin = vi.fn();
    render(<LoginForm handleLogin={handleLogin} />);

    const submitButton = screen.getByText("Bejelentkezés");
    userEvent.click(submitButton);

    expect(handleLogin).toHaveBeenCalledTimes(1);
  });

  it("should pass username and password to handleLogin", () => {
    const handleLogin = vi.fn();
    render(<LoginForm handleLogin={handleLogin} />);

    const usernameInput = screen.getByPlaceholderText("Felhasználónév");
    userEvent.type(usernameInput, "testuser");

    const passwordInput = screen.getByPlaceholderText("Jelszó");
    userEvent.type(passwordInput, "testpass");

    const submitButton = screen.getByText("Bejelentkezés");
    userEvent.click(submitButton);

    expect(handleLogin).toHaveBeenCalledWith({
      username: "testuser",
      password: "testpass",
    });
  });

  it("should show error message on invalid credentials", async () => {
    const mockLogin = vi.fn(() =>
      Promise.reject("Invalid username or password")
    );

    render(<LoginForm login={mockLogin} />);

    const submitButton = screen.getByText("Bejelentkezés");
    userEvent.click(submitButton);

    const errorMessage = await screen.findByText(
      "Invalid username or password"
    );
    expect(errorMessage).toBeInTheDocument();
  });
});

export {}; 