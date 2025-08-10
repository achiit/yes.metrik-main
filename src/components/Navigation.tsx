"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { SpotlightButton } from "@/components/ui/spotlight-button";
import { ExpandableNav } from "./ExpandableNav";
import {
  Landmark,
  ArrowLeftRight,
  Sprout,
  Briefcase,
  Menu,
  X,
} from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";

export const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navTabs = [
    { title: "Supplier", icon: Landmark, type: "tab" as const },
    { title: "Liquidity", icon: ArrowLeftRight, type: "tab" as const },
    { title: "Verifier", icon: Sprout, type: "tab" as const },
    { title: "Docs", icon: Briefcase, type: "tab" as const },
  ];

  const mobileMenuVariants: Variants = {
    hidden: {
      opacity: 0,
      y: -20,
      height: 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      height: "auto",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
    },
  };

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl px-4">
      <div className="relative rounded-2xl border bg-white/70 p-1 shadow-lg backdrop-blur-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img
              src="/lovable-uploads/740fe202-f907-4e64-aaad-79c67441b4ae.png"
              alt="Metrik Logo"
              className="w-7 h-7"
            />
            <span className="text-2xl font-bold font-space bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 bg-clip-text text-transparent">
              METRIK
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-3">
            <ExpandableNav tabs={navTabs} />
            <div className="h-6 w-px bg-gray-200" />
            <SpotlightButton
              href="https://metrik-frontend-sooty.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Launch App (opens in a new tab)"
              className="scale-75 shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
            >
              Launch App
            </SpotlightButton>
          </div>

          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 p-4">
                {navTabs.map((tab) => (
                  <a
                    key={tab.title}
                    href="#"
                    className="flex items-center space-x-3 text-gray-700 hover:text-orange-600"
                  >
                    <tab.icon size={20} />
                    <span>{tab.title}</span>
                  </a>
                ))}
                <div className="border-t pt-4 flex flex-col space-y-3">
                  <SpotlightButton
                    href="https://metrik-frontend-sooty.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Launch App (opens in a new tab)"
                    className="w-full shadow-lg hover:shadow-orange-500/20 transition-all duration-300"
                  >
                    Launch App
                  </SpotlightButton>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
