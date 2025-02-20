"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // shadcn UI Button component

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full  bg-background shadow-lg dark:shadow-[#ffffff19]">
      <div className=" flex h-16 items-center justify-between md:mx-8 px-4">
        <Link href="/" className="flex items-center space-x-3 ">
          <div className="h-6 w-6">logo</div>
          <span className="font-bold">Brand</span>
        </Link>

        {/* Center: Navigation links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link
            href="/price"
            className="text-sm font-medium hover:text-primary"
          >
            Price
          </Link>
          <Link
            href="/review"
            className="text-sm font-medium hover:text-primary"
          >
            Review
          </Link>
          <Link
            href="/product"
            className="text-sm font-medium hover:text-primary"
          >
            Product
          </Link>
          <Link
            href="/document"
            className="text-sm font-medium hover:text-primary"
          >
            Document
          </Link>
        </nav>

        {/* Right: Login and Signup buttons for Desktop */}
        <div className="hidden md:flex items-center space-x-2">
          <Button variant="outline" className="border-primary" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button
          className="group md:hidden flex items-center justify-center"
          variant="outline"
          size="icon"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          <svg
            className="pointer-events-none"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 12L20 12"
              className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
            />
            <path
              d="M4 12H20"
              className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
            />
            <path
              d="M4 12H20"
              className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
            />
          </svg>
        </Button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t px-4 pb-4">
          <nav className="flex flex-col space-y-2 pt-4">
            <Link
              href="/"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/price"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Price
            </Link>
            <Link
              href="/review"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Review
            </Link>
            <Link
              href="/product"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Product
            </Link>
            <Link
              href="/document"
              className="text-sm font-medium hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              Document
            </Link>
          </nav>
          <div className="mt-4 flex flex-col space-y-2">
            <Button variant="outline" className="border-primary"asChild>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                Login
              </Link>
            </Button>
            <Button asChild>
              <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
