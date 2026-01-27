import { Card } from "@heroui/react";
import { Link } from "@tanstack/react-router";

export default function NotFoundCard() {
  return (
    <Card
      className="w-100 border-fg bg-surface-quaternary/30 backdrop-blur-xs py-8 items-center"
      variant="quaternary"
    >
      <Card.Header className="flex justify-center py-3">
        <p className="text-center text-lg font-semibold">Page Not Found!</p>
      </Card.Header>
      <Card.Content className="size-fit">
        <Link className="text-center" to="/">
          Click me to return home!
        </Link>
      </Card.Content>
    </Card>
  );
}
