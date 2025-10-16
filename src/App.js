/*
Restro Pulse - Added Top Navigation with Smooth Scroll and Login button
*/

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import heroImage2 from "./assets/hero-image-2.png";
import aiGenerator from "./assets/ai-generator.png";
import instaScheduling from "./assets/insta-scheduling.png";
import whatsappAutomation from "./assets/whatsapp-automation.png";

const fadeDownVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 onClick={() => scroll.scrollToTop()} className="text-2xl font-bold text-rose-600 cursor-pointer">
          Restro Pulse
        </h1>
        <div className="hidden md:flex gap-6 text-slate-700 font-medium">
          <ScrollLink to="features" smooth={true} duration={600} className="hover:text-rose-600 cursor-pointer">
            Features
          </ScrollLink>
          <ScrollLink to="pricing" smooth={true} duration={600} className="hover:text-rose-600 cursor-pointer">
            Pricing
          </ScrollLink>
          <Link to="/login" className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

function SafeImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => (e.target.src = "https://via.placeholder.com/600x400?text=Image+Missing")}
      className="rounded-xl w-full h-auto shadow-md"
    />
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50 pt-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-slate-900">
            Automate your social presence. Connect WhatsApp. Simplify Instagram.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Restro Pulse helps restaurants grow with AI-driven social media automation — WhatsApp workflows, Instagram scheduling, and smart post generation.
          </p>
          <div className="mt-8 flex gap-3">
            <Link to="/login" className="px-5 py-3 bg-rose-600 text-white rounded-md shadow hover:bg-rose-700">
              Login
            </Link>
            <Link to="/register" className="px-5 py-3 border rounded-md hover:bg-rose-100">
              Register
            </Link>
          </div>
        </div>
        <motion.div style={{ y }}>
          <SafeImage src={heroImage2} alt="Restro Pulse automation" />
        </motion.div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { id: 1, src: aiGenerator, title: "AI Post Generator", desc: "Create engaging posts, captions, and hashtags using advanced AI." },
    { id: 2, src: instaScheduling, title: "Smart Scheduling Assistant", desc: "Suggests optimal posting times automatically." },
    { id: 3, src: whatsappAutomation, title: "WhatsApp Marketing Automation", desc: "Send personalized promotions and auto-responses." },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Our Powerful Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {features.map((f) => (
          <div key={f.id} className="bg-white rounded-2xl shadow hover:shadow-lg p-6">
            <SafeImage src={f.src} alt={f.title} />
            <h3 className="mt-4 text-xl font-semibold text-rose-600">{f.title}</h3>
            <p className="mt-2 text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    { id: 1, title: "Starter", price: "$0", features: ["Basic automation", "5 posts/month", "Email support"] },
    { id: 2, title: "Pro", price: "$29/mo", features: ["Unlimited posts", "AI captioning", "Priority support"] },
    { id: 3, title: "Enterprise", price: "Custom", features: ["Team collaboration", "Custom setup", "Dedicated manager"] },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {plans.map((p) => (
          <div key={p.id} className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-rose-600 mb-2">{p.title}</h3>
            <p className="text-3xl font-bold mb-4">{p.price}</p>
            <ul className="text-slate-600 text-sm space-y-2 mb-6">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className="bg-rose-600 text-white px-5 py-2 rounded-md hover:bg-rose-700">Choose Plan</button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-rose-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Login to Restro Pulse</h2>
        <form className="space-y-5">
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
          <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded-md" />
          <button type="submit" className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700">Login</button>
        </form>
        <p className="text-center text-sm text-slate-600 mt-4">
          No account? <Link to="/register" className="text-rose-600">Register</Link>
        </p>
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-yellow-50 to-rose-100 p-6">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-rose-600 mb-6">Create Your Account</h2>
        <form className="space-y-5">
          <input type="text" placeholder="Full Name" className="w-full border px-4 py-2 rounded-md" />
          <input type="email" placeholder="Email" className="w-full border px-4 py-2 rounded-md" />
          <input type="password" placeholder="Password" className="w-full border px-4 py-2 rounded-md" />
          <button type="submit" className="w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700">Register</button>
        </form>
        <p className="text-center text-sm text-slate-600 mt-4">
          Already have an account? <Link to="/login" className="text-rose-600">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><Features /><Pricing /></>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}
