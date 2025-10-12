/*
Restro Pulse - Complete single-file React + Tailwind landing (fixed build errors)
Place this file in a React app (Create React App / Vite / Next.js) with Tailwind configured.
Install dependencies: framer-motion, react-router-dom, lucide-react
  npm i framer-motion react-router-dom lucide-react

This file contains all components (no placeholders) and valid JSX.
*/

import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Logo = () => (
  <div className="font-extrabold text-2xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-orange-400">
    Restro<span className="text-slate-900">Pulse</span>
  </div>
);

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
              <a href="#integrations" className="hover:text-slate-900">Integrations</a>
              <a href="#casestudies" className="hover:text-slate-900">Case Studies</a>
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
              <a href="#integrations" onClick={() => setOpen(false)}>Integrations</a>
              <a href="#casestudies" onClick={() => setOpen(false)}>Case Studies</a>
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
    <section className="bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
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

          <div className="mt-8 text-sm text-slate-500">
            <span className="font-medium text-slate-700">Trusted by</span>
            <div className="mt-4 flex items-center gap-6">
              <div className="h-8 w-20 bg-slate-100 rounded flex items-center justify-center text-xs">Cafe</div>
              <div className="h-8 w-20 bg-slate-100 rounded flex items-center justify-center text-xs">Bistro</div>
              <div className="h-8 w-20 bg-slate-100 rounded flex items-center justify-center text-xs">Deli</div>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <div className="rounded-2xl shadow-2xl overflow-hidden">
              <img src="https://images.unsplash.com/photo-1541542684-7e7f7f2c9d86?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder" alt="dashboard screenshot" className="w-full object-cover h-72 md:h-96" />
            </div>

            <div className="absolute -bottom-6 left-6 bg-white border rounded-xl p-4 shadow-lg w-72">
              <p className="text-xs uppercase text-slate-500">WhatsApp Automation</p>
              <p className="mt-1 text-sm font-medium text-slate-800">Auto-reply, order confirmations & customer segmentation</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeatureCard({ title, desc, icon }) {
  return (
    <motion.div whileHover={{ y: -6 }} className="p-6 bg-white rounded-2xl shadow-sm border">
      <div className="flex items-start gap-4">
        <div className="h-12 w-12 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600">{icon}</div>
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          <p className="mt-2 text-sm text-slate-600">{desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function Features() {
  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-slate-900">Built for restaurants and hospitality</h2>
          <p className="mt-3 text-slate-600">From automated WhatsApp order flows to scheduled Instagram campaigns — manage everything with no-code workflows.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard title="WhatsApp Automation" desc="Auto-respond, segment customers and send order updates." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20l9-5-9-5-9 5 9 5z" /></svg>} />
          <FeatureCard title="Instagram Scheduling" desc="Plan posts and stories, auto-publish and get suggested captions." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a1 1 0 001 1h16a1 1 0 001-1V7" /></svg>} />
          <FeatureCard title="AI Post Generator" desc="Generate captions, hashtags and image suggestions in seconds." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>} />
          <FeatureCard title="Analytics Dashboard" desc="Measure campaign performance with simple restaurant-oriented metrics." icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18" /></svg>} />
        </div>
      </div>
    </section>
  );
}

function RestroPulseDo() {
  const points = [
    { title: "Save time for social media posts", desc: "Trending posts can be deployed in less than a minute." },
    { title: "Select trending videos", desc: "Pick from trending reels and automate your social media uploads effortlessly." },
    { title: "Create elegant and interactive social media", desc: "Design and schedule captivating posts that keep your audience engaged." }
  ];

  return (
    <section id="what-can-do" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-3xl font-extrabold text-slate-900">
          What can RestroPulse do for you?
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }} className="mt-3 text-slate-600 max-w-2xl mx-auto">
          Discover how RestroPulse helps you stay ahead in social media automation and content management.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((p, index) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.05, rotate: 1 }}
              className="p-8 border rounded-2xl shadow-sm bg-slate-50 hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold text-rose-600">{p.title}</h3>
              <p className="mt-3 text-slate-700">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integrations() {
  return (
    <section id="integrations" className="py-20 bg-slate-50 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-semibold">Seamless integrations</h3>
        <p className="mt-2 text-slate-600">Connect to WhatsApp Business, Instagram, Facebook and more — setup in minutes.</p>
      </div>
    </section>
  );
}

function CaseStudies() {
  return (
    <section id="casestudies" className="py-20 text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-semibold">Case Studies</h3>
        <p className="mt-2 text-slate-600">Real restaurants, real results.</p>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-slate-50 to-white text-center">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <h3 className="text-2xl font-semibold">Pricing</h3>
        <p className="mt-2 text-slate-600">Simple plans for every size — try free for 14 days.</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-10 text-center">
      <Logo />
      <p className="mt-3 text-sm text-slate-400">© {new Date().getFullYear()} Restro Pulse — All rights reserved.</p>
    </footer>
  );
}

function Login() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h3 className="text-xl font-semibold">Login</h3>
        <form className="mt-4 space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <input className="w-full p-3 border rounded" placeholder="Password" type="password" />
          <button className="w-full p-3 rounded bg-rose-600 text-white">Sign in</button>
        </form>
      </div>
    </div>
  );
}

function Register() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow">
        <h3 className="text-xl font-semibold">Create account</h3>
        <form className="mt-4 space-y-4">
          <input className="w-full p-3 border rounded" placeholder="Restaurant name" />
          <input className="w-full p-3 border rounded" placeholder="Email" />
          <input className="w-full p-3 border rounded" placeholder="Password" type="password" />
          <button className="w-full p-3 rounded bg-rose-600 text-white">Create account</button>
        </form>
      </div>
    </div>
  );
}

function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <RestroPulseDo />
      <Integrations />
      <CaseStudies />
      <Pricing />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white text-slate-800">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

