"use client";
import { motion } from "framer-motion";
import "./footer-text-animation.css";

const GooeyLogo = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" className="flex-shrink-0">
    <defs>
      <filter id="gooey-effect">
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -7"
          result="gooey"
        />
        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
      </filter>
      <mask id="logo-mask">
        <g filter="url(#gooey-effect)">
          <rect x="0" y="0" width="200" height="200" fill="black" />
          {[...Array(5)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100}
              cy={100}
              r={80}
              fill="white"
              initial={{ rotate: (360 / 5) * i, scale: 0 }}
              whileInView={{ rotate: (360 / 5) * i + 180, scale: 1 }}
              transition={{
                delay: 0.5 + i * 0.1,
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                damping: 15,
              }}
              viewport={{ once: true }}
            />
          ))}
        </g>
      </mask>
    </defs>
    <image
      href="/lovable-uploads/740fe202-f907-4e64-aaad-79c67441b4ae.png"
      width="180"
      height="180"
      x="10"
      y="10"
      mask="url(#logo-mask)"
    />
  </svg>
);

export const Footer = () => {
  const links = {
    Roles: ["Supplier", "Liquidity Provider", "Verifier"],
    Resources: ["Docs", "Whitepaper", "GitHub"],
    Protocol: ["Governance", "Token", "Security"],
  } as const;

  return (
    <footer className="bg-gray-900 text-white pt-24 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900 to-transparent opacity-80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left md:space-x-12 mb-16">
          <GooeyLogo />
          <motion.p
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-space font-bold tracking-tighter mt-8 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="animated-footer-text">
              Built for Real-World Assets
            </span>
          </motion.p>
        </div>

        {/* <div className="border-t border-gray-700/50 pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {Object.entries(links).map(([title, items]) => (
              <div key={title}>
                <h4 className="font-semibold mb-4 font-space text-gray-300">
                  {title}
                </h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  {items.map((link) => (
                    <li key={link}>
                      <a href="#" className="hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </footer>
  );
};
