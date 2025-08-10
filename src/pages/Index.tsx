import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import SocialProofSection from "@/components/SocialProofSection";
import ValuePropositions from "@/components/ValuePropositions";
import SocialProofDark from "@/components/SocialProofDark";
import CompetitiveAnalysis from "@/components/CompetitiveAnalysis";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <SocialProof />
      <ProblemSolution />
      <SocialProofSection />
      <ValuePropositions />
      <SocialProofDark />
      <CompetitiveAnalysis />
      <HowItWorks />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
