import { Button } from "@/components/ui/button";
import image2 from "@/assets/images/2.png";
import image3 from "@/assets/images/3.png";
import image4 from "@/assets/images/4.png";

const ValuePropositions = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto space-y-16 sm:space-y-20">
          
          {/* Section 1 - Media Left, Content Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-2 items-center">
            {/* Media */}
            <div className="flex justify-center lg:justify-start order-1 lg:order-1 lg:pr-4">
              <img 
                src={image2} 
                alt="Stop the busywork, start building illustration" 
                className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-2xl sm:hover:shadow-[#02fe94]/20"
              />
            </div>
            
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-2 lg:pl-4 mt-8 sm:mt-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#000c0a] leading-tight">
               Stop the Busywork. <span className="text-[#02fe94]">Start Building</span>
              </h2>
              <p className="text-base sm:text-base lg:text-lg text-[#1c3d36] leading-relaxed">
              Your team is drowning in manual work and repetitive tasks. <br />
              Fira builds and deploy custom AI agents that handle the busywork, freeing your people to focus on strategy, innovation, and execution.
              </p>
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://tidycal.com/fira-ai-consulting/30-minute', '_blank')}
                >
                  SCHEDULE A FREE CALL
                </Button>
                <p className="text-[#1c3d36]/80 text-base sm:text-sm lg:text-base italic mt-3 text-center sm:text-left">
                  No Cost, No Pressure, Free Introductory Call
                </p>
              </div>
            </div>
          </div>



          {/* Section 3 - Content Left, Media Right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-2 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1 lg:pr-4 mt-8 sm:mt-0">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-bold text-[#000c0a] leading-tight">
              Scale <span className="text-[#02fe94]">Without the Growing Pains</span>
              </h2>
              <p className="text-base sm:text-base lg:text-lg text-[#1c3d36] leading-relaxed">
              As your business grows, your systems shouldn't slow you down. <br />
              Fira builds fully custom AI agents that is customize around your workflows, your industry and your operations. 
              </p>
              <div className="pt-4">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-lg hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={() => window.open('https://tidycal.com/fira-ai-consulting/30-minute', '_blank')}
                >
                  SCHEDULE A FREE CALL
                </Button>
                <p className="text-[#1c3d36]/80 text-base sm:text-sm lg:text-base italic mt-3 text-center sm:text-left">
                  No Cost, No Pressure, Free Introductory Call
                </p>
              </div>
            </div>
            
            {/* Media */}
            <div className="flex justify-center lg:justify-end order-1 lg:order-2 lg:pl-4">
              <img 
                src={image4} 
                alt="Scale without the growing pains illustration" 
                className="w-full max-w-sm lg:max-w-md rounded-lg shadow-lg transition-all duration-300 sm:hover:scale-105 sm:hover:shadow-2xl sm:hover:shadow-[#02fe94]/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions; 