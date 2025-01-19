"use client";

<<<<<<< HEAD
import React, { useState } from "react";
import { styles } from "../style";
import { Button } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import Image from "next/image";
import Link from "next/link";
import { SFRTNoText, SFRTLogo } from "../assets";
import {
  GitHub,
  LinkedIn,
  Language,
  Groups,
  Assignment,
} from "@mui/icons-material";

interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  { name: "Home", href: "/", current: true },
  { name: "teamPage", href: "/Team", current: false },
];

const Navbar = () => {
  const [isMobileMenuOpen, toggleMobileMenu] = useState(false);
  const smallScreenSize = useMediaQuery("(min-width:967px)");
  const mediumScreenSize = useMediaQuery("(min-width:1200px)");

  return (
    <>
      {smallScreenSize ? (
        <nav
          className={`${styles.paddingX} w-full flex py-5 fixed top-0 z-20 bg-black bg-opacity-80`}
          style={{ backdropFilter: "blur(10px)" }}
        >
          <div className="w-full flex justify-between items-center max-w-7xl mx-auto ">
            <Link href="/" className="mt-[3rem] mr-[-3.5rem]">
              <Image
                priority
                src={SFRTLogo}
                alt="logo"
                className={`h-[4.5rem] object-contain flex flex-start ${
                  smallScreenSize ? "logo-image" : "logo-image-small"
                }`}
              />
            </Link>
            {mediumScreenSize && (
              <ul className="list-none hidden sm:flex flex-row gap-10 sm:none">
                <li className="text-grey relative flex flex-row items-center rounded-sm">
                  <a
                    href="/solutions"
                    className="p-4 w-full flex items-center font-medium hover:text-[#86868b] duration-300 text-lg cursor-pointer"
                  >
                    Solutions
                  </a>
                </li>
                <li className="text-grey relative flex flex-row items-center rounded-sm">
                  <a
                    href="/about"
                    className="p-4 w-full flex items-center font-medium hover:text-[#86868b] duration-300 text-lg cursor-pointer"
                  >
                    About
                  </a>
                </li>
                <li className="text-grey relative flex flex-row items-center rounded-sm">
                  <a
                    href="/team"
                    className="p-4 w-full flex items-center font-medium hover:text-[#86868b] duration-300 text-lg cursor-pointer"
                  >
                    Our Team
                  </a>
                </li>
              </ul>
            )}
            <ul className="list-none hidden sm:flex flex-row gap-10 sm:none">
              <li>
                <a href="https://github.com/open-source-labs/ReacType">
                  <GitHub
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      "&:hover": { color: "#86868b" },
                    }}
                  />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/reactype">
                  <LinkedIn
                    sx={{
                      fontSize: "2.5rem",
                      color: "white",
                      "&:hover": { color: "#86868b" },
                    }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <header
          id="header"
          className={isMobileMenuOpen ? "active expanded-header" : ""}
        >
          <div className="container m-10">
            <nav className="nav">
              <ul className="nav-list nav-list-larger">
                {smallScreenSize && (
                  <li className="nav-item flex-start">
                    <a href="/" className="mt-[2rem]">
                      <Image
                        src={SFRTNoText}
                        alt="logo"
                        className="h-[2rem] object-contain flex flex-start logo-image"
                      />
                    </a>
                  </li>
                )}
                <li className="nav-item">
                  <a href="/solutions" className="nav-link">
                    <Language
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">Solutions</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/solutions" className="nav-link">
                    <Assignment
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">About</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="/team" className="nav-link">
                    <Groups
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">Our Team</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-[1.5rem]"
                    href="https://github.com/open-source-labs/ReacType"
                  >
                    <GitHub
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">GitHub</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link ml-[1.5rem]"
                    href="https://www.linkedin.com/company/reactype"
                  >
                    <LinkedIn
                      sx={{
                        fontSize: "2.5rem",
                        color: "white",
                        "&:hover": { color: "#86868b" },
                      }}
                    />
                    <span className="ml-6">LinkedIn</span>
                  </a>
                </li>
              </ul>
              <ul className="nav-list nav-list-mobile flex">
                <li className="left nav-item">
                  <a href="/" className="nav-link nav-link-cb">
                    <Image src={SFRTNoText} alt="logo" className=" mt-4" />
                  </a>
                </li>
                <li className="right nav-item">
                  <div
                    className="mobile-menu"
                    onClick={() => toggleMobileMenu(!isMobileMenuOpen)}
                  >
                    <span className="line line-top"></span>
                    <span className="line line-bottom"></span>
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </header>
      )}
    </>
  );
};

export default Navbar;
=======
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Fragment, useState } from "react";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import Image from "next/image";
import github from "public/github.svg";
import linkedin from "public/linkedin.svg";
import logo from "public/reactype.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  // { name: 'Tutorial', href: '/tutorial', current: false },
  // { name: 'Download', href: '/#download', current: false }, // uncomment if you want users to be able to download desktop version
  { name: "Meet the Team", href: "/team", current: false },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">ReacType</span>
            <Image
              className="h-8 w-auto"
              width={200}
              height={200}
              src={logo}
              alt="logo"
            />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-400"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <div className="flex gap-x-5 px-4 items-center">
            <a href="https://github.com/open-source-labs/ReacType">
              <Image
                className="h-8 w-auto"
                width={200}
                height={200}
                src={github}
                alt="logo"
              />
            </a>
            <a href="https://www.linkedin.com/company/reactype">
              <Image
                className="h-8 w-auto"
                width={200}
                height={200}
                src={linkedin}
                alt="logo"
              />
            </a>
          </div>
          <a
            href="https://app.reactype.dev/#/login"
            className="flex justify-center items-center relative overflow-hidden px-5 py-2.5 rounded-md bg-[#29A38A] font-medium"
          >
            Sign up
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">ReacType</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://app.reactype.dev/#/login"
                  className="flex justify-center items-center relative overflow-hidden px-5 py-2.5 rounded-md bg-[#006f73] font-medium"
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}
>>>>>>> 75f88c3b9f889899d21272961848f7c9ab42af1a
