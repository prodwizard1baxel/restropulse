/*
Restro Pulse - Includes Hero, Features, and Pricing sections with scroll-triggered animations
*/

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import aiGenerator from "./assets/ai-generator.png";
import instaScheduling from "./assets/insta-scheduling.png";
import whatsappAutomation from "./assets/whatsapp-automation.png";
import heroImage2 from "./assets/hero-image-2.png";

const fadeDownVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

function SafeImage({ src, alt }) {
  return (
    <motion.img
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      src={src}
      alt={alt}
      className="rounded-xl w-full h-auto shadow-md"
    />
  );
}

function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <motion.section
      ref={ref}
      variants={fadeDownVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden bg-gradient-to-b from-white to-rose-50"
    >
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
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 px-5 py-3 bg-rose-600 text-white rounded-md shadow hover:bg-rose-700"
            >
              Get Started Free
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 px-5 py-3 border rounded-md"
            >
              Explore Features
            </a>
          </div>
        </motion.div>
        <motion.img
          style={{ y }}
          src={heroImage2}
          alt="Restro Pulse automation"
          className="rounded-2xl shadow-xl w-full h-auto object-cover"
        />
      </div>
    </motion.section>
  );
}

function Features() {
  const features = [
    {
      id: 1,
      src: aiGenerator,
      title: "AI Post Generator",
      desc: "Save time creating social posts with AI-generated content and captions.",
    },
    {
      id: 2,
      src: instaScheduling,
      title: "Instagram Scheduling",
      desc: "Automatically schedule your trending posts and maximize engagement.",
    },
    {
      id: 3,
      src: whatsappAutomation,
      title: "WhatsApp Automation",
      desc: "Connect WhatsApp and send automated responses and promotions instantly.",
    },
  ];

  return (
    <motion.section
      id="features"
      initial="hidden"
      whileInView="visible"
      variants={fadeDownVariant}
      viewport={{ once: true, amount: 0.2 }}
      className="relative py-20 bg-slate-50 overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          variants={fadeDownVariant}
          className="text-3xl font-extrabold text-slate-900 mb-8"
        >
          Our Powerful Features
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              variants={fadeDownVariant}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow hover:shadow-xl p-6"
            >
              <SafeImage src={feature.src} alt={feature.title} />
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.6 }}
                className="mt-4 text-xl font-semibold text-rose-600"
              >
                {feature.title}
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 * index, duration: 0.6 }}
                className="mt-2 text-slate-600"
              >
                {feature.desc}
              </motion.p>
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
    {
      id: 1,
      title: "Starter",
      price: "$0",
      features: [
        "Basic WhatsApp automation",
        "5 scheduled posts/month",
        "Email support",
      ],
    },
    {
      id: 2,
      title: "Pro",
      price: "$29/mo",
      features: [
        "Unlimited scheduling",
        "AI caption generator",
        "Priority chat support",
      ],
    },
    {
      id: 3,
      title: "Enterprise",
      price: "Custom",
      features: [
        "Team collaboration",
        "Custom integrations",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <motion.section
      id="pricing"
      variants={fadeDownVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative py-20 bg-white overflow-hidden"
    >
      <AnimatedBackground />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <motion.h2
          variants={fadeDownVariant}
          className="text-3xl font-extrabold text-slate-900 mb-8"
        >
          Pricing Plans
        </motion.h2>
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              style={{ y }}
              variants={fadeDownVariant}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="bg-slate-50 p-8 rounded-2xl shadow hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-rose-600 mb-2">
                {plan.title}
              </h3>
              <p className="text-3xl font-bold text-slate-900 mb-4">
                {plan.price}
              </p>
              <ul className="text-slate-600 text-sm space-y-2 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i}>• {feature}</li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-block bg-rose-600 text-white px-5 py-2 rounded-md hover:bg-rose-700"
              >
                Choose Plan
              </a>
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
      <Features />
      <Pricing />
    </div>
  );
}
