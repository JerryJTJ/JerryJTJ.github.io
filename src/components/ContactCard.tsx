import { Card, Link, Separator } from "@heroui/react";

const contacts = [
  {
    icon: "📧",
    link: "mailto:jerry.ju@uwaterloo.ca",
    text: "jerry.ju@uwaterloo.ca",
  },
  {
    icon: "💼",
    link: "https://ca.linkedin.com/in/jujerry",
    text: "linkedin.com/in/jujerry",
  },
  {
    icon: "💻",
    link: "https://github.com/JerryJTJ",
    text: "github.com/JerryJTJ",
  },
];

export default function ContactCard() {
  return (
    <Card
      className="w-100 border-fg bg-surface-quaternary/30 backdrop-blur-xs"
      variant="quaternary"
    >
      <Card.Header></Card.Header>
      <Card.Content>
        <div className="max-w-md flex flex-col items-center my-2">
          {contacts.map((item, index) => (
            <div key={index}>
              <div className="flex flex-row gap-3">
                <p className="text-lg text-foreground">{item.icon}</p>
                <Link
                  href={item.link}
                  rel="noopener noreferrer"
                  target="_blank"
                  underline="none"
                >
                  <p className="text-lg text-foreground">{item.text}</p>
                </Link>
              </div>
              {index < contacts.length - 1 && (
                <Separator className="my-4 bg-foreground/50" />
              )}
            </div>
          ))}
        </div>
      </Card.Content>
      <Card.Footer></Card.Footer>
    </Card>
  );
}
