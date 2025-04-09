import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Blog from './pages/Blog';
import AboutFaq from './pages/AboutFaq';
import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about-faq" element={<AboutFaq />} />
        <Route path="/signin" element={<SignIn />} />
        {/* Add this catch-all route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;