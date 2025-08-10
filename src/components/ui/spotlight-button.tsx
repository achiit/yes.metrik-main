'use client';

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface SpotlightButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  href,
  children,
  className = '',
  target,
  rel,
  'aria-label': ariaLabel,
}) => {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const spotlightRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const spotlight = spotlightRef.current;

    if (!button || !spotlight) return;

    const handleMouseMove = (evt: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const movX = evt.clientX - rect.x;
      
      gsap.to(spotlight, {
        x: movX,
        scale: 30,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    const handleMouseLeave = (evt: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const movX = evt.clientX - rect.x;
      
      gsap.to(spotlight, {
        x: movX,
        scale: 0,
        duration: 0.3,
        ease: 'power2.out'
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <a
      ref={buttonRef}
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel}
      className={`spotlight-button relative inline-flex items-center justify-center p-0.5 rounded-[23.5px] overflow-hidden text-decoration-none bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 ${className}`}
    >
      <span
        ref={spotlightRef}
        className="spotlight-effect absolute z-10 h-2.5 w-2.5 opacity-100 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 inset-0 top-1/2 transform scale-0"
      />
      <span className="spotlight-wrapper relative flex items-center justify-center w-fit h-16 rounded-[22.5px] bg-gray-900 px-16 group">
        <span className="spotlight-text relative z-20 font-sans font-bold text-xl text-white transition-colors duration-300 group-hover:text-gray-900">
          {children}
        </span>
      </span>
    </a>
  );
};