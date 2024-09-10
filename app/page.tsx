import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import Clients from "@/components/Clients";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={[
          { name: 'Home', link: '/' },
          { name: 'About', link: '#about', },
          { name: 'Testimonials', link: '#clients' },
          { name: 'Experience', link: '#experience' },
          { name: 'Contact', link: '#contact' },
        ]} />
        <Hero />
        <Grid />
        <Clients />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
