import Link from "next/link";
import classnames from "classnames";
import { useState, useRef, FC } from "react";
import { Transition } from "@headlessui/react";
import { HomeIcon, MenuIcon } from "@heroicons/react/solid";
import { Container } from "src/components";
import { translation } from "src/hooks/useLanguage";

type openParam = boolean;

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const buttonNavRef = useRef<HTMLButtonElement>(null);

  function handleNavButton(open: openParam) {
    setIsNavOpen(open);
    if (!open) {
      const buttonNavNode = buttonNavRef.current;
      buttonNavNode?.blur();
    }
  }

  return (
    <nav
      className={classnames(
        isNavOpen && "border-b-0 md:border-b",
        "fixed top-0 z-10 w-full border-b border-slate-300 bg-white/95 text-lg dark:border-slate-900 dark:bg-slate-900/75"
      )}
    >
      <Container className="flex h-14 items-center justify-between md:h-20">
        <Link href="/#home">
          <a>
            <HomeIcon className="hidden h-7 w-7 text-purple-500 dark:text-purple-300 md:inline" />
            <span className="font-medium md:hidden">Irvan Ahmad P.</span>
          </a>
        </Link>

        {/* mobile */}
        <div id="menu-mobile md:hidden">
          <button
            onClick={() => handleNavButton(!isNavOpen)}
            onBlur={() => handleNavButton(false)}
            ref={buttonNavRef}
            className={classnames(
              { "text-white": isNavOpen, "bg-purple-500": isNavOpen },
              "rounded-md p-2 md:hidden"
            )}
          >
            <MenuIcon className="h-7 w-7" />
          </button>

          <Transition
            show={isNavOpen}
            enter="transition duration-250"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition duration-250"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-x-0 top-14 flex flex-col border-b border-slate-300 dark:border-slate-900 md:relative md:hidden">
              <Menu />
            </div>
          </Transition>
        </div>

        {/* menu dektop */}
        <div id="menu-desktop" className="hidden md:inline">
          <div className="top-auto inline flex-row">
            <Menu />
          </div>
        </div>
      </Container>
    </nav>
  );
};

const Menu = () => {
  const t = translation();
  return (
    <>
      <NavLink href="/#home">{t.nav.home}</NavLink>
      <NavLink href="/#articles">{t.nav.articles}</NavLink>
      <NavLink href="/#projects">{t.nav.projects}</NavLink>
      <NavLink href="/#about">{t.nav.about}</NavLink>
    </>
  );
};

type NavLinkProps = {
  href: string;
  children: string;
};

const NavLink: FC<NavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href}>
      <a className="bg-white/95 p-2 px-4 font-light hover:bg-slate-200 hover:text-purple-500 dark:bg-slate-900/75 dark:hover:bg-slate-800 dark:hover:text-purple-300 md:bg-inherit md:px-2 md:font-normal md:hover:bg-inherit dark:md:bg-inherit dark:md:hover:bg-inherit">
        {children}
      </a>
    </Link>
  );
};

export default Nav;
