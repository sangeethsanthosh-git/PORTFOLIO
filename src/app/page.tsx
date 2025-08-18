"use client";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
//import Menu from "@/components/Menu";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
//import UpcomingProjects from "@/components/UpcomingProjects";
import Work from "@/components/Work";
import Footer from "@/components/Footer";
import Project from "@/components/Project";
import Service from "@/components/Services";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection"; // Assuming you already have this

export default function Home() {
  useEffect(() => {
    // Scroll to top when page loads or refreshes
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Navbar />
      <HeroSection />
      <About />
      <Education />
      <Skills />
      <Project />
      <Work />
      {/* <UpcomingProjects /> */}
      {/* <Service /> */}
      <Service />
      {/* <Menu /> */}
      {/* Uncomment if you have a Menu component */}
      <Experience />
      {/* Uncomment if you have an Experience component */}
      
      {/* Footer should be the last component */}
      <Footer />
    </> // add other sections
  );
}
