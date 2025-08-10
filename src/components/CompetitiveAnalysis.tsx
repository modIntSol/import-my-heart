import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/ui/cta-section";

const CompetitiveAnalysis = () => {
  return (
    <SectionWrapper background="white" paddingY="md">
      <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12">
          
          <SectionHeader
            title={
              <>
                Not Just A Software. <br />{" "}
                <span className="bg-gradient-to-r from-[#02fe94] to-[#58d4d1] bg-clip-text text-transparent">
                  A Partner in Your Growth
                </span>
              </>
            }
            subtitle="Fira combines powerful AI tools with real humans who know your business, stay with you after go-live, and scale the system as you scale your team."
            subtitleClassName="text-base sm:text-lg md:text-xl"
            titleClassName="max-w-4xl mx-auto"
          />
          
          <CTASection
            buttonAriaLabel="Schedule a free call to experience our competitive advantages"
          />
          
          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <div className="min-w-full bg-white border border-[#e2e0e3] rounded-lg shadow-lg">
              <table className="min-w-full" role="table" aria-label="Comparison between Fira AI and other companies">
                <thead role="rowgroup">
                  <tr className="bg-[#f8f9fa] border-b border-[#e2e0e3]" role="row">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-[#000c0a] border-r border-[#e2e0e3]">
                      Value Proposition
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#000c0a] border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/10 to-[#58d4d1]/10">
                      Fira AI
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-[#000c0a]">
                      Other Existing Companies
                    </th>
                  </tr>
                </thead>
                <tbody role="rowgroup">
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                     Custom AI Agents, Not One-Size Automation
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                    Lean, Responsive Team
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                    Fast Execution, No Bureaucracy
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                      Rapid Turnaround on Requests & Adjustments
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                    Dedicated Onboarding + Strategic Support
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                    Your Workflow, Not Just Features
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>
                  <tr className="border-b border-[#e2e0e3] hover:bg-[#000c0a] transition-all duration-300 cursor-pointer group">
                    <td className="px-6 py-4 text-sm font-medium text-[#000c0a] border-r border-[#e2e0e3] group-hover:text-white transition-all duration-300">
                    Evolving Systems, Not Static Setups
                    </td>
                    <td className="px-6 py-4 text-center border-r border-[#e2e0e3] bg-gradient-to-r from-[#02fe94]/5 to-[#58d4d1]/5 group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#02fe94] font-bold group-hover:text-[#02fe94] transition-all duration-300">✓</span>
                    </td>
                    <td className="px-6 py-4 text-center group-hover:bg-transparent transition-all duration-300">
                      <span className="text-2xl text-[#000c0a] font-bold group-hover:text-white transition-all duration-300">✗</span>
                    </td>
                  </tr>

                  
                </tbody>
              </table>
            </div>
          </div>
      </div>
    </SectionWrapper>
  );
};

export default CompetitiveAnalysis; 