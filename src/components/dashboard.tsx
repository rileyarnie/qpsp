import { useQuery } from "@tanstack/react-query";
import { OverallReadinessCard } from "./overall-readiness";
import { SkillCard } from "./skills/skill-card";
import type { SkillArea } from "@/types/types";
import { fetchSkills } from "@/lib/skills";
import { SkillCardSkeleton } from "./skills/skill-card-skeleton";
import { KeyInsight } from "./insights/key-insight";
import { KeyRecommendation } from "./insights/key-recommendation";

export function Dashboard() {
  const { data: skills, isLoading } = useQuery<SkillArea[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  return (
    <div className="grid gap-4">
      <OverallReadinessCard />
      <div className="grid auto-rows-min gap-4 md:grid-cols-4">
        {isLoading && (
          <>
            <SkillCardSkeleton />
            <SkillCardSkeleton />
            <SkillCardSkeleton />
            <SkillCardSkeleton />
          </>
        )}
        {!isLoading &&
          skills?.map((skill) => (
            <SkillCard
              label={skill.label}
              score={skill.score}
              description={skill.description}
              recommendations={[
                "Continue excelling in your coursework",
                "Explore advanced topics in your strongest subjects",
                "Consider tutoring others to reinforce your knowledge",
              ]}
            />
          ))}
      </div>
      <div className="grid auto-rows-min md:grid-cols-2 rounded-xl md:min-h-min gap-2">
        <KeyInsight />
        <KeyRecommendation />
      </div>
      <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min"></div>
    </div>
  );
}
