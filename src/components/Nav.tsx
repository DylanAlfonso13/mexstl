"use client";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const navigation = [
  { name: "Home", esName: "Inicio", href: "/" },
  { name: "Media", esName: "Media", href: "/media" },
  { name: "Events", esName: "Eventos", href: "/events" },
  { name: "About Us", esName: "¿Quiénes somos?", href: "/about" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const pathname = usePathname(); // Get the current path
  const { language, toggleLanguage } = useLanguage();
  return (
    <Disclosure as="nav" className="bg-transparent">
      <div className="mx-auto max-w-8xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-end sm:items-stretch xs:justify-center sm:justify-between">
            <div className="flex shrink-0 items-center">
              <h1 className="text-gray-900 text-xl sm:text-2xl">
                Siempre Hemos Estado Aquí
              </h1>
            </div>
            <div className="hidden sm:ml-10 sm:flex sm:items-center">
              <div className="flex space-x-3 md:space-x-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <a
                      key={language === "en" ? item.name : item.esName}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={classNames(
                        isActive
                          ? "border-b-2 border-mexRed text-gray-900"
                          : "hover:border-b-2 hover:border-mexRed text-gray-900",
                        " text-base font-sans"
                      )}
                    >
                      {language === "en" ? item.name : item.esName}
                    </a>
                  );
                })}
                <button
                  onClick={toggleLanguage}
                  className="text-base font-sans text-mexRed"
                >
                  {language === "en" ? "Español" : "English"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <DisclosureButton
                key={language === "en" ? item.name : item.esName}
                as="a"
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={classNames(
                  isActive
                    ? "bg-primary text-mexRed"
                    : "text-gray-900 hover:bg-primary hover:text-mexRed",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
              >
                {language === "en" ? item.name : item.esName}
              </DisclosureButton>
            );
          })}
          <button
            onClick={toggleLanguage}
            className="text-base font-sans text-mexRed block rounded-md px-3 py-2"
          >
            {language === "en" ? "Español" : "English"}
          </button>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
