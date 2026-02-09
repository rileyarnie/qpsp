import { OverallReadinessCard } from "./overall-readiness";
import { SkillCard } from "./skill-card";

export function Dashboard() {
  return (
    <div className="grid gap-4">
      <OverallReadinessCard />
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        <SkillCard
          label="Academics"
          score={80}
          description="Your academic performance and subject knowledge"
          recommendations={[
            "Continue excelling in your coursework",
            "Explore advanced topics in your strongest subjects",
            "Consider tutoring others to reinforce your knowledge",
          ]}
        />
      </div>
      <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min"></div>
    </div>
  );
}
