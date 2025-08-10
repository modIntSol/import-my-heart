import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ctaFormSchema, type CTAFormData } from "@/lib/validations";
import { createAssessmentEmail, openEmailClient } from "@/lib/email-utils";
import { TIDYCAL_BOOKING_URL, INDUSTRY_OPTIONS } from "@/lib/constants";

const FinalCTA = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
    reset
  } = useForm<CTAFormData>({
    resolver: zodResolver(ctaFormSchema),
    mode: "onChange"
  });
  
  const watchedEmail = watch("email");

  const handleNextStep = () => {
    if (watchedEmail && watchedEmail.trim()) {
      setFormStep(2);
    }
  };

  const onSubmit = (data: CTAFormData) => {
    const mailtoUrl = createAssessmentEmail(data);
    openEmailClient(mailtoUrl);
    setIsSubmitted(true);
  };

  const openScheduling = () => {
    window.open(TIDYCAL_BOOKING_URL, '_blank');
  };

  const resetForm = () => {
    setIsSubmitted(false);
    reset();
    setFormStep(1);
  };

  return (
    <section className={`relative min-h-screen flex items-center justify-center py-12 sm:py-16 lg:py-20 transition-all duration-700 ease-in-out ${
      formStep === 2 ? 'min-h-screen' : 'min-h-screen'
    }`}>
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#000c0a] via-[#1c3d36] to-[#000c0a]" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#58d4d1]/10 via-transparent to-[#02fe94]/10 animate-pulse" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto min-h-screen">
          <div className="text-white text-center lg:text-left px-2 sm:px-4 lg:px-6 pt-8 sm:pt-12 lg:pt-16">
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#02fe94] leading-tight">
                 Your Competitors Are Already Moving Faster.
              </h2>
            </div>
            
            <div className="max-w-3xl space-y-4 sm:space-y-6">
              <p className="text-base sm:text-base md:text-lg text-[#e2e0e3] leading-relaxed">
               AI is changing how modern teams operate. Don't let legacy tools slow you down.
                Fira helps you leap ahead — before you're left behind.
              </p>
              
              <div className="pt-2 sm:pt-4 text-center sm:text-left">
                <Button 
                  size="lg"
                  className="bg-white hover:bg-[#02fe94] text-[#000c0a] hover:text-white font-bold px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-[#02fe94]/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                  onClick={openScheduling}
                  aria-label="Schedule a free consultation call with Fira AI"
                >
                  SCHEDULE A FREE CALL
                </Button>
                <p className="text-[#e2e0e3]/80 text-base sm:text-sm lg:text-base italic mt-3">
                  No Cost, No Pressure, Free Introductory Call
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end px-2 sm:px-4 lg:px-6 pt-8 sm:pt-12 lg:pt-16 w-full">
            <div className={`group w-full max-w-md lg:max-w-lg xl:max-w-xl bg-white rounded-2xl border border-[#58d4d1]/20 shadow-2xl transition-all duration-300 ease-in-out transform hover:shadow-[#02fe94]/10 hover:border-[#02fe94]/40 hover:scale-[1.02] ${
              formStep === 1 ? 'p-6 sm:p-8' : 'p-6 sm:p-8'
            }`}>
              
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000c0a] group-hover:text-[#02fe94] transition-colors duration-300 mb-2 sm:mb-3">
                Let's Uncover Where AI Can Save You the Most Time
                </h3>
                <p className="text-[#1c3d36] text-sm sm:text-base lg:text-lg">
                In a 30-minute call, we'll map out where your workflows are slowing you down—and how AI agents can fix that.
                </p>
              </div>

              {formStep === 1 && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <Label htmlFor="email" className="text-[#000c0a] font-medium text-base sm:text-lg">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className="mt-3 bg-white border-[#58d4d1]/30 focus:border-[#02fe94] focus:ring-[#02fe94]/20 h-12 sm:h-14 text-base sm:text-lg"
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                  
                  <Button 
                    onClick={handleNextStep}
                    disabled={!watchedEmail || !watchedEmail.trim() || !!errors.email}
                    className="w-full bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] font-bold py-4 sm:py-6 rounded-lg transition-all duration-300 hover:scale-105 text-base sm:text-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    aria-label="Proceed to next step of the form"
                  >
                    Next →
                  </Button>
                </div>
              )}

              {formStep === 2 && !isSubmitted && (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 sm:space-y-8">
                  <div>
                    <Label htmlFor="email" className="text-[#000c0a] font-medium text-base sm:text-lg">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      placeholder="Enter your email"
                      className="mt-3 bg-white border-[#58d4d1]/30 focus:border-[#02fe94] focus:ring-[#02fe94]/20 h-12 sm:h-14 text-base sm:text-lg"
                      aria-describedby={errors.email ? "email-error-2" : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <p id="email-error-2" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="name" className="text-[#000c0a] font-medium text-base sm:text-lg">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      {...register("name")}
                      placeholder="Enter your full name"
                      className="mt-3 bg-white border-[#58d4d1]/30 focus:border-[#02fe94] focus:ring-[#02fe94]/20 h-12 sm:h-14 text-base sm:text-lg"
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="company" className="text-[#000c0a] font-medium text-base sm:text-lg">
                      Company Name
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      {...register("company")}
                      placeholder="Enter your company name"
                      className="mt-3 bg-white border-[#58d4d1]/30 focus:border-[#02fe94] focus:ring-[#02fe94]/20 h-12 sm:h-14 text-base sm:text-lg"
                      aria-describedby={errors.company ? "company-error" : undefined}
                      aria-invalid={!!errors.company}
                    />
                    {errors.company && (
                      <p id="company-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.company.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label htmlFor="industry" className="text-[#000c0a] font-medium text-base sm:text-lg">
                      Industry
                    </Label>
                    <select
                      id="industry"
                      {...register("industry")}
                      className="mt-3 w-full px-4 sm:px-5 py-3 sm:py-4 bg-white border border-[#58d4d1]/30 rounded-md focus:border-[#02fe94] focus:ring-[#02fe94]/20 focus:outline-none h-12 sm:h-14 text-base sm:text-lg"
                      aria-describedby={errors.industry ? "industry-error" : undefined}
                      aria-invalid={!!errors.industry}
                    >
                      <option value="">Select your industry</option>
                      {INDUSTRY_OPTIONS.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    {errors.industry && (
                      <p id="industry-error" className="mt-1 text-sm text-red-600" role="alert">
                        {errors.industry.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] font-bold py-4 sm:py-6 rounded-lg transition-all duration-300 hover:scale-105 text-base sm:text-lg"
                    >
                      Get Free Assessment
                    </Button>
                  </div>

                  <div className="text-center pt-4 sm:pt-6 border-t border-[#58d4d1]/20">
                    <p className="text-[#1c3d36] text-sm sm:text-base">
                      ✓ No commitment required • ✓ 30-minute consultation • ✓ Custom AI roadmap
                    </p>
                  </div>
                </form>
              )}

              {isSubmitted && (
                <div className="text-center space-y-6 sm:space-y-8">
                  <div className="w-16 h-16 bg-[#02fe94] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-[#000c0a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#000c0a]">
                    Thank You!
                  </h3>
                  <p className="text-[#1c3d36] text-base sm:text-lg">
                    Your email client should have opened with a pre-filled message to info@ffira.ai. 
                    If it didn't open automatically, please send an email to{' '}
                    <a href="mailto:info@ffira.ai" className="text-[#02fe94] font-semibold hover:underline">
                      info@ffira.ai
                    </a>{' '}
                    with your details.
                  </p>
                  <div className="pt-4">
                    <Button 
                      onClick={resetForm}
                      className="bg-gradient-to-r from-[#02fe94] to-[#58d4d1] hover:from-[#58d4d1] hover:to-[#02fe94] text-[#000c0a] font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105"
                      aria-label="Submit another assessment request"
                    >
                      Submit Another Request
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;