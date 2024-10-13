'use client';
import { SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';
import { HomePage } from './components/HomePage';
import ShimmerButton from '@/components/ui/shimmer-button';
import HyperText from '@/components/ui/hyper-text';
import AnimatedGridPattern from '@/components/ui/animated-grid-pattern';
import LandingCards from "./components/landingCards";


export default function Home() {
  return (
    <div>
              <style jsx>{`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');
        `}</style>
     
      <SignedIn>
      <HomePage/>
      </SignedIn>

 
      <SignedOut>
      <div className="relative h-[1800px] w-full overflow-hidden">
      <div 
       className=" flex flex-col justify-between text-center px-2 overflow-hidden">
  {/* <div className="flex items-center justify-between p-5 bg-transparent z-10">
    <img src="/rizqlogo2.png" alt="Rizq Logo" className="w-14 h-14" />
    <a 
  href="https://docs.google.com/forms/d/e/1FAIpQLSd3j9iVnasvMM6bLaFYsw5ypebcnyjZFbqqyXSzpn02Q3BAhQ/viewform?fbzx=1084646058636914488" 
  target="_blank" 
  rel="noopener noreferrer"
  className=""
>
<ShinyButton> Survey</ShinyButton>
</a>
  </div> */}

 
  <div className="max-w-20 items-center justify-center">
  </div>
  <div style={{ fontFamily: 'DM Sans, sans-serif' }} className="flex flex-col items-center justify-center text-black text-xl mt-12">
  {/* <ShinyButton className="text-white text-xs" >Public Beta</ShinyButton> */}
  <div>Introducing</div>
  <HyperText
    className="font-bold text-3xl text-black dark:text-white mt-2"
    text="Rizq"
  />
</div>


          <h1 style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-black text-5xl font-light mt-6 z-10">
        Honest, Reliable <br/><span className="text-blue-500"> Islamic </span> Freelancing
          </h1>

          <p className="text-gray-600 font-light px-8 pt-6">Find your online skills and become a <span className="text-blue-500 font-bold"> Rizq Seller </span> today!</p>

          <div className="flex justify-center py-6 mt-10">
              <SignInButton>
              <ShimmerButton className="shadow-2xl text-xl">
                  Get Started
                  </ShimmerButton>
              </SignInButton>
            </div>
            <div className="mt-20"></div>
            <h2 className="text-2xl font-light mt-30 mb-4 items-start px-10">
        We are bringing <span className="text-blue-500">islamic values </span> to <span className="text-blue-500">innovative tech</span>  to give you the best freelancing experience!
      </h2>

      <LandingCards/>

  </div>

  </div>
  <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className=
          "mask-image:radial-gradient(500px_circle_at_center,white,transparent) inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
      
      />
  <div  className="mt-20 text-center bg-white text-black rounded-lg">
  </div>

</SignedOut>
</div>
  );
}
