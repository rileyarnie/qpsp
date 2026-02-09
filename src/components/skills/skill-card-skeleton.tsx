import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function SkillCardSkeleton() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex items-center">
        <div className="flex-1 flex items-end justify-between">
          <div className="space-y-2">
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-4 w-56" />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="mb-2 space-y-2">
          <div className="flex justify-end">
            <Skeleton className="h-8 w-16" />
          </div>
          <Skeleton className="h-3 w-full rounded-full" />
        </div>
      </CardContent>
    </Card>
  );
}
