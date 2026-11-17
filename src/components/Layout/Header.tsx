import { auth } from "@/lib/auth";
import { cn } from "cn";
import { LogIn } from "lucide-react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import HeaderUserMenu from "../HeaderUserMenu";
import { buttonVariants } from "../shadcnui/button";

const Header = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  return (
    <header className="bg-background fixed top-0 right-0 left-0 z-50 border-b shadow">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center px-3 py-3 sm:px-6">
        {/* 1. Left - Logo and App Name */}
        <div className="flex items-center">
          <Link
            href="/"
            className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="BookHub logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <span className="text-xl font-bold sm:text-2xl">
              Book Management App
            </span>
          </Link>
        </div>

        {/* 2. Center - Navigation */}
        <nav className="flex items-center justify-center gap-4">
          <Link
            href="/"
            className="font-medium transition-colors hover:text-teal-500">
            Home
          </Link>
          <Link
            href="/"
            className="font-medium transition-colors hover:text-teal-500">
            All Books
          </Link>
        </nav>

        {/* 3. Right - Login / User Menu */}
        <div className="flex items-center justify-end">
          {session ?
            <HeaderUserMenu
              name={session.user.name}
              email={session.user.email}
              image={session.user.image}
            />
          : <Link
              href="/login"
              className={cn(
                buttonVariants({ size: "lg" }),
                "flex items-center gap-2 bg-teal-500 text-black hover:bg-teal-700",
              )}>
              <LogIn size={20} />
              Sign In
            </Link>
          }
        </div>
      </div>
    </header>
  );
};

export default Header;
