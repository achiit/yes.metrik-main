"use client";
import NumberFlow from "@number-flow/react";
import React from "react";
import { Button } from "./ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const InteractiveRoleCard = () => {
  const [active, setActive] = React.useState(1);
  const [period, setPeriod] = React.useState(0);

  const plans = [
    { name: "Supplier", price: 0 },
    { name: "Liquidity Provider", price: 0 },
    { name: "Verifier", price: 0 },
  ];

  const handleChangePeriod = (index: number) => {
    setPeriod(index);
  };
  
  return (
    <div className="border-2 rounded-[32px] p-3 shadow-lg max-w-sm w-full flex flex-col items-center gap-3 bg-white/80 backdrop-blur-sm">
      {/* Toggle repurposed */}
      <div className="rounded-full relative w-full bg-slate-100 p-1.5 flex items-center">
        <button
          className="font-semibold rounded-full w-full p-1.5 text-slate-800 z-20 transition-colors"
          onClick={() => handleChangePeriod(0)}
        >
          Overview
        </button>
        <button
          className="font-semibold rounded-full w-full p-1.5 text-slate-800 z-20 transition-colors"
          onClick={() => handleChangePeriod(1)}
        >
          Docs
        </button>
        <div
          className="p-1.5 flex items-center justify-center absolute inset-0 w-1/2 z-10"
          style={{
            transform: `translateX(${period * 100}%)`,
            transition: "transform 0.3s ease-out",
          }}
        >
          <div className="bg-white shadow-md rounded-full w-full h-full"></div>
        </div>
      </div>

      {/* Role Selection */}
      <div className="w-full relative flex flex-col items-center justify-center gap-3">
        <div
            className={`w-full h-[88px] absolute top-0 border-[3px] border-orange-500 rounded-2xl transition-transform duration-300 ease-out`}
            style={{
              transform: `translateY(${active * (88 + 12)}px)`,
            }}
        ></div>

        {/* Supplier */}
        <div
            className="w-full flex justify-between cursor-pointer border-2 border-gray-200 p-4 rounded-2xl"
            onClick={() => setActive(0)}
        >
            <div className="flex flex-col items-start">
                <p className="font-semibold text-lg text-gray-900">Supplier</p>
                <p className="text-slate-500 text-sm">
                    <span className="text-black font-medium">$0.00</span>/role
                </p>
            </div>
             <div className="border-2 border-slate-300 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center">
                <div className={`size-3 ${active === 0 ? 'bg-orange-500' : 'bg-transparent'} rounded-full transition-colors`}></div>
            </div>
        </div>
        
        {/* Liquidity Provider */}
         <div
            className="w-full flex justify-between cursor-pointer border-2 border-gray-200 p-4 rounded-2xl"
            onClick={() => setActive(1)}
        >
            <div className="flex flex-col items-start">
                 <p className="font-semibold text-lg flex items-center gap-2 text-gray-900">
                    Liquidity Provider
                    <span className="py-0.5 px-2.5 block rounded-lg bg-amber-100 text-orange-700 text-xs font-medium">
                        Popular
                    </span>
                </p>
                <p className="text-slate-500 text-sm flex">
                    <span className="text-black font-medium flex items-center">
                        $0
                    </span>
                    /role
                </p>
            </div>
            <div className="border-2 border-slate-300 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center">
                <div className={`size-3 ${active === 1 ? 'bg-orange-500' : 'bg-transparent'} rounded-full transition-colors`}></div>
            </div>
        </div>

        {/* Verifier */}
         <div
            className="w-full flex justify-between cursor-pointer border-2 border-gray-200 p-4 rounded-2xl"
            onClick={() => setActive(2)}
        >
            <div className="flex flex-col items-start">
                <p className="font-semibold text-lg text-gray-900">Verifier</p>
                <p className="text-slate-500 text-sm flex">
                     <span className="text-black font-medium flex items-center">
                        $0
                    </span>
                    /role
                </p>
            </div>
            <div className="border-2 border-slate-300 size-6 rounded-full mt-0.5 p-1 flex items-center justify-center">
                <div className={`size-3 ${active === 2 ? 'bg-orange-500' : 'bg-transparent'} rounded-full transition-colors`}></div>
            </div>
        </div>

      </div>

      <Button className="rounded-full bg-orange-600 hover:bg-orange-700 text-lg text-white w-full p-3 active:scale-95 transition-transform duration-300">
        Get Started
      </Button>
    </div>
  );
};

export const PricingSection = () => {
    return (
        <section className="bg-slate-50 py-20 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 lg:gap-12 items-center">
                    {/* Left Column: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mb-12 lg:mb-0"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 font-space tracking-tight">
                            Get started by role
                        </h2>
                        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                            Role-based onboarding provides tailored dashboards and actions for Suppliers, Liquidity Providers, and Verifiers.
                        </p>
                         <div className="mt-8 space-y-4">
                            <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">Trustless smart contracts</span>
                            </div>
                             <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">Real-time analytics & risk</span>
                            </div>
                             <div className="flex items-center gap-3">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">Global participation</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Interactive Card */}
                    <motion.div
                         initial={{ opacity: 0, scale: 0.8 }}
                         whileInView={{ opacity: 1, scale: 1 }}
                         transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                         viewport={{ once: true }}
                         className="flex justify-center lg:justify-end"
                    >
                        <InteractiveRoleCard />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
