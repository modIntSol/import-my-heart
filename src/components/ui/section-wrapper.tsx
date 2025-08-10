import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "dark" | "gray";
  paddingY?: "sm" | "md" | "lg";
  id?: string;
}

const backgroundStyles = {
  white: "bg-white",
  dark: "bg-[#000c0a]", 
  gray: "bg-[#f8f9fa]"
};

const paddingStyles = {
  sm: "py-12 sm:py-16",
  md: "py-16 sm:py-20", 
  lg: "py-16 sm:py-20 md:py-24"
};

export function SectionWrapper({ 
  children, 
  className, 
  background = "white",
  paddingY = "md",
  id 
}: SectionWrapperProps) {
  return (
    <section 
      id={id}
      className={cn(
        backgroundStyles[background],
        paddingStyles[paddingY],
        className
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </section>
  );
}