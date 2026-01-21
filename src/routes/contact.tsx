import { createFileRoute } from "@tanstack/react-router";
import ContactCard from "@/components/ContactCard";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

function Contact() {
  return (
    <div className="max-w-[80vw] items-center flex fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <ContactCard />
    </div>
  );
}
