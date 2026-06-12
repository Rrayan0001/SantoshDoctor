"use client";

import { useEffect, useRef, useState } from "react";
import { CountUp } from "countup.js";
import { Stethoscope, Heart, Baby, Star, LucideIcon } from "lucide-react";

interface StatItemProps {
  number: number;
  suffix: string;
  label: string;
  icon: LucideIcon;
  decimals?: number;
}

function StatCounterItem({ number, suffix, label, icon: Icon, decimals = 0 }: StatItemProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const countSpanRef = useRef<HTMLSpanElement>(null);
  const [inView, setInView] = useState(false);
  const countUpInstance = useRef<CountUp | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (inView && countSpanRef.current) {
      countUpInstance.current = new CountUp(countSpanRef.current, number, {
        startVal: 0,
        duration: 2.2,
        decimalPlaces: decimals,
        useEasing: true,
        useGrouping: true,
      });

      if (!countUpInstance.current.error) {
        countUpInstance.current.start();
      } else {
        console.error(countUpInstance.current.error);
      }
    }
  }, [inView, number, decimals]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:scale-[1.03]"
    >
      {/* Icon */}
      <div className="w-12 h-12 bg-primary-muted rounded-full flex items-center justify-center text-primary mb-4 border border-primary-light/10">
        <Icon className="w-5 h-5" />
      </div>

      {/* Number */}
      <div className="font-display text-4xl sm:text-5xl font-bold text-primary mb-2 flex items-center justify-center">
        <span ref={countSpanRef}>0</span>
        <span>{suffix}</span>
      </div>

      {/* Label */}
      <p className="font-sans text-sm font-semibold text-text-mid tracking-wide">
        {label}
      </p>
    </div>
  );
}

export default function StatsCounter() {
  const statsList = [
    {
      number: 15,
      suffix: "+",
      label: "Years Experience",
      icon: Stethoscope,
      decimals: 0,
    },
    {
      number: 10000,
      suffix: "+",
      label: "Patients Treated",
      icon: Heart,
      decimals: 0,
    },
    {
      number: 5000,
      suffix: "+",
      label: "Successful Deliveries",
      icon: Baby,
      decimals: 0,
    },
    {
      number: 4.9,
      suffix: "★",
      label: "Average Rating",
      icon: Star,
      decimals: 1,
    },
  ];

  return (
    <section className="bg-white border-y border-border-custom py-16 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 divide-y sm:divide-y-0 lg:divide-x divide-border-custom">
          {statsList.map((stat, idx) => (
            <div key={idx} className="sm:border-none">
              <StatCounterItem
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                icon={stat.icon}
                decimals={stat.decimals}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
