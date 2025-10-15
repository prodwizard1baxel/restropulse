/*
  Restro Pulse - Assets moved to /src/assets folder.
  Ensure your /src/assets folder contains these files:
    - ai-generator.png
    - insta-scheduling.png
    - whatsapp-automation.png
    - hero-image-2.png
*/


import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";


// Updated image imports from /assets folder
import aiGenerator from "./assets/ai-generator.png";
import instaScheduling from "./assets/insta-scheduling.png";
import whatsappAutomation from "./assets/whatsapp-automation.png";
import heroImage2 from "./assets/hero-image-2.png";

const Logo = () => (
  <div className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
    Restro<span className="text-slate-900">Pulse</span>
  </div>
);

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error:", error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center p-8">
          <div className="max-w-xl text-center bg-white p-8 rounded-2xl shadow">
            <h2 className="text-xl font-semibold">Something went wrong</h2>
            <p className="mt-2 text-sm text-slate-600">We logged the error to the console — please paste it here and I'll help debug.</p>
            <pre className="mt-4 text-xs text-left bg-slate-100 p-3 rounded">{String(this.state.error)}</pre>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-6">
            <Link to="/" aria-label="Restro Pulse home">
              <Logo />
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
              <a href="#features" className="hover:text-slate-900">Features</a>
              <a href="#automation" className="hover:text-slate-900">Automation</a>
              <a href="#ai-tools" className="hover:text-slate-900">AI Tools</a>
              <a href="#pricing" className="hover:text-slate-900">Pricing</a>
            </nav>
          </div>
          <div className="flex items-center gap-3">
            <div className="hidden md:flex gap-3">
              <Link to="/login" className="px-4 py-2 text-sm rounded-md">Login</Link>
              <Link to="/register" className="px-4 py-2 text-sm rounded-md bg-rose-500 text-white shadow-sm hover:brightness-95">Get Started</Link>
            </div>
            <button className="md:hidden p-2 rounded-md" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden py-4 border-t border-slate-100">
            <nav className="flex flex-col gap-3 text-sm">
              <a href="#features" onClick={() => setOpen(false)}>Features</a>
              <a href="#automation" onClick={() => setOpen(false)}>Automation</a>
              <a href="#ai-tools" onClick={() => setOpen(false)}>AI Tools</a>
              <a href="#pricing" onClick={() => setOpen(false)}>Pricing</a>
              <Link to="/login" onClick={() => setOpen(false)} className="pt-2">Login</Link>
              <Link to="/register" onClick={() => setOpen(false)} className="pt-2 text-rose-600">Get Started</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900">
            Automate your social presence. Connect WhatsApp. Simplify Instagram.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Restro Pulse helps restaurants grow with automated WhatsApp workflows and scheduled Instagram posts — all from a single dashboard.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#pricing" className="inline-flex items-center gap-2 px-5 py-3 bg-rose-600 text-white rounded-md shadow hover:bg-rose-700">Get Started Free</a>
            <a href="#" className="inline-flex items-center gap-2 px-5 py-3 border rounded-md">Book a demo</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={heroImage2} alt="Restro Pulse automation" className="rounded-2xl shadow-xl w-full h-auto" />
        </motion.div>
      </div>
    </section>
  );
}

function FeatureGallery() {
  const images = [
    { id: 1, src: aiGenerator, title: "AI Post Generator", desc: "Generate captions and hashtags instantly." },
    { id: 2, src: instaScheduling, title: "Instagram Scheduling", desc: "Schedule posts with AI-powered planning." },
    { id: 3, src: whatsappAutomation, title: "WhatsApp Automation", desc: "Create and publish posts via chatbot." }
  ];

  return (
    <section id="features" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-extrabold text-slate-900 mb-8"
        >
          Our Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-5 rounded-2xl shadow hover:shadow-lg transition"
            >
              <img src={img.src} alt={img.title} className="rounded-xl mb-4 w-full h-auto" />
              <h3 className="text-xl font-semibold text-rose-600">{img.title}</h3>
              <p className="text-slate-600 mt-2">{img.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <FeatureGallery />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-800">
        <Nav />
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </BrowserRouter>
  );
}
