'use client';
import Image from "next/image";
import Navbar from '../ui/Navbar/Navbar';
import CardShow from "@/ui/CardShow/CardShow";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url("/public/hero.jpg")' }}>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold">Welcome to Our Platform</h1>
          <p className="text-2xl mt-4">Discover notes, contact us, and read our blog</p>
        </div>
      </section>
      
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center gap-2 m-10 w-full h-full">
        <h1 className="m-1 text-4xl font-bold text-white">Get Started</h1>
        <p className="text-xl text-white font-semibold">Find notes for everyone</p>
        <div className="flex lg:flex-row flex-wrap items-center justify-center gap-10">
          <Link href="/cse" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle content-center" title="Computer Science and Engineering" />
          </Link>
          <Link href="/ece" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle content-center" title="Electronics and Communication Engineering" />
          </Link>
          <Link href="/mech" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle content-center" title="Mechanical Engineering" />
          </Link>
          <Link href="/civil" passHref>
            <CardShow classname="hover:scale-[1.05] border-none hover:bg-cyan-500 transition-all w-[25rem] h-[25rem] align-middle content-center" title="Civil Engineering" />
          </Link>
        </div>
      </section>
    </main>
  );
}
