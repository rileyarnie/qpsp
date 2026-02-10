export interface UserScores {
  academics: number;
  career_skills: number;
  life_skills: number;
  entrepreneurship: number;
}

export interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  scores: UserScores;
}
