import { SOCIAL_LINKS } from "@/lib/constants";
import logoVariation3Copy from '../assets/fira-logo/Logo Variations-03 - Copy.png';
import xIcon from '../assets/flag-icons/x-icon.png';
import igIcon from '../assets/flag-icons/ig-icon.png';
import linkedinIcon from '../assets/flag-icons/linkedin-icon.png';

const Footer = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error('Failed to load icon:', e);
    e.currentTarget.style.display = 'none';
    const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
    if (nextElement) nextElement.style.display = 'block';
  };

  return (
    <footer className="bg-[#000c0a] border-t border-[#58d4d1]/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="mb-6">
                <img 
                  src={logoVariation3Copy} 
                  alt="Fira Logo" 
                  className="h-8 sm:h-10 lg:h-12 object-contain mb-3"
                />
                <p className="text-[#e2e0e3] text-sm sm:text-base mt-3 leading-relaxed max-w-md">
                  Your AI partner for business growth. We combine powerful AI tools with real humans who understand your business and scale with you.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                <div>
                  <h5 className="text-[#02fe94] font-semibold text-sm mb-2">United States</h5>
                  <address className="text-[#e2e0e3] text-sm sm:text-base not-italic leading-relaxed">
                    8 The Green<br />
                    Dover, DE 19901<br />
                    United States
                  </address>
                </div>
                
                <div>
                  <h5 className="text-[#02fe94] font-semibold text-sm mb-2">Canada</h5>
                  <address className="text-[#e2e0e3] text-sm sm:text-base not-italic leading-relaxed">
                    3385 Boul. Le Carrefour<br />
                    H7T 0R1<br />
                    Canada
                  </address>
                </div>
                
                <div>
                  <h5 className="text-[#02fe94] font-semibold text-sm mb-2">Saudi Arabia</h5>
                  <address className="text-[#e2e0e3] text-sm sm:text-base not-italic leading-relaxed">
                    King Abdulaziz Rd, Al Aarid<br />
                    Riyadh 13341<br />
                    Saudi Arabia
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-[#02fe94] font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a 
                    href="/#how-it-works" 
                    onClick={(e) => {
                      // Navigate to home first if not already there
                      if (window.location.pathname !== '/') {
                        e.preventDefault();
                        window.location.href = '/#how-it-works';
                      }
                    }}
                    className="text-[#e2e0e3] hover:text-[#02fe94] transition-colors duration-200 text-sm sm:text-base"
                  >
                    How it Works
                  </a>
                </li>
                <li>
                  <a href="/contacts" className="text-[#e2e0e3] hover:text-[#02fe94] transition-colors duration-200 text-sm sm:text-base">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#02fe94] font-semibold text-lg mb-4">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/privacy" className="text-[#e2e0e3] hover:text-[#02fe94] transition-colors duration-200 text-sm sm:text-base">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="/terms" className="text-[#e2e0e3] hover:text-[#02fe94] transition-colors duration-200 text-sm sm:text-base">
                    Terms of Use
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-[#58d4d1]/20 py-6 sm:py-8">
          <div className="flex justify-between items-center">
            <div className="text-[#e2e0e3] text-sm sm:text-base">
              <p>© 2025 FiraAI. All rights reserved.</p>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <img 
                  src={linkedinIcon} 
                  alt="LinkedIn Icon" 
                  className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                  onError={handleImageError}
                />
                <svg className="w-6 h-6 sm:w-6 sm:h-6 hidden" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Follow us on X (Twitter)"
              >
                <img 
                  src={xIcon} 
                  alt="X (Twitter) Icon" 
                  className="w-6 h-6 sm:w-6 sm:h-6 object-contain"
                  onError={handleImageError}
                />
                <svg 
                  className="w-6 h-6 hidden text-black" 
                  fill="currentColor" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              <a 
                href={SOCIAL_LINKS.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity duration-200"
                aria-label="Follow us on Instagram"
              >
                <img 
                  src={igIcon} 
                  alt="Instagram Icon" 
                  className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
                  onError={handleImageError}
                />
                <svg className="w-6 h-6 sm:w-8 sm:h-8 hidden" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;