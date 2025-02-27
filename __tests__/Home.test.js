import { render, screen } from "@testing-library/react";
import Home from "../src/pages/Home";

describe("Home Component", () => {
  test("renders the homepage without crashing", () => {
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /welcome/i });
    expect(heading).toBeInTheDocument();
  });

  test("renders a login button", () => {
    render(<Home />);
    const loginButton = screen.getByRole("button", { name: /login/i });
    expect(loginButton).toBeInTheDocument();
  });

  test("renders a signup link", () => {
    render(<Home />);
    const signupLink = screen.getByRole("link", { name: /sign up/i });
    expect(signupLink).toBeInTheDocument();
  });

  test("renders main description", () => {
    render(<Home />);
    const description = screen.getByText(/learn anything, anytime/i);
    expect(description).toBeInTheDocument();
  });
});
