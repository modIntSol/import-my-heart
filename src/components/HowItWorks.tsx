import { Button } from "@/components/ui/button";
import discoveryIcon from "@/assets/flag-icons/discovery.png";
import strategyIcon from "@/assets/flag-icons/strategy.png";
import developmentIcon from "@/assets/flag-icons/10.png";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "1. Discovery & Analysis",
      description: "We deep-dive into your goals, challenges, and data to uncover high-impact AI opportunities.",
      icon: discoveryIcon
    },
    {
      id: 2,
      title: "2. Strategy & Planning",
      description: "Get a tailored roadmap aligned with your business needs, timeline, and budget—zero guesswork.",
      icon: strategyIcon
    },
    {
      id: 3,
      title: "3. Build & Deploy",
      description: "We develop, deploy, and support your AI systems so you can scale smarter and grow faster.",
      icon: developmentIcon
    }
  ];

  const openScheduling = () => {
    window.open('https://tidycal.com/fira-ai-consulting/30-minute', '_blank');
  };

  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-[#000c0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-8 sm:space-y-12 md:space-y-16">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-2">
              How it works?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-[#e2e0e3] font-medium px-4 sm:px-8 max-w-4xl mx-auto">
              Within 3 simple steps, we turn your goals into working solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8" role="region" aria-label="How it works process steps">
            {steps.map((step) => (
              <div
                key={step.id}
                className="group bg-white border-2 border-[#e2e0e3] rounded-lg p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center text-center min-h-[180px] sm:min-h-[200px] md:min-h-[240px] shadow-sm hover:shadow-lg hover:scale-[1.02] hover:bg-[#000c0a] hover:border-[#02fe94] transition-all duration-300"
                role="article"
                aria-labelledby={`step-${step.id}-title`}
              >
                <div className="mb-3 sm:mb-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#02fe94] rounded-full flex items-center justify-center">
                    <img 
                      src={step.icon} 
                      alt={`${step.title} icon`}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-contain"
                      loading="lazy"
                      width="48"
                      height="48"
                    />
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-[#000c0a] group-hover:text-white transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-base sm:text-base text-[#1c3d36] group-hover:text-white transition-colors duration-300 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center pt-6 sm:pt-8">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={openScheduling}
              aria-label="Schedule a free call to learn how our 3-step process works"
            >
              SCHEDULE A FREE CALL
            </Button>
            <p className="text-[#e2e0e3]/80 text-base sm:text-sm lg:text-base italic mt-3">
              No Cost, No Pressure, Free Introductory Call
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;