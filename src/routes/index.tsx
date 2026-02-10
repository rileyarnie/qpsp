import { createFileRoute } from "@tanstack/react-router";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutGrid, List } from "lucide-react";
import { OverallReadinessCard } from "@/components/overall-readiness";
import { Dashboard } from "@/components/dashboard";
import { useUser } from "@/context/UserContext";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const { user } = useUser();

  if (!user) return null;

  return (
    <>
      <div>
        <Tabs defaultValue="overview">
          <div className="grid gap-2 auto-rows-min md:grid-cols-2">
            <p className="text-3xl font-semibold">
              Welcome back, {user.first_name}
            </p>
            <div className="flex md:justify-end w-full">
              <TabsList>
                <TabsTrigger value="overview">
                  <LayoutGrid />
                  Overview
                </TabsTrigger>
                <TabsTrigger value="detailed">
                  <List />
                  Detailed
                </TabsTrigger>
              </TabsList>
            </div>
          </div>
          <OverallReadinessCard />
          <TabsContent value="overview">
            <Dashboard />
          </TabsContent>
          <TabsContent value="detailed">
            <Dashboard expandable />
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
}
