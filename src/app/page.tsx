'use client';
import Image from "next/image";
import Navbar from '../ui/Navbar/Navbar';
import CardShow from "@/ui/CardShow/CardShow";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/hero.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to StudyLinks</h1>
          <p className="text-2xl mt-4">Discover notes, free resources and study</p>
        </div>
      </section>
      
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center gap-2 m-10 w-full min-h-screen">
        <h1 className="m-1 text-4xl font-bold text-white">Get Started</h1>
        <p className="text-xl text-white font-semibold mt">Find notes for everyone</p>
        <div className="flex lg:flex-row flex-wrap p-10 items-center justify-center gap-10">
          <Link href="/cse" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Computer Science and Engineering" />
          </Link>
          <Link href="/ece" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Electronics and Communication Engineering" />
          </Link>
          <Link href="/mech" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Mechanical Engineering" />
          </Link>
          <Link href="/civil" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Civil Engineering" />
          </Link>
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Electrical Engineering" />
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Chemical Engineering" />
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Aeronautical Engineering" />
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Biotechnology Engineering" />

        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 m-10 w-full " id="about">
        <h1 className="m-1 text-4xl font-bold text-white">About Us</h1>
        <p className="text-xl text-white font-semibold">We are a team of developers</p>
        <div className="flex lg:flex-row flex-col flex-wrap items-center justify-center gap-10">
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Vaibhav Talkhande" description="Full Stack Developer"/>
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Umesh Mate" description="UX Designer" />
          <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[20rem] align-middle content-center" title="Vaishnavi Pokale" description="HR Manager" /> 
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-2 m-10 w-full max-h-screen" id="contact">
        <h1 className="m-1 text-4xl font-bold text-white">Contact Us</h1>
        <p className="text-xl text-white font-semibold">Send us an email</p>
        <div className="flex lg:flex-row flex-col flex-wrap items-center justify-center gap-10 bg-gray-900">
          <form className="flex flex-col items-center justify-center gap-2 bg-gray-900">
            <input type="text" placeholder="Name" className="p-2 w-[25rem] border border-gray-400 rounded-md" />
            <input type="email" placeholder="Email" className="p-2 w-[25rem] border border-gray-400 rounded-md" />
            <textarea placeholder="Message" className="p-2 w-[25rem] border border-gray-400 rounded-md" />
            <button className="p-2 w-[25rem] bg-cyan-500 text-white font-semibold rounded-md">Submit</button>
          </form>
        </div>
      </section>
    </main>
  );
}
