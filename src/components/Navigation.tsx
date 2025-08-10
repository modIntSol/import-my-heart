import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logoVariation3 from '../assets/fira-logo/Logo Variations-03.png';

const Navigation = () => {
  const location = useLocation();
  const [activePage, setActivePage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const path = location.pathname;
    if (path === '/') setActivePage('home');
    else if (path === '/blog') setActivePage('blog');
    else if (path === '/contacts') setActivePage('contacts');
  }, [location]);

  const handlePageChange = (page: string) => {
    setActivePage(page);
  };

  const navLinkClasses = (page: string) => 
    `transition-all duration-300 font-medium text-sm lg:text-base ${
      activePage === page 
        ? 'text-[#02fe94] font-semibold' 
        : 'text-white/60 hover:text-[#02fe94] hover:opacity-100'
    }`;

  const mobileNavLinkClasses = (page: string) => 
    `block py-2 transition-all duration-300 font-medium text-base ${
      activePage === page 
        ? 'text-[#02fe94] font-semibold' 
        : 'text-white/60 hover:text-[#02fe94] hover:opacity-100'
    }`;

  const scheduleButtonClasses = "bg-transparent border-2 border-[#02fe94] hover:bg-white hover:text-[#000c0a] text-white font-semibold shadow-lg hover:shadow-[#02fe94]/25 transition-all duration-300";

  const openScheduling = () => {
    window.open('https://tidycal.com/fira-ai-consulting/30-minute', '_blank');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#000c0a] border-b border-[#1c3d36] shadow-lg">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-12 sm:h-16">
          <Link to="/">
            <img 
              src={logoVariation3} 
              alt="Fira AI company logo - Navigate to homepage" 
              className="h-24 sm:h-24 object-contain"
              loading="eager"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <Link to="/" onClick={() => handlePageChange('home')} className={navLinkClasses('home')}>
              Home
            </Link>
            <Link to="/blog" onClick={() => handlePageChange('blog')} className={navLinkClasses('blog')}>
              Blog
            </Link>
            <Link to="/contacts" onClick={() => handlePageChange('contacts')} className={navLinkClasses('contacts')}>
              Contacts
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <Button 
              variant="default" 
              size="sm"
              className={`${scheduleButtonClasses} text-sm lg:text-base py-2 px-4`}
              onClick={openScheduling}
              aria-label="Schedule a free consultation call"
            >
              SCHEDULE A FREE CALL
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <Button 
              variant="default" 
              size="sm"
              className={`${scheduleButtonClasses} text-xs sm:text-sm py-1 px-2`}
              onClick={openScheduling}
              aria-label="Schedule a free consultation call"
            >
              SCHEDULE A FREE CALL
            </Button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-white hover:text-[#02fe94] transition-colors duration-200"
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-[#000c0a] border-t border-[#1c3d36] shadow-lg"
            role="navigation"
            aria-label="Mobile navigation menu"
          >
            <div className="px-4 py-6 space-y-4">
              <Link 
                to="/" 
                onClick={() => { handlePageChange('home'); setIsMobileMenuOpen(false); }}
                className={mobileNavLinkClasses('home')}
              >
                Home
              </Link>
              <Link 
                to="/blog" 
                onClick={() => { handlePageChange('blog'); setIsMobileMenuOpen(false); }}
                className={mobileNavLinkClasses('blog')}
              >
                Blog
              </Link>
              <Link 
                to="/contacts" 
                onClick={() => { handlePageChange('contacts'); setIsMobileMenuOpen(false); }}
                className={mobileNavLinkClasses('contacts')}
              >
                Contacts
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;