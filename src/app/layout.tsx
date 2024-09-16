import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
} from '@clerk/nextjs'
import './globals.css'
import Navbar from "./components/Navbar";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
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
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}