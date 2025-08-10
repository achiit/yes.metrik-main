"use client";
import { ArrowRight, CheckCircle, TrendingUp } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export const CaseStudy = () => {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-semibold text-orange-600 uppercase tracking-wider">
              Case Study: DefiPulse
            </h2>
            <h3 className="mt-4 text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight font-space">
              Scaling for the Next Million Users
            </h3>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              DefiPulse, a leading decentralized exchange, partnered with Metrik to overhaul their infrastructure. The challenge was to eliminate high latency and scale throughput to handle explosive user growth without compromising security.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="text-gray-700"><span className="font-bold">40% Increase</span> in successful transactions during peak hours.</p>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="text-gray-700"><span className="font-bold">98% Reduction</span> in transaction latency, from 450ms to just 12ms.</p>
              </div>
               <div className="flex items-center gap-4">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                <p className="text-gray-700"><span className="font-bold">25x Throughput</span> increase, handling over 50,000 TPS.</p>
              </div>
            </div>
            <Button size="lg" className="mt-10 group">
              Read the full story
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>

          {/* Right Column: Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-2xl border border-slate-200/80 p-1"
          >
            <div className="bg-slate-100/70 rounded-t-xl px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-400"></span>
                    <span className="h-3 w-3 rounded-full bg-yellow-400"></span>
                    <span className="h-3 w-3 rounded-full bg-green-400"></span>
                </div>
                <p className="text-sm text-slate-500 font-mono">
                    defipulse-analytics.metrik
                </p>
                <div></div>
            </div>
            <div className="p-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm text-gray-500">Performance</p>
                        <p className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                            +2500%
                            <TrendingUp className="h-5 w-5 text-green-500" />
                        </p>
                    </div>
                     <p className="text-sm font-semibold text-green-600 bg-green-100 px-3 py-1 rounded-full">Excellent</p>
                </div>
                {/* Simplified graph */}
                <div className="mt-6 h-48 w-full">
                    <svg width="100%" height="100%" viewBox="0 0 300 150" preserveAspectRatio="none">
                        <path d="M 0 130 C 50 100, 100 50, 150 70 C 200 90, 250 20, 300 0" stroke="#F59E0B" strokeWidth="3" fill="none" vectorEffect="non-scaling-stroke"/>
                        <path d="M 0 130 C 50 100, 100 50, 150 70 C 200 90, 250 20, 300 0" stroke="url(#gradient)" strokeWidth="3" fill="url(#gradient-fill)" vectorEffect="non-scaling-stroke"/>
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#FDBA74" />
                                <stop offset="100%" stopColor="#F59E0B" />
                            </linearGradient>
                             <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#FDBA74" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
