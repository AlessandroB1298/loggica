import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  const redirect = process.env.NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL;
  return (
    <div
      data-testid="mock-sign-up"
      className="flex justify-center items-center min-h-screen"
    >
      <SignUp
        signInUrl="/sign-in"
        forceRedirectUrl={redirect} // Add this as well
      />
    </div>
  );
}
