import { Dashboard } from "@/components/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <div className="text-3xl font-semibold">Welcome back, John Doe</div>
      <Dashboard />
    </>
  );
}
