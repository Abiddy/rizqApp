'use client'
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  UserButton,
} from '@clerk/nextjs'
import './globals.css'
import { ConvexClientProvider } from "./ConvexClientProvider";
import '@fortawesome/fontawesome-free/css/all.min.css';
import LandingDock from "./components/LandingNav";
import Footer from "./components/Footer";



// export const metadata: Metadata = {
//   title: "Rizq",
//   description: "A muslim freelancing platform!",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.className}>
        <body>
          <LandingDock/>
        <SignedIn> 
          <div className="absolute top-11 right-6">
        <UserButton appearance={{
      elements: {
        userButtonAvatarBox: {
          width:  "40px",
          height: "40px",
        },
      },}} />
        </div>
      {/* <Navbar /> */}
      </SignedIn>
  
    <ConvexClientProvider>{children}</ConvexClientProvider>
<div className="z-100">
    <Footer/>
    </div>
   
        </body>
      </html>
    </ClerkProvider>
  )
}