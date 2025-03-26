// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";

import CTA from "@/components/CTA";
import FeaturedMenu from "@/components/FeaturedMenu";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
// import Testimonials from "@/components/Testimonials";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <FeaturedMenu />
      {/* <Testimonials /> */}
      <CTA />
      <Footer />
    </main>
  );
}
