import { useState } from "react";
import type { SkillArea } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Button } from "../ui/button";

export const SkillCard: React.FC<SkillArea> = ({
  score,
  label,
  description,
  expandable,
  recommendations,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="flex flex-col gap-1"
    >
      <Card className="flex flex-col">
        <CardHeader className="flex items-center">
          <div className="flex-1 flex items-end justify-between">
            <div className="">
              <CardTitle>{label}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </div>
            {expandable && (
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-8 cursor-pointer"
                >
                  {isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
                  <span className="sr-only">Toggle details</span>
                </Button>
              </CollapsibleTrigger>
            )}
          </div>
        </CardHeader>
        <CardContent className="">
          <div className="mb-0">
            <CardTitle className="text-2xl flex justify-end ">
              {score}%
            </CardTitle>
            <Progress value={score} className="[&>div]:bg-[#43c743]/80" />
          </div>

          <CollapsibleContent className="flex flex-col gap-2 mt-2 transition-all ease-in-out duration-300">
            <h3 className="font-semibold text-[#0e1a37] mb-2 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#43c743] rounded-full"></span>
              Recommendations
            </h3>
            <ul className="space-y-2">
              {recommendations.map((recommendation, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <span className="w-1 h-1 bg-[#0e1a37] rounded-full"></span>
                  <span className="text-sm leading-relaxed">
                    {recommendation}
                  </span>
                </li>
              ))}
            </ul>
          </CollapsibleContent>
        </CardContent>
      </Card>
    </Collapsible>
  );
};
