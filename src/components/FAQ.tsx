import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What will you need from us to get started?",
      answer: "We'll start by understanding your workflows, key pain points, and desired outcomes. We don't need endless documentation, just access to the right team members and clarity on how your operations run."
    },
    {
      question: "How fast can we see results?", 
      answer: "Most clients start seeing time savings and workflow improvements within 2–4 weeks. We aim for fast, iterative delivery so you see value quickly and continuously."
    },
    {
      question: "What exactly does the Fira team build for us?",
      answer: "We design and deploy AI agents customized to your operations - this can include outreach agents, scheduling bots, reporting automations, data sync workflows, and more. We don't just automate tasks—we optimize how your team works."
    },
    {
      question: "What industries do you work best with?",
      answer: "We've helped teams in tech, logistics, healthcare, and more. Our approach is industry-agnostic, what matters is that you have manual, repetitive processes that need to scale intelligently."
    },
    {
      question: "Will this replace our existing systems?",
      answer: "No—we build around what you already use. Fira integrates with your current tools and workflows, enhancing them rather than replacing them."
    },
    {
      question: "Who will support us once we start?",
      answer: "You'll have direct access to our core team, including strategists, engineers, and AI specialists. No ticket portals. No endless email chains. Just responsive, strategic support."
    },
    {
      question: "Is this a one-time setup or an ongoing partnership",
      answer: "Fira isn't a \"set it and forget it\" vendor. We stay with you to optimize, evolve, and scale your system as your business grows."
    }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          <div className="text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#000c0a] leading-tight">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="bg-white border-2 border-[#e2e0e3] rounded-lg shadow-sm">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-[#e2e0e3] last:border-b-0"
                >
                  <AccordionTrigger className="px-6 sm:px-8 py-4 sm:py-6 text-left hover:no-underline group">
                    <span className="text-base sm:text-lg md:text-xl font-semibold text-[#000c0a] group-hover:text-[#58d4d1] transition-colors duration-200">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 sm:px-8 pb-4 sm:pb-6">
                    <p className="text-base sm:text-base text-[#1c3d36] leading-relaxed">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;