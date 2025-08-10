"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import {
  FileText,
  Banknote,
  ShieldCheck,
  LucideIcon,
  CheckCircle,
} from "lucide-react";
import { Button } from "./ui/button";
import { useMediaQuery } from "usehooks-ts";

const MarketingFeatureCard = ({
    marketing,
    index
}: {
    marketing: { title: string; points: string[], image: string };
    index: number;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: cardRef,
        offset: ["start 80%", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

    return (
        <motion.div
            ref={cardRef}
            className="w-full h-full bg-white rounded-3xl p-8 lg:p-12 flex flex-col justify-center text-gray-800 relative overflow-hidden border shadow-sm"
        >
            <motion.div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${marketing.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: imageY
                }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />
            <div className="relative z-20 mt-auto">
                <h3 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 font-space">{marketing.title}</h3>
                <ul className="space-y-4">
                    {marketing.points.map((point, i) => (
                        <li key={i} className="flex items-start text-lg">
                            <CheckCircle className="h-6 w-6 text-orange-500 mr-4 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const products: {
  Icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  marketing: {
    title: string;
    points: string[];
    image: string;
  };
}[] = [
  {
    Icon: FileText,
    title: "Supplier",
    description:
      "Upload invoice data and tokenize it into tradeable on-chain assets. Access instant liquidity without waiting for traditional payment terms.",
    features: ["Tokenize invoices", "Instant liquidity", "Real-time repayment tracking"],
    marketing: {
        title: "Create & Sell Tokenized Invoices",
        points: [
            "Turn receivables into on-chain assets in minutes.",
            "Improve cash flow with immediate access to funds.",
            "Track repayments and provenance transparently.",
        ],
        image: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=2832&auto=format&fit=crop"
    }
  },
  {
    Icon: Banknote,
    title: "Liquidity Provider",
    description:
      "Commit funds to pools of tokenized invoices and earn interest and fees from financed invoices with transparent performance data.",
    features: ["Diversified pools", "Attractive yields", "Historical risk metrics"],
    marketing: {
        title: "Fund Invoices & Earn Yield",
        points: [
            "Provide capital to curated invoice pools.",
            "Earn interest and fees proportional to participation.",
            "Assess risk via reputation and performance analytics.",
        ],
        image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2940&auto=format&fit=crop"
    }
  },
  {
    Icon: ShieldCheck,
    title: "Verifier",
    description:
      "Independently validate invoice authenticity and payment terms. Maintain an on-chain reputation and earn rewards for accurate verification.",
    features: ["Independent validation", "On-chain reputation", "Rewards for accuracy"],
    marketing: {
        title: "Ensure Trust & Compliance",
        points: [
            "Stake reputation to verify authenticity and terms.",
            "Earn rewards for timely, accurate verification.",
            "Strengthen market integrity and reduce fraud.",
        ],
        image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=2940&auto=format&fit=crop"
    }
  },
];

const DesktopLayout = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 40%", "end end"],
  });

  return (
    <div className="grid md:grid-cols-2 gap-16 items-start">
      <div className="md:sticky top-24">
        <div className="relative h-[80vh] min-h-[700px] bg-white/60 backdrop-blur-xl border border-slate-200/80 rounded-3xl shadow-lg overflow-hidden">
          {products.map((product, i) => {
            const n = products.length;
            const start = i / n;
            const end = (i + 0.95) / n;
            const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
            const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [30, 0, 0, -30]);

            return (
              <motion.div
                key={i}
                className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12"
                style={{ opacity, y }}
              >
                <product.Icon className="h-12 w-12 text-orange-600 mb-8" />
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 font-space">{product.title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-inter mb-6">{product.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {product.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700">Learn More</Button>
                  <Button size="lg" variant="outline">Get Started</Button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div ref={scrollRef} className="space-y-12">
        {products.map((product, i) => (
          <div key={i} className="h-[80vh] min-h-[700px] flex items-center justify-center">
            <div className="w-full h-[85%]">
                <MarketingFeatureCard marketing={product.marketing} index={i} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileLayout = () => (
  <div className="space-y-16">
    {products.map((product, i) => (
      <div key={i} className="space-y-8 bg-white/60 backdrop-blur-xl border p-6 rounded-3xl">
        {/* Text content card */}
        <div >
            <product.Icon className="h-10 w-10 text-orange-600 mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4 font-space">{product.title}</h2>
            <p className="text-base text-gray-600 leading-relaxed font-inter mb-6">{product.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {product.features.map(feature => (
                    <div key={feature} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                ))}
            </div>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="bg-orange-600 hover:bg-orange-700 w-full sm:w-auto">Learn More</Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">Get Started</Button>
            </div>
        </div>
        
        {/* Marketing feature card */}
        <div className="h-[70vh] min-h-[500px] flex items-center justify-center relative">
          <div className="w-full h-full rounded-2xl overflow-hidden shadow-xl">
            <MarketingFeatureCard marketing={product.marketing} index={i} />
          </div>
        </div>
      </div>
    ))}
  </div>
);

export const ProductOfferings = () => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="py-24 bg-slate-50 relative">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 font-space tracking-tight">
                Role-Based Onboarding
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Tailored dashboards and actions for Suppliers, Liquidity Providers, and Verifiers.
            </p>
        </div>
        {isDesktop ? <DesktopLayout /> : <MobileLayout />}
      </div>
    </section>
  );
};
