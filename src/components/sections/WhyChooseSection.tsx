"use client";

import Image from "next/image";
import { ShieldCheck, MessageCircle, Clock, Home } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const features = [
  {
    icon: ShieldCheck,
    title: "Evidence-Based Medicine",
    description: "Every diagnosis and treatment plan follows the latest international clinical guidelines — no guesswork, no shortcuts.",
  },
  {
    icon: MessageCircle,
    title: "Patient-First Communication",
    description: "Dr. Santosh Kulkarni takes time to explain every step clearly and listens with empathy, ensuring patients feel confident in their decisions.",
  },
  {
    icon: Clock,
    title: "On-Time, Every Time",
    description: "Appointments are respected. No long waiting room surprises — your time, comfort, and schedules are valued.",
  },
  {
    icon: Home,
    title: "Comfortable Clinical Environment",
    description: "A warm, private, hygienic, and completely judgment-free clinic space designed with women's absolute comfort in mind.",
  },
];

export default function WhyChooseSection() {
  return (
    <section className="py-12 md:py-20 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Content & Features */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <SectionHeading
              eyebrow="Why Us"
              heading="Why Patients Trust Dr. Santosh Kulkarni"
              align="left"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 w-full">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="flex flex-col gap-3 group hover:translate-y-[-2px] transition-transform duration-200"
                  >
                    <div className="w-10 h-10 bg-primary-muted rounded-[10px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-display text-lg font-bold text-text-dark">
                      {feature.title}
                    </h4>
                    <p className="font-sans text-sm text-text-mid leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Cropped Tall Card Image */}
          <div className="lg:col-span-5 relative w-full flex justify-center">
            <div className="relative w-full max-w-[360px] aspect-[4/3] sm:aspect-[3/4] rounded-image overflow-hidden shadow-hero-image border border-primary/10 group">
              <Image
                src="/images/clinical_scrubs_patients.jpeg"
                alt="Dr. Santosh Kulkarni in consultations - Women's Specialist"
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-text-dark/40 to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
