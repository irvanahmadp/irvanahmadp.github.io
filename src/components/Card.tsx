import { FC } from "react";
import { Tags } from "src/components";

type CardProps = {
  title: string;
  thumbnail?: string;
  bgColor: string;
  placeholderText: string;
  tags: string[];
  onClick?: any;
};

const Card: FC<CardProps> = (props) => {
  const { title, thumbnail, bgColor, placeholderText, tags, ...restProps } =
    props;

  return (
    <div className="group cursor-pointer overflow-hidden" {...restProps}>
      <div className="relative text-2xl">
        {typeof thumbnail === "undefined" ? (
          <div
            className={`${bgColor} flex h-60 w-full items-center justify-center rounded bg-slate-700 px-2 text-center text-white`}
          >
            {title}
          </div>
        ) : (
          <img
            alt={title}
            src={thumbnail}
            className={`${bgColor} flex h-60 w-full items-center justify-center rounded object-contain`}
          />
        )}

        <div className="absolute inset-0 flex items-center justify-center rounded bg-black/75 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="text-xl font-semibold text-white">
            {placeholderText}
          </span>
        </div>
      </div>
      <div className="mt-0.5">
        <div className="mb-1 text-xl transition duration-300 group-hover:text-purple-500 dark:group-hover:text-purple-300">
          {title}
        </div>
        <Tags variant="box" data={tags} />
      </div>
    </div>
  );
};

export default Card;
