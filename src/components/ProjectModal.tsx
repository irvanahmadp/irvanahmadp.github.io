import { FC } from "react";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { EyeIcon } from "@heroicons/react/outline";

import { Tags } from "src/components";
import { translation } from "src/hooks/useLanguage";

type ProjectModalProps = {
  isOpen: boolean;
  setIsOpen: any;
  data: ProjectModalDataProps;
};

export type ProjectModalDataProps = {
  title: string;
  "bg-color"?: string;
  tags: string[];
  slug: string;
  repository_url?: string;
  thumbnail?: string;
};

const ProjectModal: FC<ProjectModalProps> = ({ isOpen, setIsOpen, data }) => {
  const t = translation();

  return (
    <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
      <div className="fixed inset-0 z-20 flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black/75 text-white dark:bg-white/60 dark:text-black">
          <XIcon
            onClick={() => setIsOpen(false)}
            className="float-right m-1 h-8 w-8 cursor-pointer"
          />
        </Dialog.Overlay>
        <div className="relative mt-10 h-[calc(100%_-_2.5rem)] w-full overflow-x-auto rounded-t-xl bg-white p-8 dark:bg-slate-800 md:px-16 xl:px-32">
          <div className="flex items-center">
            <div className="flex-grow">
              <Dialog.Title className="cursor-default text-xl font-semibold md:text-3xl md:font-light">
                {data.title}
              </Dialog.Title>
            </div>

            <Link href={data?.slug}>
              <a className="mr-3 flex h-8 w-12 items-center justify-center rounded-md border-2 border-slate-300 text-slate-900 hover:bg-slate-200 focus:outline-none dark:border-slate-400 dark:text-slate-50 dark:hover:bg-slate-500 md:h-10 md:w-16">
                <EyeIcon
                  className="h-5 w-5 md:h-6 md:w-6"
                  style={{ strokeWidth: 1.2 }}
                />
              </a>
            </Link>

            {typeof data.repository_url !== "undefined" && (
              <a
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-12 items-center justify-center rounded-md border-2 border-slate-300 text-sm text-slate-900 hover:bg-slate-200 focus:outline-none dark:border-slate-400 dark:text-slate-50 dark:hover:bg-slate-500 md:h-10 md:w-16 md:pb-1 md:text-base"
                href={data.repository_url}
              >
                &lt; / &gt;
              </a>
            )}
          </div>

          <div className="my-2">
            <Tags variant="box" data={data.tags} className="grid" />
          </div>

          {typeof data.thumbnail === "undefined" ? (
            <div
              className={`${data["bg-color"]} my-4 flex h-60 w-full items-center justify-center rounded-lg text-center text-3xl text-white `}
            >
              {data.title}
            </div>
          ) : (
            <img
              alt={data.title}
              src={data.thumbnail}
              className="my-4 mx-auto rounded-lg"
            />
          )}
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
