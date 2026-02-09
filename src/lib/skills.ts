import skillsdata from "../data/skills-data.json";
import type { SkillArea } from "../types/types";

export const fetchSkills = async (): Promise<SkillArea[]> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return skillsdata.skills as SkillArea[];
};
