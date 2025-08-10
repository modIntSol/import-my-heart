import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/ui/cta-section";

const SocialProofSection = () => {
  return (
    <SectionWrapper background="dark" paddingY="md">
      <div className="text-center space-y-8 sm:space-y-12">
        
        <SectionHeader
          title={
            <>
              Back by Results. <br /> <span className="text-[#02fe94]">Proven By Numbers</span>
            </>
          }
          titleClassName="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          spacing="sm"
        />
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
            {/* Stat 1 */}
            <div className="p-6 sm:p-8 relative text-center group transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#02fe94] mb-2 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                50+
              </div>
              <div className="text-white text-sm sm:text-base font-medium mb-3 group-hover:text-white transition-colors duration-300">
                Teams Automated
              </div>
              <p className="text-[#e2e0e3] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Tech, logistics, healthcare, and more tapped Fira to simplify and automate.
              </p>
              {/* Vertical line separator */}
              <div className="hidden sm:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
              {/* Horizontal line separator for mobile */}
              <div className="sm:hidden absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
            </div>
            
            {/* Stat 2 */}
            <div className="p-6 sm:p-8 relative text-center group transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#02fe94] mb-2 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                15,000+
              </div>
              <div className="text-white text-sm sm:text-base font-medium mb-3 group-hover:text-white transition-colors duration-300">
                Hours Saved 
              </div>
              <p className="text-[#e2e0e3] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Free up hours per week—no rewrites, no spreadsheets.
              </p>
              {/* Vertical line separator */}
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
              {/* Horizontal line separator for mobile */}
              <div className="sm:hidden absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
            </div>
            
            {/* Stat 3 */}
            <div className="p-6 sm:p-8 relative text-center group transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#02fe94] mb-2 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                400,000+
              </div>
              <div className="text-white text-sm sm:text-base font-medium mb-3 group-hover:text-white transition-colors duration-300">
                Tasks Automated to Date
              </div>
              <p className="text-[#e2e0e3] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Scheduled alerts, workflows, triggers processed automatically.
              </p>
              {/* Vertical line separator */}
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
              {/* Horizontal line separator for mobile */}
              <div className="sm:hidden absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
            </div>
            
            {/* Stat 4 */}
            <div className="p-6 sm:p-8 text-center group transition-all duration-300">
              <div className="text-4xl sm:text-5xl font-bold text-[#02fe94] mb-2 group-hover:scale-110 group-hover:text-white transition-all duration-300">
                99.9%
              </div>
              <div className="text-white text-sm sm:text-base font-medium mb-3 group-hover:text-white transition-colors duration-300">
                Uptime
              </div>
              <p className="text-[#e2e0e3] text-xs sm:text-sm leading-relaxed group-hover:text-white transition-colors duration-300">
                Enterprise-grade infrastructure, without enterprise complexity.
              </p>
            </div>
          </div>
          
          <CTASection
            className="pt-4"
            buttonAriaLabel="Schedule a free call - Proven results with 50+ teams automated"
            subtextClassName="text-[#e2e0e3]/80"
          />
        </div>
    </SectionWrapper>
  );
};

export default SocialProofSection; 