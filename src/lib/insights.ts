import insightsdata from "../data/insights-data.json";
import type { InsightsReport } from "../types/types";

export const fetchInsightsReport = async (): Promise<InsightsReport> => {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return insightsdata as InsightsReport;
};
