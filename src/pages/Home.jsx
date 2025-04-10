import { useState } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import LiveExploration from '../components/LiveExploration';

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    // In a real app, you would also store the token in cookies/localStorage
  };

  const handleLogout = () => {
    setUser(null);
    // In a real app, you would also clear the token from cookies/localStorage
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} onLogout={handleLogout} />
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