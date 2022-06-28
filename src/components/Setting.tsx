import { FC, ReactElement, MouseEventHandler, VFC } from "react";
import { useTheme } from "next-themes";
import { Listbox, Transition } from "@headlessui/react";
import { MoonIcon, SunIcon, DesktopComputerIcon } from "@heroicons/react/solid";
import classnames from "classnames";

import { useLanguage, translation } from "src/hooks/useLanguage";
import settings from "src/data/settings.json";

const themeColor =
  "border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800";
const divideColor = "divide-slate-300 dark:divide-slate-600";

const Setting = () => {
  return (
    <div
      className={classnames(
        themeColor,
        "fixed inset-y-0 right-0 z-10 my-auto flex h-20 flex-col overflow-hidden rounded-l-md border border-r-0"
      )}
    >
      <LanguageSetting />
      <hr className={themeColor} />
      <ThemeSetting />
    </div>
  );
};

type langParam = string;

const LanguageSetting = () => {
  const [language, setLanguage] = useLanguage();

  const handleChangeLanguage = (lang: langParam) => {
    setLanguage(lang);
  };

  if (language === "id") {
    return (
      <Switcher onClick={() => handleChangeLanguage("en")}>
        <img alt="US Flag" src="/flags/en-US.svg" className="h-6 w-6" />
      </Switcher>
    );
  }

  return (
    <Switcher onClick={() => handleChangeLanguage("id")}>
      <img alt="ID Flag" src="/flags/id-ID.svg" className="h-6 w-6" />
    </Switcher>
  );
};

const ThemeSetting = () => {
  const { theme, setTheme } = useTheme();
  const t = translation();

  return (
    <Listbox value={theme} onChange={setTheme}>
      <Listbox.Button>
        <Switcher>
          <ThemeIcon theme={theme} className="h-6 w-6" />
        </Switcher>
      </Listbox.Button>

      <Transition
        className="fixed right-14 -mt-5"
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options
          className={classnames(
            themeColor,
            divideColor,
            "cursor-pointer divide-y overflow-hidden rounded-lg border"
          )}
        >
          {settings.theme.map((themeName, i) => {
            return (
              <Listbox.Option
                key={i}
                value={themeName}
                className="px-4 py-2 text-sm font-semibold hover:bg-slate-300 dark:hover:bg-slate-600"
              >
                <ThemeIcon theme={themeName} className="inline h-5 w-5" />{" "}
                <span>{t.theme[themeName as keyof typeof t.theme]}</span>
              </Listbox.Option>
            );
          })}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

type SwitcherProps = {
  className?: string;
  children: ReactElement;
  onClick?: MouseEventHandler<HTMLDivElement>;
};

const Switcher: FC<SwitcherProps> = ({ className, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={classnames(
        className,
        "flex h-10 w-12 cursor-pointer items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-600"
      )}
    >
      {children}
    </div>
  );
};

type ThemeProps = {
  theme: string | undefined;
  className: string;
};

const ThemeIcon: FC<ThemeProps> = (props) => {
  const { theme, className } = props;

  if (theme === "dark") {
    return <MoonIcon className={className} />;
  } else if (theme === "light") {
    return <SunIcon className={className} />;
  }
  return <DesktopComputerIcon className={className} />;
};

export default Setting;
