import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../src/pages/Login";

test("renders login form and shows error message for invalid credentials", () => {
  render(<Login />);

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByRole("button", { name: /login/i });

  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();

  fireEvent.change(usernameInput, { target: { value: "user" } });
  fireEvent.change(passwordInput, { target: { value: "wrongpassword" } });
  fireEvent.click(loginButton);

  const errorMessage = screen.getByText(/user not found/i);
  expect(errorMessage).toBeInTheDocument();
});
