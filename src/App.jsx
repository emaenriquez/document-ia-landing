import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Workflow from './components/Workflow';
import Comparison from './components/Comparison';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 selection:bg-[#e8f6f4] selection:text-[#086b6d]">
      <main>
        <Hero />
        <Features />
        <Workflow />
        <Comparison />
        {/* Sección de precios comentada temporalmente a petición del usuario */}
        {/* <Pricing /> */}
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
