import Footer from "@/components/footer";
import CallToAction from "@/components/jan2025/call-to-action";
import Countdown from "@/components/jan2025/countdown";
import Hero from "@/components/jan2025/hero";
import Nav from "@/components/jan2025/nav";
import Performers from "@/components/jan2025/performers";
import Sponsors from "@/components/jan2025/sponsors";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <CallToAction />
      <Countdown />
      <Performers />
      <CallToAction />
      <Sponsors />
      <Footer />
    </>
  );
}
