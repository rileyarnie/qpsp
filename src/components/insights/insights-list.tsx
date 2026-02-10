import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { KeyInsight } from "./key-insight";
import { KeyRecommendation } from "./key-recommendation";
import { useQuery } from "@tanstack/react-query";
import { fetchInsightsReport } from "@/lib/insights";
import { Badge } from "../ui/badge";

export const InsightsList: React.FC<{ expandable?: boolean }> = ({
  expandable,
}) => {
  const { data } = useQuery({
    queryKey: ["insights"],
    queryFn: fetchInsightsReport,
  });

  const priorityStyles = {
    high: {
      border: "border-red-500",
      text: "text-red-500",
      bg: "from-red-50 to-gray-50",
    },
    medium: {
      border: "border-yellow-500",
      text: "text-yellow-600",
      bg: "from-yellow-50 to-gray-50",
    },
    low: {
      border: "border-blue-500",
      text: "text-blue-500",
      bg: "from-blue-50 to-gray-50",
    },
  };

  return (
    <>
      <Card>
        <CardHeader className="flex items-center">
          <div className="flex-1 flex items-end justify-between">
            <div className="">
              <CardTitle className="text-2xl">Detailed Insights</CardTitle>
              <CardDescription>
                Detailed insights into what you’re doing well and where you can
                improve
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {expandable ? null : <KeyInsight />}
          {data?.insights.map((insight, i) => (
            <div
              key={i}
              className={`mb-2 bg-linear-to-r bg-gray-500/5 border-l-4 border-gray-300 rounded-lg p-5`}
            >
              <span className="text-sm leading-relaxed">
                <h3 className="font-semibold text-gray-900 mb-2 capitalize ">
                  {insight.type}
                </h3>
                <p className="font-light">{insight.message}</p>
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex items-center">
          <div className="flex-1 flex items-end justify-between">
            <div className="w-full">
              <div className=" md:flex justify-between">
                <CardTitle className="text-2xl">
                  Recommended Next Steps
                </CardTitle>
                <Badge className="hidden md:block" variant="secondary">
                  {data?.nextSteps.length} actions
                </Badge>
              </div>
              <CardDescription>
                Suggested steps to support your growth and progress
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {expandable ? null : <KeyRecommendation expandable={expandable} />}
          {data?.nextSteps.map((step, i) => {
            const styles = priorityStyles[step.priority];
            return (
              <div
                key={i}
                className={`mb-2 bg-linear-to-r ${styles.bg} border-l-4 ${styles.border} rounded-lg p-5`}
              >
                <div className="text-sm leading-relaxed space-y-2">
                  <h3
                    className={`uppercase font-medium ${styles.text} text-xs`}
                  >
                    {step.priority} priority
                  </h3>

                  <p className="font-medium text-base">{step.action}</p>
                  <p className="text-gray-600/80 italic ">{step.message}</p>
                  <p className="text-gray-600 capitalize">
                    Area: {step.area.split("_").join(" ")}
                  </p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
};
