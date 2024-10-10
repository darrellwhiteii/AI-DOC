import { SignInButton, SignedOut, SignedIn, UserButton } from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div>Your other navbar content</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/"/>
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
