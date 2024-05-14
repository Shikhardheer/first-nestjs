"use client";
import React from "react";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Home"
          ></MenuItem>
        </Link>
        <MenuItem setActive={setActive} active={active} item="Our courses">
          <div className="flex flex-col space-y-4">
            <HoveredLink href="/allcourses">All courses</HoveredLink>
            <HoveredLink href="/courses">Data structures</HoveredLink>
            <HoveredLink href="/courses">Java script</HoveredLink>
            <HoveredLink href="/courses">React js</HoveredLink>
            <HoveredLink href="/courses"> Next js</HoveredLink>
          </div>
          
        </MenuItem>
        <Link href={"/addcourse"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Add course"
          ></MenuItem>
        </Link>
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={active}
            item="Contact us"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
