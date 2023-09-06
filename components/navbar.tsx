import Link from "next/link";
import Container from "./container";
import MainNav from "./main-nav";
import { ThemeToggle } from "./theme-toggle";

const Navbar = async () => {
  return (
    <div className="border-b">
      <Container>
        <div className="flex h-16 items-center">
          <Link href="/">Admin</Link>
          <div>
            <MainNav className="mx-6" />
          </div>
          <div className="ml-auto flex items-center gap-x-4">
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
