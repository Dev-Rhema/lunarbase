import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import EconomicsSection from "@/components/EconomicsSection";
import PrecedentSection from "@/components/PrecedentSection";
import SecurityRoadmapSection from "@/components/SecurityRoadmapSection";
import CTASection from "@/components/CTASection";
import TeamSection from "@/components/TeamSection";
import ParticleField from "@/components/ParticleField";
const Index = () => {
  return (
    <div className="relative min-h-screen bg-background">
      <ParticleField />
      <div className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <EconomicsSection />
        <PrecedentSection />
        <SecurityRoadmapSection />
        {/* <TeamSection /> */}
        <CTASection />
      </div>
    </div>
  );
};
var stdin_default = Index;
export { stdin_default as default };
