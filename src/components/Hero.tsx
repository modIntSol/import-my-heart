import { CTAButton } from "@/components/ui/cta-button";
import simpleLogo from '../assets/clients-logo/simple.png';
import shiftLogo from '../assets/clients-logo/shift.png';
import almanLogo from '../assets/clients-logo/alman.png';
import altaLogo from '../assets/clients-logo/alta.png';
import assistLogo from '../assets/clients-logo/assist.png';
import swaLogo from '../assets/clients-logo/swa.png';
import imaginiLogo from '../assets/clients-logo/imagini.png';
import heroBg from '../assets/images/hero-bg.png';

const Hero = () => {
  const partnerLogos = [
    { src: simpleLogo, alt: 'Simple' },
    { src: shiftLogo, alt: 'Shift' },
    { src: almanLogo, alt: 'Alman' },
    { src: altaLogo, alt: 'Alta' },
    { src: assistLogo, alt: 'Assist' },
    { src: swaLogo, alt: 'SWA' },
    { src: imaginiLogo, alt: 'Imagini' },
  ];

  const logos = [...partnerLogos, ...partnerLogos, ...partnerLogos];

  const valuePropositions = [
    "Reach $1M+ MMR With No Extra Hires",
    "5X Your Sales Closure with AI-Powered Sales Agents", 
    "Drive Profit Growth with AI Agents"
  ];

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#58d4d1]/10 via-transparent to-[#02fe94]/10 animate-pulse" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-4xl pt-16 lg:pt-20">
        <div className="text-center">
          <div className="inline-flex items-center bg-[#1c3d36] backdrop-blur-sm rounded-full px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#02fe94] shadow-lg mb-2 sm:mb-3 overflow-hidden relative glow-effect w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]">
            <span className="text-white font-semibold text-xs sm:text-sm uppercase tracking-wider mr-4 flex-shrink-0" aria-label="Our client partners">Who we work with</span>
            
            <div className="relative overflow-hidden flex-1" style={{ height: '32px' }}>
              <div 
                className="flex items-center"
                style={{
                  animation: 'scrollPartners 8s linear infinite',
                  width: 'fit-content',
                }}
              >
                {logos.map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center px-2"
                    style={{ width: '60px' }}
                  >
                    <img
                      src={logo.src}
                      alt={`${logo.alt} company logo`}
                      className="h-6 sm:h-7 lg:h-8 xl:h-9 object-contain filter brightness-0 invert opacity-70"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-5 lg:mb-6">
            <span className="text-white">Boost your Business with </span>
            <span className="text-[#02fe94]">AI Agents</span>
          </h1>
          
          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-5 lg:mb-6 max-w-3xl mx-auto">
            {valuePropositions.map((proposition, index) => (
              <div key={index} className="flex items-start gap-3 sm:gap-4 justify-center">
                <div className="w-4 h-4 sm:w-5 sm:h-5 bg-[#02fe94] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#000c0a] text-xs font-bold">✓</span>
                </div>
                <p className="text-[#e2e0e3] text-sm sm:text-base lg:text-lg leading-relaxed">{proposition}</p>
              </div>
            ))}
          </div>
          
          <div className="mb-3 sm:mb-4">
            <CTAButton 
              variant="hero"
              ariaLabel="Schedule a free consultation call with Fira AI experts"
            />
          </div>
          
          <p className="text-[#e2e0e3]/80 text-sm sm:text-sm lg:text-base italic">
            No Cost, No Pressure, Free Introductory Call
          </p>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scrollPartners {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-60px * 8));
            }
          }
          
          .glow-effect {
            box-shadow: 0 0 20px rgba(2, 254, 148, 0.6), 0 0 40px rgba(2, 254, 148, 0.3), 0 0 60px rgba(2, 254, 148, 0.1);
          }
          
          .glow-effect:hover {
            box-shadow: 0 0 30px rgba(2, 254, 148, 0.8), 0 0 60px rgba(2, 254, 148, 0.4), 0 0 90px rgba(2, 254, 148, 0.2);
          }
        `
      }} />
    </section>
  );
};

export default Hero;