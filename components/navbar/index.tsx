"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  open?: boolean;
  setOpen?: any;
}

function NavItem({ children, href, open, setOpen }: NavItemProps) {
  return (
    <li
      className="hover:text-blue-gray-500 transition duration-200 hover:scale-105"
      onClick={() => {
        open && setOpen(false);
      }}
    >
      <Typography
        as="a"
        href={href || "#"}
        variant="paragraph"
        className="flex items-center gap-2 font-medium"
      >
        {children}
      </Typography>
    </li>
  );
}

const NAV_MENU = [
  {
    name: "Início",
    href: "#",
  },
  {
    name: "Sobre",
    href: "#about",
  },
  {
    name: "Programação",
    href: "#speakers",
  },
  {
    name: "Datas",
    href: "#where",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      shadow={false}
      fullWidth
      blurred={false}
      color={isScrolling ? "white" : "transparent"}
      className="fixed top-0 z-50 border-0 h-28 flex justify-center"
    >
      <div className="container mx-auto h-full flex items-center justify-center absolute top-0">
        <Link href={"/"} className="absolute top-0 left-0">
          <Image
            priority
            width={0}
            height={0}
            sizes="100vw"
            src={"/logo/logo.png"}
            alt="testimonial image"
            className="cursor-pointer w-auto h-28"
          />
        </Link>

        <div className="">
          <ul className={"hidden items-center gap-6 lg:flex text-gray-900"}>
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                <span>{name}</span>
              </NavItem>
            ))}
          </ul>
        </div>

        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-gray-900">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href} open={open} setOpen={setOpen}>
                {name}
              </NavItem>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
};

export default Navbar;
