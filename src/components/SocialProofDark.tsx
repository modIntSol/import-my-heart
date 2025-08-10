import { Button } from "@/components/ui/button";
import canadaFlag from "@/assets/flag-icons/canada.png";
import uaeFlag from "@/assets/flag-icons/united-arab-emirates.png";
import usaFlag from "@/assets/flag-icons/united-states-of-america.png";

const SocialProofDark = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#000c0a]">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto text-center space-y-8 sm:space-y-12">
          
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            How Fast-Growing Teams Are <br className="hidden sm:block" /> <span className="text-[#02fe94]">Scaling Smarter</span>
          </h2>
          
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
            {/* Testimonial 1 */}
            <div className="p-6 sm:p-8 relative text-center group transition-all duration-300">
              <div className="mb-4">
                <div className="text-white font-semibold group-hover:text-[#02fe94] transition-colors duration-300">Sarah Chen</div>
                <div className="text-[#58d4d1] sm:text-[#e2e0e3] text-base group-hover:text-[#58d4d1] transition-colors duration-300 flex items-center justify-center gap-2">
                  Head of Sales, Imagini Studios
                  <img src={usaFlag} alt="USA flag" className="w-4 h-3 object-cover rounded-sm" />
                </div>
              </div>
              <p className="text-[#e2e0e3] text-base sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                "With the help of Fira, they cut our manual sales work from 3 hours a day to just 30 minutes. Now my team can focus more on closing deals instead of chasing admin tasks."
              </p>
              {/* Vertical line separator */}
              <div className="hidden md:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
              {/* Horizontal line separator for mobile */}
              <div className="md:hidden absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="p-6 sm:p-8 relative text-center group transition-all duration-300">
              <div className="mb-4">
                <div className="text-white font-semibold group-hover:text-[#02fe94] transition-colors duration-300">Abe Turan</div>
                <div className="text-[#58d4d1] sm:text-[#e2e0e3] text-base group-hover:text-[#58d4d1] transition-colors duration-300 flex items-center justify-center gap-2">
                  CEO and Founder of Simple Inc
                  <img src={canadaFlag} alt="Canada flag" className="w-4 h-3 object-cover rounded-sm" />
                </div>
              </div>
              <p className="text-[#e2e0e3] text-base sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                "Fira’s AI agents automated our outreach, scheduling, and inbound, saving us hours weekly. The result? Booked meetings and email engagement are way up."
              </p>
              {/* Vertical line separator */}
              <div className="hidden lg:block absolute top-0 right-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
              {/* Horizontal line separator for mobile */}
              <div className="lg:hidden absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[#58d4d1]/30 to-transparent group-hover:via-[#02fe94]/50 transition-all duration-300"></div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="p-6 sm:p-8 text-center group transition-all duration-300">
              <div className="mb-4">
                <div className="text-white font-semibold group-hover:text-[#02fe94] transition-colors duration-300">Ahmed Tarek
                </div>
                <div className="text-[#58d4d1] sm:text-[#e2e0e3] text-base group-hover:text-[#58d4d1] transition-colors duration-300 flex items-center justify-center gap-2">
                  CEO & Co-Founder of Awasis AI
                  <img src={uaeFlag} alt="UAE flag" className="w-4 h-3 object-cover rounded-sm" />
                </div>
              </div>
              <p className="text-[#e2e0e3] text-base sm:text-base leading-relaxed group-hover:text-white transition-colors duration-300">
                "Fira helped us build custom VR environments with speed snd precision. Their team was so responsive, professional, and definitely easy to work with."
              </p>
            </div>
          </div>
          
          {/* Call to Action Button */}
          <div className="pt-4">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              onClick={() => window.open('https://tidycal.com/fira-ai-consulting/30-minute', '_blank')}
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

export default SocialProofDark; 