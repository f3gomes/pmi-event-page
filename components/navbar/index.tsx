"use client";

import React, { useEffect, useState } from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
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

interface NavbarProps {
  home: boolean;
}

function NavItem({ children, href, open, setOpen }: NavItemProps) {
  return (
    <li
      className="hover:text-blue-gray-500 transition duration-200 hover:scale-105"
      onClick={() => {
        open && setOpen(false);
      }}
    >
      <Link href={href || "#"} className="flex items-center gap-2 font-medium">
        {children}
      </Link>
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
    name: "Speakers",
    href: "#speakers",
  },
  {
    name: "Patrocínio",
    href: "#sponsor",
  },
  {
    name: "Data",
    href: "#timer",
  },
  {
    name: "Local",
    href: "#location",
  },
];

const Navbar = ({ home }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );

    if (!home) {
      setIsScrolling(true);
    }

    // eslint-disable-next-line
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
      className="fixed top-0 z-50 border-0 h-28"
    >
      <div className="container mx-auto h-full flex items-center justify-center">
        <Link href={"/"} className="absolute top-0 left-0">
          <Image
            priority
            width={0}
            height={0}
            sizes="100vw"
            src={"/logo/logo.png"}
            alt="logo"
            className="cursor-pointer w-auto h-28"
          />
        </Link>

        <div className="">
          <ul
            className={` hidden items-center gap-6 xl:flex ${isScrolling || !home ? "text-gray-900" : "text-white"
              }`}
          >
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={home ? href : `/${href}`}>
                <span className="font-medium">{name}</span>
              </NavItem>
            ))}
          </ul>
        </div>

        <Link
          target="_blank"
          className="absolute hidden xl:block xl:right-6"
          href={
            "https://www.sympla.com.br/evento/14-congresso-regional-de-gestao-projetos-e-lideranca-pmice/2441790"
          }
        >
          <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-gray-700 focus:z-10 focus:ring-4 focus:ring-gray-100">
            Comprar
          </button>
        </Link>

        <IconButton
          variant="text"
          color={isScrolling ? "gray" : "white"}
          onClick={handleOpen}
          className="ml-auto inline-block xl:hidden"
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
              <NavItem
                key={name}
                open={open}
                setOpen={setOpen}
                href={home ? href : `/${href}`}
              >
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
