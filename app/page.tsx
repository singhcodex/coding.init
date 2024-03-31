import Image from "next/image";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto sm:p-5 xs:p-5">
        <Navbar />
        <Hero/>
      </div>
    </main>
  );
}
