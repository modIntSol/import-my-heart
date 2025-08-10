import awsLogo from '../assets/partner-logo/aws.png';
import gCloudLogo from '../assets/partner-logo/g-cloud.png';
import nvdiaLogo from '../assets/partner-logo/nvdia.png';

const SocialProof = () => {
  const originalLogos = [
    { src: awsLogo, alt: 'AWS' },
    { src: gCloudLogo, alt: 'Google Cloud' },
    { src: nvdiaLogo, alt: 'NVIDIA' },
  ];

  // Create multiple sets for seamless infinite scroll
  const logos = [...originalLogos, ...originalLogos, ...originalLogos];

  return (
    <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Partners Label */}
          <div className="text-center mb-12">
            <div className="inline-block px-8 py-4">
              <h2 className="text-[#000c0a] font-bold text-lg sm:text-xl">
                PARTNERS
              </h2>
            </div>
          </div>

          {/* Moving Logos Container */}
          <div className="relative w-full overflow-hidden">
            <div 
              className="flex items-center"
              style={{
                animation: 'scroll 12s linear infinite',
                width: 'fit-content',
              }}
            >
              {logos.map((logo, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{ width: '180px', padding: '0 20px' }}
                >
                  <img
                    src={logo.src}
                    alt={`${logo.alt} partner logo`}
                    className="h-12 sm:h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    width="120"
                    height="64"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-180px * 3));
            }
          }
        `
      }} />
    </section>
  );
};

export default SocialProof; 