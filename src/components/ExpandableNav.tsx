"use client";

import * as React from "react";
import { AnimatePresence, motion, Transition, Variants } from "framer-motion";
import { useOnClickOutside } from "usehooks-ts";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Tab {
  title: string;
  icon: LucideIcon;
  type?: "tab";
}

interface Separator {
  type: "separator";
  title?: never;
  icon?: never;
}

type TabItem = Tab | Separator;

interface ExpandableNavProps {
  tabs: TabItem[];
  className?: string;
  activeColor?: string;
  onChange?: (index: number | null) => void;
}

const buttonVariants: Variants = {
  initial: {
    gap: 0,
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
  animate: (isSelected: boolean) => ({
    gap: isSelected ? ".5rem" : 0,
    paddingLeft: isSelected ? "1.5rem" : "1rem",
    paddingRight: isSelected ? "1.5rem" : "1rem",
  }),
};

const spanVariants: Variants = {
  initial: { width: 0, opacity: 0 },
  animate: { width: "auto", opacity: 1 },
  exit: { width: 0, opacity: 0 },
};

const transition: Transition = { delay: 0.1, type: "spring", bounce: 0, duration: 0.6 };

export function ExpandableNav({
  tabs,
  className,
  activeColor = "text-purple-600",
  onChange,
}: ExpandableNavProps) {
  const [selected, setSelected] = React.useState<number | null>(null);
  const [hovered, setHovered] = React.useState<number | null>(null);
  const outsideClickRef = React.useRef(null);

  useOnClickOutside(outsideClickRef, () => {
    setSelected(null);
    onChange?.(null);
  });

  const handleSelect = (index: number) => {
    setSelected(index);
    onChange?.(index);
  };

  const Separator = () => (
    <div className="mx-1 h-[24px] w-[1.2px] bg-gray-200" aria-hidden="true" />
  );

  return (
    <div
      ref={outsideClickRef}
      className={cn(
        "flex flex-wrap items-center gap-2 rounded-2xl border bg-white/70 p-2 shadow-sm backdrop-blur-md",
        className
      )}
    >
      {tabs.map((tab, index) => {
        if (tab.type === "separator") {
          return <Separator key={`separator-${index}`} />;
        }

        const Icon = tab.icon;
        const isExpanded = hovered === index || selected === index;

        return (
          <motion.button
            key={tab.title}
            variants={buttonVariants}
            initial={false}
            animate="animate"
            custom={selected === index}
            onClick={() => handleSelect(index)}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            transition={transition}
            className={cn(
              "relative flex items-center rounded-xl py-2 text-lg font-medium transition-colors duration-300",
              selected === index
                ? cn("bg-white", activeColor)
                : "text-gray-600 hover:bg-white/50 hover:text-gray-900"
            )}
          >
            <Icon size={22} />
            <AnimatePresence initial={false}>
              {isExpanded && (
                <motion.span
                  variants={spanVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={transition}
                  className="overflow-hidden whitespace-nowrap"
                >
                  {tab.title}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        );
      })}
    </div>
  );
} 