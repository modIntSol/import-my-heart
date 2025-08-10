import { SectionWrapper } from "@/components/ui/section-wrapper";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/ui/cta-section";
import image1 from "@/assets/images/1.png";

const ProblemSolution = () => {
  const painPoints = [
    "Your ops still run on spreadsheets",
    "Key processes are duct-taped across disconnected tools",
    "Your team spends more time pulling data than acting on it"
  ];

  return (
    <SectionWrapper background="white" paddingY="lg">
      <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-2 items-center">
            <div className="space-y-6 sm:space-y-8 lg:pr-4">
              <SectionHeader
                title={
                  <>
                    The Tools Are There. <span className="text-[#02fe94]">But the Work Is Still Manual</span>
                  </>
                }
                centered={false}
                spacing="sm"
              />
              
              <div className="text-base sm:text-base md:text-lg text-[#1c3d36] leading-relaxed space-y-4">
                <p>You've invested in tools, platforms, and systems. But here's the truth:</p>
                <ul className="list-disc pl-6 space-y-1 [&>li]:pl-2 [&>li]:leading-relaxed [&>li]:text-left">
                  {painPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <p>This isn't scale. It's survival. The cost? Slower execution. Burnout. And growth that stalls before it starts.</p>
                <p><span className="font-bold">Fira changes that.</span> We plug the gaps your tech stack can't—using AI agents to automate low-value tasks, unify scattered systems, and surface insights that fuel real action. Built around how your workflows actually run—not how software says they should.</p>
              </div>
              
              <CTASection
                className="pt-2 sm:pt-3 text-center sm:text-left"
                buttonAriaLabel="Schedule a free consultation to solve manual workflow problems"
                subtextClassName="text-center sm:text-left"
              />
            </div>

            <div className="hidden md:flex justify-center lg:justify-end lg:pl-4">
              <div className="transition-all duration-300 hover:scale-105">
                <img 
                  src={image1} 
                  alt="Manual systems and processes illustration showing disconnected tools and spreadsheets" 
                  className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg"
                  loading="lazy"
                  width="400"
                  height="300"
                />
              </div>
            </div>
          </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSolution;