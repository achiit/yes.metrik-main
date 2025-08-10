import {
  BentoCard,
  BentoGrid,
} from "@/components/BentoGrid";
import {
  DollarSign,
  Zap,
  ShieldCheck,
  Clock,
} from "lucide-react";

const features = [
  {
    Icon: DollarSign,
    name: "Maximized Yields",
    description: "Earn up to 15% APY, far outpacing traditional savings.",
    href: "/",
    cta: "Learn More",
    background: <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-orange-50 to-transparent opacity-30"></div>,
    className: "lg:col-start-1 lg:col-end-2",
  },
  {
    Icon: Zap,
    name: "Instant Liquidity",
    description: "Access your funds instantly, with no lock-up periods.",
    href: "/",
    cta: "Learn More",
    background: <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-transparent opacity-30"></div>,
    className: "lg:col-start-2 lg:col-end-3",
  },
  {
    Icon: ShieldCheck,
    name: "Rock-Solid Security",
    description: "Your assets are protected by audited, battle-tested smart contracts.",
    href: "/",
    cta: "Learn More",
    background: <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-orange-50 to-transparent opacity-30"></div>,
    className: "lg:col-start-3 lg:col-end-4",
  },
  {
    Icon: Clock,
    name: "The Old Way",
    description: "Traditional banking offers minimal returns and slow, restrictive access to your own money.",
    href: "/",
    cta: "See the Difference",
    background: <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-amber-100 to-amber-200 opacity-40"></div>,
    className: "lg:col-start-1 lg:col-end-4",
  },
];

export const ComparisonGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
       <h2 className="text-4xl lg:text-5xl font-bold text-center mb-16 font-space bg-gradient-to-r from-gray-600 via-slate-500 to-gray-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
        A New Era of Finance
      </h2>
      <BentoGrid>
        {features.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </section>
  );
};
