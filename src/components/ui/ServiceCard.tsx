import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  tag?: string;
}

export default function ServiceCard({ icon: Icon, title, description, tag }: ServiceCardProps) {
  return (
    <div className="group relative bg-white p-6 sm:p-8 rounded-card shadow-card hover:shadow-2xl hover:translate-y-[-4px] transition-all duration-300 overflow-hidden border-t-0 border-primary">
      {/* Top Border Hover Reveal */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      {/* Tag Ribbon */}
      {tag && (
        <span className="absolute top-4 right-4 bg-primary-muted text-primary text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-[6px]">
          {tag}
        </span>
      )}

      {/* Icon Area */}
      <div className="w-12 h-12 bg-primary-muted rounded-[12px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 mb-6">
        <Icon className="w-6 h-6" />
      </div>

      {/* Content */}
      <h3 className="font-display text-xl font-bold text-text-dark mb-3">
        {title}
      </h3>
      <p className="font-sans text-sm text-text-mid leading-relaxed">
        {description}
      </p>
    </div>
  );
}
