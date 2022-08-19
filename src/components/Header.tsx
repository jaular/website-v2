import type { NavigationProps } from "~/lib/types";
import Link from "next/link";
import { Disclosure } from "@headlessui/react";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";
import ThemeButton from "~/components/ThemeButton";

const cn = (...classes: string[]) => {
  return classes.filter(Boolean).join(" ");
};

const navigation: NavigationProps[] = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/projects" },
  { name: "Blog", href: "/blog" },
];

type Props = {
  currentPage: string;
};

const Header = ({ currentPage }: Props) => {
  return (
    <Disclosure as="header" className="sticky top-0 z-30">
      {({ open }) => (
        <>
          <div className="max-w-2xl mx-auto bg-white dark:bg-black sm:px-6 lg:px-8 sm:bg-white/80 dark:sm:bg-black/80 sm:backdrop-blur-sm dark:sm:backdrop-blur-sm">
            <div className="flex justify-between h-16 px-4 border-b border-gray-300 sm:px-0 dark:border-gray-800">
              <div className="flex">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <a
                      aria-label="José Aular"
                      className="focus:outline outline-offset-4 focus:outline-1 focus:outline-blue"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 p-1 text-gray-800 rounded-md dark:text-gray bg-gray-200/50 dark:bg-black-600"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <polyline points="5 7 10 12 5 17"></polyline>
                        <line x1={13} y1={17} x2={19} y2={17}></line>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-10 sm:flex sm:space-x-8">
                  {navigation.map((nav) => (
                    <Link key={nav.name} href={nav.href}>
                      <a
                        className={cn(
                          nav.href == currentPage
                            ? "border-blue"
                            : "border-transparent hover:border-blue-400 focus:border-blue-400",
                          "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 text-gray-800 dark:text-gray focus:outline-none hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white"
                        )}
                      >
                        {nav.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <ThemeButton />
              </div>
              <div className="flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button className="inline-flex items-center justify-center ml-6 text-gray-800 dark:text-gray hover:text-black dark:hover:text-white focus:outline outline-offset-4 focus:outline-1 focus:outline-blue">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt4Icon
                      className="block w-6 h-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="bg-white dark:bg-black sm:hidden">
            <div className="p-4 space-y-4 border-b border-gray-300 dark:border-gray-800">
              {navigation.map((nav) => (
                <Link key={nav.name} href={nav.href}>
                  <a
                    className={cn(
                      nav.href === currentPage
                        ? "border-blue"
                        : "border-transparent hover:border-gray-800 dark:hover:border-gray-300 focus:border-gray-800 dark:focus:border-gray-300",
                      "block text-sm py-2 pl-3 pr-4 text-gray-800 dark:text-gray border-l-2 hover:bg-gray-100 dark:hover:bg-black-700 focus:outline-none focus:bg-gray-100 dark:focus:bg-black-700 hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white"
                    )}
                  >
                    {nav.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
