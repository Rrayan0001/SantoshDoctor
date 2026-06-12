interface StatPillProps {
  number: string;
  label: string;
}

export default function StatPill({ number, label }: StatPillProps) {
  return (
    <div className="bg-white pl-5 pr-6 py-3.5 rounded-card border-l-[3px] border-primary shadow-card flex items-center gap-4 hover:translate-y-[-2px] transition-transform duration-200">
      <div className="font-display text-2xl font-bold text-primary whitespace-nowrap">
        {number}
      </div>
      <div className="font-sans text-xs font-semibold text-text-mid uppercase tracking-wider leading-snug">
        {label}
      </div>
    </div>
  );
}
