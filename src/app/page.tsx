import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Image from "next/image";
<<<<<<< HEAD
import { Hero, Navbar, Social, Footer, Globe, Projects, Tawk } from "../components"

export default function Home() {
  return (
    <div>
      <Navbar />
      <Tawk />
      <br />   <br />   <br />   <br />
      <Hero />
      <Projects />
      <Globe />
      <Social />
      <Footer />
    </div>
=======

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
      </div>
    </main>
>>>>>>> 1a457d1 (Hello)
  );
}
