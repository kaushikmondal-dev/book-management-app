"use client";

import { BookOpen } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-3 py-6 sm:flex-row sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2">
          <BookOpen
            className="text-teal-500"
            size={24}
          />
          <span className="text-lg font-bold">Book Management App</span>
        </Link>

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link
            href="/"
            className="transition-colors hover:text-teal-500">
            Home
          </Link>
          <Link
            href="/all-books"
            className="transition-colors hover:text-teal-500">
            All Books
          </Link>
        </nav>

        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} BookHub. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
