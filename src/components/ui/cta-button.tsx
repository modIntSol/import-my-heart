import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { TIDYCAL_BOOKING_URL } from "@/lib/constants";

interface CTAButtonProps {
  variant?: "hero" | "section";
  size?: "sm" | "md" | "lg";
  children?: React.ReactNode;
  className?: string;
  ariaLabel?: string;
  onClick?: () => void;
  fullWidth?: boolean;
}

const variantStyles = {
  hero: "bg-white hover:bg-[#02fe94] text-[#000c0a] hover:text-white shadow-2xl",
  section: "bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] hover:text-white shadow-lg"
};

const sizeStyles = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg"
};

export function CTAButton({ 
  variant = "section", 
  size = "lg", 
  children = "SCHEDULE A FREE CALL",
  className,
  ariaLabel,
  onClick,
  fullWidth = false
}: CTAButtonProps) {
  
  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      window.open(TIDYCAL_BOOKING_URL, '_blank');
    }
  };

  return (
    <Button
      onClick={handleClick}
      className={cn(
        // Base styles
        "font-bold rounded-xl hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105",
        // Variant styles
        variantStyles[variant],
        // Size styles  
        sizeStyles[size],
        // Width styles
        fullWidth ? "w-full" : "w-full sm:w-auto",
        // Custom className
        className
      )}
      aria-label={ariaLabel || `Schedule a free consultation call`}
    >
      {children}
    </Button>
  );
}