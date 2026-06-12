"use client";

const tickerItems = [
  "Gynecology & Obstetrics",
  "High-Risk Pregnancy Care",
  "PCOS Treatment",
  "Infertility Solutions",
  "Laparoscopic Surgery",
  "Menstrual Disorder Management",
  "Menopause Care",
  "Family Planning",
];

export default function TickerStrip() {
  return (
    <div
      id="ticker-strip"
      className="bg-primary text-white py-4 overflow-hidden select-none border-y border-white/5 relative z-10"
    >
      <div className="marquee-container flex">
        {/* First Marquee Element */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full justify-around gap-8 text-sm md:text-base font-sans font-semibold tracking-wide uppercase">
          {tickerItems.map((item, idx) => (
            <span key={`ticker-1-${idx}`} className="flex items-center gap-4">
              <span>✦</span> {item}
            </span>
          ))}
        </div>

        {/* Duplicated Marquee Element for seamless looping */}
        <div className="animate-marquee flex whitespace-nowrap min-w-full justify-around gap-8 text-sm md:text-base font-sans font-semibold tracking-wide uppercase" aria-hidden="true">
          {tickerItems.map((item, idx) => (
            <span key={`ticker-2-${idx}`} className="flex items-center gap-4">
              <span>✦</span> {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
