import Link from "next/link";
import { FC } from "react";
import { Icons } from "./Icons";
import { buttonVariants } from "./ui/Button";
import { getAuthSession } from "@/lib/auth";
import UserAccountNav from "./UserAccountNav";

const Navbar: FC = async () => {
  const session = await getAuthSession();

  return (
    <div className="fixed inset-x-0 top-0 h-fit bg-zinc-100 border-b border-zinc-300 z-10 py-2">
      <div className="container mx-auto max-w-7xl h-full flex items-center justify-between gap-2">
        {/* logo */}
        <Link href="/" className="flex gap-2 items-center">
          <Icons.logo className="h-8 w-8 sm:h-6 sm:w-6" />
          <p className="hidden text-zinc-700 text-sm font-medium md:block">
            Reddit
          </p>
        </Link>

        {/* Serach bar */}

        {/* Sign in */}
        {session ? (
          <UserAccountNav user={session.user} />
        ) : (
          <Link href="/sign-in" className={buttonVariants()}>
            Sign In
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;