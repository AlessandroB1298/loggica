import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  const redirect = process.env.NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL;
  return (
    <div
      data-testid="mock-sign-in"
      className="flex justify-center items-center min-h-screen"
    >
      <SignIn
        signUpUrl="/sign-up"
        forceRedirectUrl={redirect} // Add this as well
      />
    </div>
  );
}
