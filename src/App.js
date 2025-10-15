/*
Restro Pulse - Added animated gradient background with parallax motion for Case Studies, Hero, and Pricing section
*/

import React, { useRef } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

import aiGenerator from "./assets/ai-generator.png";
import instaScheduling from "./assets/insta-scheduling.png";
import whatsappAutomation from "./assets/whatsapp-automation.png";
import heroImage2 from "./assets/hero-image-2.png";

const fallbackImage = "https://via.placeholder.com/600x400?text=Image+Not+Found";

const fadeDownVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AnimatedBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.6]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="absolute inset-0 bg-gradient-to-br from-rose-100 via-orange-100 to-yellow-100 animate-gradient-slow rounded-full blur-3xl"
    />
  );
};

const SafeImage = ({ src, alt, className }) => {
  const [loadedSrc, setLoadedSrc] = React.useState(src || fallbackImage);
  const [isFallback, setIsFallback] = React.useState(false);

  const handleError = () => {
    console.warn(`Image missing, using fallback: ${src}`);
    setIsFallback(true);
    setLoadedSrc(fallbackImage);
  };

  return (
    <motion.div className="relative group inline-block" variants={fadeDownVariant} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <motion.img
        key={loadedSrc}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        src={loadedSrc}
        alt={alt}
        className={`${className} ${isFallback ? 'opacity-80 grayscale' : ''}`}
        onError={handleError}
      />
      {isFallback && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Using fallback image
        </div>
      )}
    </motion.div>
  );
};

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.section ref={ref} variants={fadeDownVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div variants={fadeDownVariant}>
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
        <motion.img style={{ y }} src={heroImage2} alt="Restro Pulse automation" className="rounded-2xl shadow-xl w-full h-auto object-cover" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-rose-100/30 to-transparent pointer-events-none" />
    </motion.section>
  );
}

function CaseStudies() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const studies = [
    { id: 1, title: "How Cafe Aroma boosted sales by 40%", desc: "Automating Instagram posts and WhatsApp marketing increased engagement by 40% within two months." },
    { id: 2, title: "Burger Bliss doubled its online reach", desc: "Using Restro Pulse’s AI tools, Burger Bliss scheduled trending posts and grew followers by 2x." },
    { id: 3, title: "Tandoor Tales saved 10 hours/week", desc: "Social media automation freed up staff time for better customer service and creative campaigns." }
  ];

  return (
    <motion.section id="case-studies" variants={fadeDownVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative py-20 bg-white overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2 variants={fadeDownVariant} className="text-3xl font-extrabold text-slate-900 mb-8">
          Case Studies
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {studies.map((study) => (
            <motion.div key={study.id} style={{ y }} variants={fadeDownVariant} className="bg-slate-50 p-6 rounded-2xl shadow hover:shadow-md">
              <h3 className="text-xl font-semibold text-rose-600 mb-2">{study.title}</h3>
              <p className="text-slate-600">{study.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

function Pricing() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);

  const plans = [
    { id: 1, title: "Starter", price: "$0", features: ["Basic WhatsApp automation", "5 scheduled posts/month", "Email support"] },
    { id: 2, title: "Pro", price: "$29/mo", features: ["Unlimited scheduling", "AI caption generator", "Priority chat support"] },
    { id: 3, title: "Enterprise", price: "Custom", features: ["Team collaboration", "Custom integrations", "Dedicated account manager"] }
  ];

  return (
    <motion.section id="pricing" variants={fadeDownVariant} initial="hidden" whileInView="visible" viewport={{ once: true }} className="relative py-20 bg-slate-50 overflow-hidden">
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2 variants={fadeDownVariant} className="text-3xl font-extrabold text-slate-900 mb-8">
          Pricing Plans
        </motion.h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {plans.map((plan) => (
            <motion.div key={plan.id} style={{ y }} variants={fadeDownVariant} whileHover={{ scale: 1.03 }} className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold text-rose-600 mb-2">{plan.title}</h3>
              <p className="text-3xl font-bold text-slate-900 mb-4">{plan.price}</p>
              <ul className="text-slate-600 text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => <li key={i}>• {feature}</li>)}
              </ul>
              <a href="#" className="inline-block bg-rose-600 text-white px-5 py-2 rounded-md hover:bg-rose-700">Choose Plan</a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 overflow-x-hidden">
      <Hero />
      <CaseStudies />
      <Pricing />
    </div>
  );
}
