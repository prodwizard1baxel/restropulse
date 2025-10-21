/*
Restro Pulse - Full Version with Razorpay Policy Pages, Footer, and Lazy Loading
*/

import React, { useRef, lazy, Suspense } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import heroImage2 from "./assets/hero-image-2.png";
import aiGenerator from "./assets/ai-generator.png";
import instaScheduling from "./assets/insta-scheduling.png";
import whatsappAutomation from "./assets/whatsapp-automation.png";

// ✅ Lazy-loaded pages
const Login = lazy(() => import("./Login"));
const Register = lazy(() => import("./Register"));
const RefundPolicy = lazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const Terms = lazy(() => import("./pages/Terms"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const Contact = lazy(() => import("./pages/Contact"));
const Shipping = lazy(() => import("./pages/Shipping"));

// =============================== NAVBAR ===============================
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1
          onClick={() => scroll.scrollToTop()}
          className="text-2xl font-bold text-rose-600 cursor-pointer"
        >
          Restro Pulse
        </h1>
        <div className="hidden md:flex gap-6 text-slate-700 font-medium">
          <ScrollLink
            to="features"
            smooth={true}
            duration={600}
            className="hover:text-rose-600 cursor-pointer"
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="restaurants"
            smooth={true}
            duration={600}
            className="hover:text-rose-600 cursor-pointer"
          >
            Restaurants
          </ScrollLink>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={600}
            className="hover:text-rose-600 cursor-pointer"
          >
            Pricing
          </ScrollLink>
          <Link
            to="/login"
            onMouseEnter={() => import("./Login")} // Prefetch on hover
            className="px-4 py-2 bg-rose-600 text-white rounded-md hover:bg-rose-700 transition"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

// =============================== SAFE IMAGE ===============================
function SafeImage({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={(e) =>
        (e.target.src = "https://via.placeholder.com/600x400?text=Image+Missing")
      }
      className="rounded-xl w-full h-auto shadow-md"
    />
  );
}

// =============================== HERO ===============================
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50 pt-28"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-extrabold text-slate-900">
            Automate your social presence. Connect WhatsApp. Simplify Instagram.
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-xl">
            Restro Pulse helps restaurants grow with AI-driven social media automation — WhatsApp workflows, Instagram scheduling, and smart post generation.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              to="/login"
              className="px-5 py-3 bg-rose-600 text-white rounded-md shadow hover:bg-rose-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-5 py-3 border rounded-md hover:bg-rose-100"
            >
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

// =============================== FEATURES ===============================
function Features() {
  const features = [
    {
      id: 1,
      src: aiGenerator,
      title: "AI Post Generator",
      desc: "Create engaging posts, captions, and hashtags using advanced AI.",
    },
    {
      id: 2,
      src: instaScheduling,
      title: "Smart Scheduling Assistant",
      desc: "Suggests optimal posting times automatically.",
    },
    {
      id: 3,
      src: whatsappAutomation,
      title: "WhatsApp Marketing Automation",
      desc: "Send personalized promotions and auto-responses.",
    },
  ];

  return (
    <section id="features" className="py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
        Our Powerful Features
      </h2>
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

// =============================== RESTAURANTS ===============================
function Restaurants() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/7/7c/Starbucks_Coffee_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/6/6b/Dominos_pizza_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/1/12/McDonald%27s_Golden_Arches.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/2f/Subway_logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/Pizza_Hut_logo.svg",
  ];

  return (
    <section id="restaurants" className="py-20 bg-white text-center overflow-hidden">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-12">
        Restaurants Using Restro Pulse
      </h2>
      <motion.div
        className="flex gap-16 items-center justify-center whitespace-nowrap"
        animate={{ x: [0, -1200] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      >
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="Restaurant logo"
            className="h-20 opacity-80 hover:opacity-100 transition"
          />
        ))}
      </motion.div>
    </section>
  );
}

// =============================== CASE STUDIES ===============================
function CaseStudies() {
  const studies = [
    {
      title: "Domino’s Growth Story",
      desc: "Using Restro Pulse’s automation tools, Domino’s reduced manual posting time by 70% and saw a 35% increase in engagement.",
      image: "https://via.placeholder.com/600x400?text=Dominos+Case+Study",
    },
    {
      title: "Starbucks Personalized Marketing",
      desc: "Restro Pulse’s WhatsApp integration helped Starbucks improve customer retention and streamline promotional campaigns.",
      image: "https://via.placeholder.com/600x400?text=Starbucks+Case+Study",
    },
  ];

  return (
    <section id="case-studies" className="py-20 bg-slate-50 text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Case Studies</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto px-6">
        {studies.map((c, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow p-6"
          >
            <img src={c.image} alt={c.title} className="rounded-xl mb-4" />
            <h3 className="text-xl font-semibold text-rose-600 mb-2">{c.title}</h3>
            <p className="text-slate-600">{c.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// =============================== PRICING ===============================
function Pricing() {
  const plans = [
    {
      id: 1,
      title: "Starter",
      price: "$0",
      features: ["Basic automation", "5 posts/month", "Email support"],
    },
    {
      id: 2,
      title: "Pro",
      price: "$29/mo",
      features: ["Unlimited posts", "AI captioning", "Priority support"],
    },
    {
      id: 3,
      title: "Enterprise",
      price: "Custom",
      features: [
        "Team collaboration",
        "Custom setup",
        "Dedicated manager",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-extrabold text-slate-900 mb-8">
        Pricing Plans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {plans.map((p) => (
          <div
            key={p.id}
            className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-lg"
          >
            <h3 className="text-xl font-semibold text-rose-600 mb-2">
              {p.title}
            </h3>
            <p className="text-3xl font-bold mb-4">{p.price}</p>
            <ul className="text-slate-600 text-sm space-y-2 mb-6">
              {p.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <button className="bg-rose-600 text-white px-5 py-2 rounded-md hover:bg-rose-700">
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

// =============================== FOOTER ===============================
function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12 mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h2 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-300">
            Restro<span className="text-white">Pulse</span>
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xs">
            Automate your restaurant’s social media and WhatsApp marketing — grow with ease.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-slate-300 tracking-wide uppercase mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm text-slate-400">
            <li><a href="/refund-policy" className="hover:text-rose-400 transition">Refund Policy</a></li>
            <li><a href="/privacy-policy" className="hover:text-rose-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-rose-400 transition">Terms & Conditions</a></li>
            <li><a href="/shipping" className="hover:text-rose-400 transition">Shipping Policy</a></li>
            <li><a href="/affiliate" className="hover:text-rose-400 transition">Affiliate Program</a></li>
            <li><a href="/contact" className="hover:text-rose-400 transition">Contact Us</a></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} BAXEL TECHNOLOGIES PRIVATE LIMITED. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// =============================== MAIN APP ===============================
export default function App() {
  return (
    <Router>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center text-slate-600">
            Loading...
          </div>
        }
      >
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Features />
                <Restaurants />
                <CaseStudies />
                <Pricing />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/affiliate" element={<Affiliate />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
