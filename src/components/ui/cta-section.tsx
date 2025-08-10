import { CTAButton } from "./cta-button";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  className?: string;
  buttonVariant?: "hero" | "section";
  buttonText?: string;
  buttonAriaLabel?: string;
  showSubtext?: boolean;
  subtextClassName?: string;
}

export function CTASection({ 
  className,
  buttonVariant = "section",
  buttonText,
  buttonAriaLabel,
  showSubtext = true,
  subtextClassName
}: CTASectionProps) {
  return (
    <div className={cn("text-center pt-4 sm:pt-6", className)}>
      <CTAButton
        variant={buttonVariant}
        ariaLabel={buttonAriaLabel}
      >
        {buttonText}
      </CTAButton>
      
      {showSubtext && (
        <p className={cn(
          "text-[#1c3d36]/80 text-base sm:text-sm lg:text-base italic mt-3",
          buttonVariant === "hero" && "text-[#e2e0e3]/80",
          subtextClassName
        )}>
          No Cost, No Pressure, Free Introductory Call
        </p>
      )}
    </div>
  );
}