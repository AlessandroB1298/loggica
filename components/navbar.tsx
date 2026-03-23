import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/react";
import { Button } from "./ui/button";
import { LoggicaIcon } from "@/lib/icons/loggica-icon";
import Link from "next/link";

export default function NavbarComponent() {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand className="gap-1">
        <LoggicaIcon />
        <p className="font-bold text-inherit">LOGGICA</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#features">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#integrations">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="mt-1">
          <Button className="bg-blue-500 h-6 hover:bg-blue-500/90">
            <Link href={"/sign-up"}>
              <p className="text-blue-100">Sign Up</p>
            </Link>
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
