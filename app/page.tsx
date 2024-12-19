import Hero from "@/components/landing page/Hero";
import Navbar from "@/components/landing page/Navbar";
import Wellcome from "@/components/landing page/Wellcome";

export default function Home() {
  return (
    <div className="w-full h-screen  bg-slate-100">
      <Navbar />
      <Hero />
      <Wellcome />
    </div>
  );
}
