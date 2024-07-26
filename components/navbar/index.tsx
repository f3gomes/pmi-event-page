"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import {
  Collapse,
  IconButton,
  Navbar as MTNavbar,
} from "@material-tailwind/react";
import { cn } from "@/utils/cn";
import BuyButton from "../buy-button";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
  open?: boolean;
  setOpen?: any;
}

interface NavbarProps {
  home: boolean;
}

const purchaseLink =
  "https://www.sympla.com.br/evento/14-congresso-regional-de-gestao-projetos-e-lideranca-pmice/2441790";

function NavItem({ children, href, open, setOpen }: NavItemProps) {
  return (
    <li
      className="hover:text-blue-gray-500 transition duration-200"
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
  {
    name: "Comprar",
    href: purchaseLink,
  },
];

const Navbar = ({ home }: NavbarProps) => {
  const [open, setOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
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

    function handleScrollButton() {
      if (window.scrollY > 500) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollButton);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollButton);
    };
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

        <BuyButton
          home={home}
          showButton={showButton}
          purchaseLink={purchaseLink}
        />

        <IconButton
          variant="text"
          color={"gray"}
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
              <>
                {name === "Comprar" ? (
                  <Link target="_blank" href={purchaseLink}>
                    <button className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-100 focus:outline-none bg-event-200 hover:brightness-125 hover:text-gray-200 rounded-lg border border-gray-200 focus:z-10 focus:ring-4 focus:ring-gray-100 transition duration-200">
                      Comprar
                    </button>
                  </Link>
                ) : (
                  <NavItem
                    key={name}
                    open={open}
                    setOpen={setOpen}
                    href={home ? href : `/${href}`}
                  >
                    {name}
                  </NavItem>
                )}
              </>
            ))}
          </ul>
        </div>
      </Collapse>
    </MTNavbar>
  );
};

export default Navbar;
