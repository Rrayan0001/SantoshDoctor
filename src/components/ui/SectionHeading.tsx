interface SectionHeadingProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  darkTheme?: boolean;
}

export default function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  darkTheme = false,
}: SectionHeadingProps) {
  const isLeft = align === "left";

  return (
    <div
      className={`flex flex-col mb-12 md:mb-16 max-w-3xl ${
        isLeft ? "text-left" : "mx-auto text-center items-center"
      }`}
    >
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 mb-4 font-sans text-xs font-bold tracking-widest text-primary uppercase bg-primary-muted border border-primary-light/20 rounded-[8px]">
          {eyebrow}
        </span>
      )}
      
      <h2
        className={`font-display text-3xl md:text-4xl lg:text-[38px] font-bold leading-tight ${
          darkTheme ? "text-white" : "text-text-dark"
        }`}
      >
        {heading}
      </h2>

      {subheading && (
        <p
          className={`font-sans text-base md:text-lg mt-4 leading-relaxed max-w-2xl ${
            darkTheme ? "text-text-light" : "text-text-mid"
          }`}
        >
          {subheading}
        </p>
      )}
    </div>
  );
}
