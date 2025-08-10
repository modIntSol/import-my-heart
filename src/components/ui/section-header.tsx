import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  centered?: boolean;
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  spacing?: "sm" | "md" | "lg";
}

const spacingStyles = {
  sm: "space-y-4 mb-8",
  md: "space-y-6 mb-12", 
  lg: "space-y-8 mb-16"
};

export function SectionHeader({ 
  title, 
  subtitle, 
  centered = true,
  className,
  titleClassName,
  subtitleClassName,
  spacing = "md"
}: SectionHeaderProps) {
  return (
    <div className={cn(
      spacingStyles[spacing],
      centered && "text-center",
      className
    )}>
      <h2 className={cn(
        "text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#000c0a] leading-tight",
        titleClassName
      )}>
        {title}
      </h2>
      
      {subtitle && (
        <p className={cn(
          "text-base sm:text-base lg:text-lg text-[#1c3d36] leading-relaxed max-w-4xl mx-auto",
          subtitleClassName
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}