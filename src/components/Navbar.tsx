import { Link } from "@tanstack/react-router";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-10 p-5 flex flex-col gap-3 font-semibold items-center shadow-lg border-b w-screen border-foreground/20 bg-surface-quaternary/30 backdrop-blur-lg">
        <Link className="text-xl sm:text-3xl" to="/">
          JERRY JU
        </Link>
        <h1 className="ml-4 text-md sm:text-lg flex flex-row w-full justify-center gap-4 sm:gap-10">
          <Link to="/projects">PROJECTS</Link>
          <Link to="/experience">EXPERIENCE</Link>
          <Link to="/contact">CONTACT</Link>
        </h1>
      </header>
    </>
  );
}
