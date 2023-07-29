import classnames from "classnames";
import { FC, ReactNode } from "react";

type ButtonProps = {
  className?: string;
  children: ReactNode;
};

const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...restProps } = props;

  return (
    <button
      {...restProps}
      className={classnames(
        className,
        "duration-250 rounded bg-purple-700 px-4 py-2 font-semibold text-slate-50 transition-colors hover:bg-purple-500 dark:bg-purple-500 dark:hover:bg-purple-700"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
