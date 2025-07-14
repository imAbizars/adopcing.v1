import React from "react";
import Logo from "@/components/layouts/navbar/NavLogo";
import NavItem from "@/components/layouts/navbar/NavItem";
import AuthButtons from "@/components/layouts/navbar/AuthButton";

export default function Navbar() {
  return (
    <nav className="border-b-4 sticky top-0 p-5 px-7 flex items-center justify-between bg-background z-99">
      <Logo />
      <ul className="flex space-x-6 font-medium">
        <NavItem href="#beranda" label="Beranda" />
        <NavItem href="#tentang" label="Addopt" />
        <NavItem href="#tentang" label="About Us" />
        <NavItem href="#tentang" label="Join Us" />
        <AuthButtons />
      </ul>
    </nav>
  );
}
