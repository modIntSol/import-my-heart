// External URLs
export const TIDYCAL_BOOKING_URL = 'https://tidycal.com/fira-ai-consulting/30-minute';
export const TIDYCAL_SCRIPT_URL = 'https://asset-tidycal.b-cdn.net/js/embed.js';

// Contact Information
export const CONTACT_EMAIL = 'info@ffira.ai';
export const COMPANY_NAME = 'Fira AI';
export const COMPANY_TAGLINE = 'Custom AI Agents for Business Growth';

// Social Media
export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/company/ffira-ai',
  twitter: 'https://x.com/FFIRA_AI',
  instagram: 'https://www.instagram.com/ffira_ai/',
} as const;

// Office Locations
export const OFFICE_LOCATIONS = [
  {
    city: 'Dover',
    country: 'United States',
    address: '8 The Green',
    zipCode: '19901',
    phone: '+1 (555) 123-4567',
    email: CONTACT_EMAIL,
  },
  {
    city: 'Laval', 
    country: 'Canada',
    address: '3385 Boul. Le Carrefour',
    zipCode: 'H7T 0R1',
    phone: '+1 (555) 987-6543',
    email: CONTACT_EMAIL,
  },
  {
    city: 'Riyadh',
    country: 'Saudi Arabia', 
    address: 'King Abdulaziz Rd, Al Aarid',
    zipCode: '13341',
    phone: '+966 11 123 4567',
    email: CONTACT_EMAIL,
  },
] as const;

// Brand Colors
export const BRAND_COLORS = {
  primary: '#02fe94',
  secondary: '#58d4d1', 
  dark: '#000c0a',
  darkSecondary: '#1c3d36',
  text: '#e2e0e3',
} as const;

// Common button styles
export const BUTTON_STYLES = {
  cta: 'bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] hover:text-white font-bold rounded-xl shadow-lg hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105',
  ctaWhite: 'bg-white hover:bg-[#02fe94] text-[#000c0a] hover:text-white font-bold rounded-xl shadow-2xl hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105',
} as const;

// Industry options for forms
export const INDUSTRY_OPTIONS = [
  { value: 'technology', label: 'Technology' },
  { value: 'finance', label: 'Finance' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'retail', label: 'Retail' },
  { value: 'manufacturing', label: 'Manufacturing' },
  { value: 'other', label: 'Other' },
] as const;