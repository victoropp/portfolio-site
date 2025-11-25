import { Hero } from "@/components/home/Hero";
import { ImpactMetrics } from "@/components/home/ImpactMetrics";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { SkillsOverview } from "@/components/home/SkillsOverview";
import { CTA } from "@/components/home/CTA";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Hero />
      <ImpactMetrics />
      <FeaturedProjects />
      <SkillsOverview />
      <CTA />
    </main>
  );
}
