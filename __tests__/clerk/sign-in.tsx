import { render, screen } from "@testing-library/react";
import SignInPage from "../../app/sign-in/[[...sign-in]]/page";
import "@testing-library/jest-dom";

jest.mock("@clerk/nextjs", () => ({
  SignIn: jest.fn(),
}));

describe("Clerk Components", () => {
  it("should render sign-in page with sign-in component", () => {
    render(<SignInPage />);
    const signInButton = screen.getByTestId("mock-sign-in");
    expect(signInButton).toBeInTheDocument();
  });
});
