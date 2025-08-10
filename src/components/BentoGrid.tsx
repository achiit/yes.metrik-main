import { ReactNode, useEffect, useRef } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import "./BentoGrid.css";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className="relative w-full">
      <div className="absolute inset-0 overflow-hidden bg-white">
        <div className="aurora-bg"></div>
      </div>
      <div
        className={cn(
          "relative grid w-full auto-rows-[18rem] sm:auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon: LucideIcon;
  description: string;
  href: string;
  cta: string;
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();

      ref.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      ref.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      key={name}
      className={cn(
        "group relative flex flex-col justify-between overflow-hidden rounded-2xl",
        "bg-white/40 dark:bg-black/40 backdrop-blur-md [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "transform-gpu border border-white/20",
        "hover:border-white/40 transition-colors duration-300",
        className
      )}
    >
      {/* Shine Effect */}
      <div className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: 'radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 0.1), transparent 40%)'
        }}
      />
      <div className="absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
        {background}
      </div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-4 sm:p-6 transition-all duration-300">
        <Icon className="h-10 w-10 sm:h-12 sm:w-12 origin-left transform-gpu text-neutral-700 transition-all duration-300 ease-in-out group-hover:scale-90" />
        <h3 className="text-lg sm:text-xl font-semibold text-neutral-800">{name}</h3>
        <p className="max-w-lg text-sm sm:text-base text-neutral-600">{description}</p>
      </div>

      <div
        className={cn(
          "flex w-full flex-row items-center p-4 sm:p-4 transition-all duration-300"
        )}
      >
        <Button
          variant="ghost"
          asChild
          size="sm"
          className="pointer-events-auto bg-white/80 backdrop-blur-sm rounded-lg"
        >
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[.05]" />
    </div>
  );
}

export { BentoCard, BentoGrid }; 