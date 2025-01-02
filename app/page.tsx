import {
  Navbar,
  Hero,
  Wellcome,
  Features,
  Testimonial,
  CallToAction,
  Footer,
} from "@/components/landing page";

export default function Home() {
  return (
    <div className="w-full h-screen  bg-slate-100">
      <Navbar />
      <Hero />
      
      <Wellcome />
      <Features />
      <Testimonial />
      <CallToAction />
      <Footer />
    </div>
  );
}
