import CallToAction from "@/components/landing page/CallToAction";
import Features from "@/components/landing page/Features";
import Footer from "@/components/landing page/Footer";
import Hero from "@/components/landing page/Hero";
import Navbar from "@/components/landing page/Navbar";
import Testimonial from "@/components/landing page/Testimonial";
import Wellcome from "@/components/landing page/Wellcome";

export default function Home() {
  return (
    <div className="w-full h-screen  bg-slate-100">
      <Navbar />
      {/* <Hero />
      <Wellcome />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer /> */}
    </div>
  );
}
