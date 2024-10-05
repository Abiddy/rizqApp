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
import { SignedIn, SignedOut } from '@clerk/nextjs';
import Link from "next/link";
import { FAQAccordion } from "./components/FAQ";
import ContextSection from "./components/ContextSection";
import CardsSection from "./components/CardsSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
              <style jsx>{`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        `}</style>
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
      <div   style={{
    borderBottomLeftRadius: '70% 10%',
    borderBottomRightRadius: '70% 10%',
  }} className=" flex flex-col justify-between text-center px-2 overflow-hidden bg-blue-500">
  {/* Transparent Navbar */}
  <div className="flex items-center justify-between p-5 bg-transparent z-10">
    <img src="/rizqlogo2.png" alt="Rizq Logo" className="w-14 h-14" />
    <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSd3j9iVnasvMM6bLaFYsw5ypebcnyjZFbqqyXSzpn02Q3BAhQ/viewform?fbzx=1084646058636914488" 
  target="_blank" 
  rel="noopener noreferrer"
  className="px-4 py-2 bg-white text-blue-500 rounded-full"
>
  Survey
</a>
  </div>

  {/* Introducing Rizq */}
  <p style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-white text-xl mt-12">
    Introducing <span className="font-bold">Rizq</span>
  </p>

  {/* Title Section */}
  <h1 style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-white text-5xl font-light mt-6 z-10">
    The Freelancing <br /> platform for <br /> your community
  </h1>

  {/* Description Paragraph */}
  <div className="mt-10 flex flex-col items-center justify-center mb-30">
  <p
    style={{ fontFamily: 'DM Sans, sans-serif' , maxWidth: '20rem'}}
    className=" p-5 mb-5 text-white text-base font-light px-4 py-2 rounded-3xl z-20"
  >
    Connecting <span className="font-bold">you</span> to muslim   <span className="font-bold">freelancers</span> / <span className="font-bold">refugees</span> / <span className="font-bold">immigrants</span> / <span className="font-bold">handymen</span> inside your community, one gig at a time!
  </p>

  {/* Image Section */}

    <div className="relative w-80 h-80 mb-20">
      <img
        src="/l2.jpg"
        alt="Freelancing Image"
        className="w-full h-full rounded-3xl object-cover z-10"
      />
    </div>
  </div>

  </div>
  <div  className="mt-20 text-center bg-white text-black rounded-lg">
  <ContextSection/>
  <div className="mt-20 mb-20">
  <CardsSection/>
  </div>
  <div className="p-10">    
    <FAQAccordion/>
    </div>
    <Footer/>
  </div>

</SignedOut>
</div>
  );
}
