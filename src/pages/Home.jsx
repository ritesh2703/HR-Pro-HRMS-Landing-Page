import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import LiveExploration from '../components/LiveExploration';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features id="features" />
        <LiveExploration id="live-exploration" />
        <HowItWorks id="how-it-works" />
        <Testimonials id="testimonials" />
        <CTA id="cta" />
      </main>
      <Footer />
    </div>
  );
};

export default Home;