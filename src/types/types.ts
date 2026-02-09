export interface SkillArea {
  score: number;
  label: string;
  description: string;
  recommendations: string[];
  expandable?: boolean;
}

type AreaType =
  | "academics"
  | "career_skills"
  | "entrepreneurship"
  | "life_skills";
type PriorityType = "high" | "medium" | "low";

export interface Insight {
  area: AreaType;
  message: string;
}

export interface NextStep {
  priority: PriorityType;
  action: string;
  area: AreaType;
}

export interface InsightsReport {
  insights: Insight[];
  nextSteps: NextStep[];
}
