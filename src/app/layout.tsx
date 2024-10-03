import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
} from '@clerk/nextjs'
import './globals.css'
import Navbar from "./components/Navbar";
import { ConvexClientProvider } from "./ConvexClientProvider";
import '@fortawesome/fontawesome-free/css/all.min.css';



export const metadata: Metadata = {
  title: "Rizq",
  description: "A muslim freelancing platform!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={GeistSans.className}>
        <body>
        <SignedIn> 
      <Navbar />
      </SignedIn>
  
    <ConvexClientProvider>{children}</ConvexClientProvider>
   
        </body>
      </html>
    </ClerkProvider>
  )
}