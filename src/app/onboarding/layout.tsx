
import React from "react";
import { ProfileForm } from "./profile-form"; // Import the ProfileForm component
import { SignedIn } from "@clerk/nextjs";

export default function OnboardingLayout() {
  return (
    <>
       <SignedIn> 
      <div className="">
      </div>
      <div className="space-y-6 p-4 md:p-10 pb-16">
  <div className="space-y-0.5 p-5">
    <h2 className="text-3xl font-light tracking-tight">Become a Rizq Seller</h2>
    <p className="text-muted-foreground text-light pt-3">
      Tell us about yourself and what you bring to the table!
    </p>
  </div>


  <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
    <div className="flex-1 lg:max-w-2xl">
      <ProfileForm /> 
    </div>
  </div>
</div>
</SignedIn> 

    </>
  );
}
