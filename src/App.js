/*
Restro Pulse - Added scroll-triggered fade-in effects for 'Our Powerful Features' section
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

function Features() {
  const features = [
    { id: 1, src: aiGenerator, title: "AI Post Generator", desc: "Save time creating social posts with AI-generated content and captions." },
    { id: 2, src: instaScheduling, title: "Instagram Scheduling", desc: "Automatically schedule your trending posts and maximize engagement." },
    { id: 3, src: whatsappAutomation, title: "WhatsApp Automation", desc: "Connect WhatsApp and send automated responses and promotions instantly." }
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

export default Features;
