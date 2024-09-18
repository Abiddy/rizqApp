'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Show the content when the user is signed in */}
      <SignedIn>
      
        <Card className="max-h-49 max-w-49 m-8 bg-white text-black">
          <CardHeader>
            <CardTitle>Rizq is in recruitment phase!</CardTitle>
            <CardDescription>We are finding the best freelancers and servicemen to join our community!</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <img src="/search.png" className="max-h-48 max-h-48" alt="Gig Image" />
          </CardContent>
   
          <CardHeader>
            <CardTitle>Are you a freelancer?</CardTitle>

            <CardDescription className="mb-4"> Get set up as a Rizq Seller in 2 easy steps!</CardDescription>
          </CardHeader>

          <CardContent className="flex justify-center mb-6">
            <img src="/gigImage.png" className="max-h-48" alt="Gig Image" />
          </CardContent>

          <CardFooter className="flex flex-col items-start space-y-4">
            <div className="flex items-center space-x-2">
              <Badge variant="outline">1</Badge>
              <h1 className="text-gray-700">Create a Seller Profile</h1>
            </div>

            <div className="flex items-center space-x-2 mb-5">
              <Badge variant="outline">2</Badge>
              <h1 className="text-gray-700">Post a gig!</h1>
            </div>
            <Link href="/onboarding" className="w-full">
            <Button className="w-full bg-blue-500 text-white mt-4">Become Seller</Button>
            </Link>
          </CardFooter>
        </Card>
      </SignedIn>

      {/* Show a different message when the user is signed out */}
      <SignedOut>
   
  
      
  <div className="relative flex flex-col items-center justify-center h-screen text-center bg-blue-500 px-4 overflow-hidden">
  <img src="/landingImage.png" alt="Image 1" className="mb-20 object-cover" />
    <img src="/rizqlogo2.png" alt="Rizq Logo" className="w-24 h-24 mb-3 z-10" />
    <h1 className="text-2xl font-bold text-white z-10">Rizq</h1>
    <p className="text-gray-100 text-s mt-2 pl-5 pr-5">
      Join the first muslim centric freelancing marketplace!
    </p>
    <div className="bg-white text-blue-500 font-semibold px-6 py-2 mt-6 rounded-md hover:bg-gray-100 transition-colors duration-300 z-10">
      <SignInButton>Sign Up</SignInButton>
    </div>
  </div>
</SignedOut>




    </div>
  );
}
