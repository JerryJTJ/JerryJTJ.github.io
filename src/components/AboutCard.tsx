import { Card, Link } from "@heroui/react";
import profilePic from "../media/pictures/profilepic.webp";
import resume from "../media/documents/resume.pdf";

export default function AboutCard() {
  return (
    <Card
      className="w-full flex md:flex-row border-fg bg-surface-quaternary/30 backdrop-blur-sm pb-0 items-center"
      variant="quaternary"
    >
      <div className="relative w-35 h-35 shrink-0 overflow-hidden rounded-2xl md:h-50 md:w-50 md:self-end self-center">
        <img
          alt="Self image"
          className="pointer-events-none absolute inset-0 h-full w-full object-contain select-none object-center"
          loading="lazy"
          src={profilePic}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <Card.Header className="gap-1">
          <Card.Title className="text-lg">Hey!</Card.Title>
        </Card.Header>
        <Card.Content className="flex flex-col mb-3">
          <span className="text-sm sm:text-base">
            Welcome to my website! I'm a UWaterloo graduate with a degree in
            Mechatronics Engineering (w/ Computing Option).
          </span>
          <span className="text-sm sm:text-base">
            I'll post my projects, experiences, and other random stuff here so
            keep an eye out and thanks for visiting!
          </span>
          <Link
            className="transition-[text-shadow] duration-300 hover:[text-shadow:0_0_10px_whitesmoke] text-sm sm:text-base"
            underline="none"
            href={resume}
          >
            For my resume, click here!
          </Link>
        </Card.Content>
      </div>
    </Card>
  );
}
