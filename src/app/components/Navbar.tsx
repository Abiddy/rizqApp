'use client'
import { UserButton, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="w-11/12 max-w-4xl mx-auto mt-4 p-4 bg-blue-500 text-white shadow-lg" style={{ borderRadius: '20px'}}>
      {/* Logo on the left */}
      <div className="flex items-center justify-between">
        <Link href="/">
          <img src="/rizqlogo2.png" alt="Logo" className="h-9" />
        </Link>

        {/* Right-side login button */}
        <div className="flex items-center space-x-4">
          {/* Become a Seller Button */}
          <Link href="/dashboard">
              Dashboard
          </Link>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
