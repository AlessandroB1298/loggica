import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SignUpPage from "@/app/sign-up/[[...sign-up]]/page";

jest.mock("@clerk/nextjs", () => ({
  SignUp: jest.fn(),
}));

describe("Clerk Components", () => {
  it("should render sign-up page with sign-up component", () => {
    render(<SignUpPage />);
    const signUpButton = screen.getByTestId("mock-sign-up");
    expect(signUpButton).toBeInTheDocument();
  });
});
