import React from "react";
import Hero from "../sections/Hero"; // OPTIONAL if you split sections; otherwise inline hero content
// If you didn't split sections into other files, paste Home content directly here.

export default function Home() {
  return (
    <main>
      {/* If you didn't create a Hero component file, paste your Hero JSX here */}
      <section className="bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
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
          </div>

          <div>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl shadow-2xl overflow-hidden">
                <img src="/images/hero.jpg" alt="dashboard screenshot" className="w-full object-cover h-72 md:h-96" />
              </div>

              <div className="absolute -bottom-6 left-6 bg-white border rounded-xl p-4 shadow-lg w-72">
                <p className="text-xs uppercase text-slate-500">WhatsApp Automation</p>
                <p className="mt-1 text-sm font-medium text-slate-800">Auto-reply, order confirmations & customer segmentation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* keep the rest of your sections here or split further */}
    </main>
  );
}
