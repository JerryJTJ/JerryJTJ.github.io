import { createFileRoute } from "@tanstack/react-router";
import AboutCard from "@/components/AboutCard";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] md:max-w-[60vw]">
      <AboutCard />
    </div>
  );
}
