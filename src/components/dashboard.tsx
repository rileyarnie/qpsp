import { useQuery } from "@tanstack/react-query";
import { SkillCard } from "./skills/skill-card";
import type { SkillArea } from "@/types/types";
import { fetchSkills } from "@/lib/skills";
import { SkillCardSkeleton } from "./skills/skill-card-skeleton";
import { KeyInsight } from "./insights/key-insight";
import { KeyRecommendation } from "./insights/key-recommendation";
import { InsightsList } from "./insights/insights-list";

export const Dashboard: React.FC<{ expandable?: boolean }> = ({
  expandable,
}) => {
  const { data: skills, isLoading } = useQuery<SkillArea[]>({
    queryKey: ["skills"],
    queryFn: fetchSkills,
  });

  return (
    <div className="grid gap-4">
      <div
        className={`grid auto-rows-min gap-4  ${expandable ? "md:grid-cols-1" : "md:grid-cols-4"}`}
      >
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
              key={skill.label}
              label={skill.label}
              score={skill.score}
              description={skill.description}
              expandable={expandable}
              recommendations={[
                "Continue excelling in your coursework",
                "Explore advanced topics in your strongest subjects",
                "Consider tutoring others to reinforce your knowledge",
              ]}
            />
          ))}
      </div>
      {expandable ? (
        <div className="grid auto-rows-min md:grid-cols-1 rounded-xl md:min-h-min gap-2">
          <InsightsList expandable />
        </div>
      ) : (
        <div className="grid auto-rows-min md:grid-cols-2 rounded-xl md:min-h-min gap-2">
          <KeyInsight />
          <KeyRecommendation />
        </div>
      )}
      <div className="bg-muted/50 min-h-screen flex-1 rounded-xl md:min-h-min"></div>
    </div>
  );
};
