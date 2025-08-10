"use client";
import { useState, useEffect } from "react";
import { HandWrittenTitle } from "./HandWrittenTitle";
import "./testimonials.css";
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "Metrik brings unprecedented transparency to invoice financing. Our treasury enjoys predictable, risk-scored yield.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2488&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Briana Patton",
    role: "Liquidity Provider",
  },
  {
    text: "Tokenizing our invoices cut our cash conversion cycle dramatically, without adding counterparty risk.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Bilal Ahmed",
    role: "Supplier",
  },
  {
    text: "On-chain verification with reputation aligns incentives. It’s a step-change in trust for RWA markets.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Saman Malik",
    role: "Verifier",
  },
  {
    text: "The analytics dashboard gives us live performance and risk. It’s become a core part of our allocation process.",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Omar Raza",
    role: "Fund Manager",
  },
  {
    text: "We earn rewards for accurate verification and lose reputation if we’re sloppy. The incentives finally make sense.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Zainab Hussain",
    role: "Verifier",
  },
  {
    text: "Global access and trustless settlement let us fund invoices from anywhere, without intermediaries.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Aliza Khan",
    role: "Liquidity Provider",
  },
  {
    text: "Switching to Metrik improved our working capital while keeping customers on standard payment terms.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Farhan Siddiqui",
    role: "Supplier",
  },
  {
    text: "Clear role separation and reputation remove ambiguity. We can trust the data we fund against.",
    image: "https://images.unsplash.com/photo-1601412436009-d96440277a3b?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Sana Sheikh",
    role: "Institutional LP",
  },
  {
    text: "The protocol’s transparency and automation reduce operational risk while improving returns.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Hassan Ali",
    role: "Asset Manager",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export const Testimonials = () => {
  return (
    <section className="bg-white py-20 relative">
      <div className="container z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[540px] mx-auto"
        >
          <div className="flex justify-center">
            <div className="border py-1 px-4 rounded-lg">From Our Ecosystem</div>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter mt-5 text-center">
            What users and partners say
          </h2>
          <p className="text-center mt-5 opacity-75">
            Real-world experiences from Suppliers, Liquidity Providers, and Verifiers.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </div>
    </section>
  );
};
