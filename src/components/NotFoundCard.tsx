import { Card } from "@heroui/react";
import { Link } from "@tanstack/react-router";

export default function NotFoundCard() {
  return (
    <Card
      className="w-100 border-fg bg-surface-quaternary/30 backdrop-blur-xs py-8"
      variant="quaternary"
    >
      <Card.Header className="flex w-full justify-center py-3">
        <p className="text-center text-lg font-semibold">Page Not Found!</p>
      </Card.Header>
      <Card.Content>
        <Link className="text-center" to="/">
          Click me to return home!
        </Link>
      </Card.Content>
    </Card>
  );
}
