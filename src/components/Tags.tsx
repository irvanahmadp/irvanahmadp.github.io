import classnames from "classnames";
import { FC } from "react";

type TagsProps = {
  variant?: "box" | "text";
  data: string[];
  className?: string;
};

const Tags: FC<TagsProps> = ({ variant, data, className }) => {
  if (variant === "box") {
    return <BoxTag data={data} className={className} />;
  }

  return <TextTag data={data} className={className} />;
};

const BoxTag: FC<TagsProps> = ({ data, className }) => {
  const listItems = data?.map((tag, i) => (
    <span
      key={i}
      className={classnames(
        className,
        "rounded border border-slate-100 bg-slate-200 py-1 px-2 dark:border-slate-600 dark:bg-slate-500 md:py-1.5 md:px-3"
      )}
    >
      {tag}
    </span>
  ));

  return (
    <div className="my-0.5 flex flex-wrap gap-2 text-sm font-medium leading-3">
      {listItems}
    </div>
  );
};

const TextTag: FC<TagsProps> = ({ data }) => {
  const length = data.length - 1;
  const listItems = data?.map((tag, i) => {
    if (i !== length) {
      return (
        <li key={i} style={{ direction: "rtl" }}>
          {tag}{" "}
        </li>
      );
    }
    return (
      <li key={i} className="list-none">
        {tag}
      </li>
    );
  });

  return (
    <ul className="flex list-inside list-disc flex-wrap gap-1.5 font-medium">
      {listItems}
    </ul>
  );
};

export default Tags;
