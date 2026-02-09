import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export const description = "A radial chart with a custom shape";

const chartData = [
  { browser: "safari", visitors: 1260, fill: "var(--color-safari)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function OverallReadinessCard() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Overall Readiness Score</CardTitle>
        <CardDescription>
          Your average score across multiple dimensions
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 grid auto-rows-min md:grid-cols-3 pb-0 items-center">
        <div className="col-span-">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-62.5"
          >
            <RadialBarChart
              data={chartData}
              endAngle={100}
              innerRadius={80}
              outerRadius={110}
            >
              <PolarGrid
                gridType="circle"
                radialLines={false}
                stroke="none"
                className="first:fill-muted last:fill-background"
                polarRadius={[86, 74]}
              />
              <RadialBar dataKey="visitors" background />
              <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                <Label
                  content={({ viewBox }) => {
                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                      return (
                        <text
                          x={viewBox.cx}
                          y={viewBox.cy}
                          textAnchor="middle"
                          dominantBaseline="middle"
                        >
                          <tspan
                            x={viewBox.cx}
                            y={viewBox.cy}
                            className="fill-foreground text-4xl font-bold"
                          >
                            65
                          </tspan>
                          <tspan
                            x={viewBox.cx}
                            y={(viewBox.cy || 0) + 24}
                            className="fill-muted-foreground"
                          >
                            out of 100
                          </tspan>
                        </text>
                      );
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ChartContainer>
        </div>
        <div className="grid gap-4 md:col-span-2">
          <div className="bg-[#fed002]/10 from-primary-50 to-accent-50 p-6 rounded-xl border border-primary-100 border-l-4 border-l-[#fed002]">
            <h3 className="font-semibold text-[#0e1a37] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0e1a37] rounded-full"></span>
              What This Means
            </h3>
            <p>
              You're making solid progress across multiple areas! You're
              developing the skills needed for success after school, with
              particular strength in academics.
            </p>
          </div>
          <div className="bg-[#43c743]/10 from-primary-50 to-accent-50 p-6 rounded-xl border border-primary-100 border-l-4 border-l-[#43c743]">
            <h3 className="font-semibold text-[#0e1a37] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#0e1a37] rounded-full"></span>
              Next Steps
            </h3>
            <p>
              Focus on building practical career skills while maintaining your
              academic excellence. Consider exploring entrepreneurship
              opportunities to round out your profile.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
