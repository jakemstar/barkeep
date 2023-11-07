
import { type Session } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "~/components/ui/button";

type SignInProps = {
  session: Session | null;
};

const SignIn = ({session}: SignInProps) => {
  // const session = await getServerAuthSession();
  if (session)
  return (
    <Link href="/api/auth/signout" className={buttonVariants({ variant: "outline" })}>Sign out</Link>
  );
  return (
    <Link href="/api/auth/signin" className={buttonVariants({ variant: "outline" })}>Sign in</Link>
  );
};

export default SignIn;
