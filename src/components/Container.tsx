import { FC, ReactNode } from "react";
import classnames from "classnames";

type ContainerProps = {
  children: ReactNode;
  paddingX?: "default" | string,
  className?: string;
};

const Container: FC<ContainerProps> = ({ className, paddingX = "default", children }) => {
  if (paddingX === "default") paddingX = "px-4"

  return (
    <div
      className={classnames(
        className,
        paddingX,
        "mx-auto w-full max-w-screen-2xl md:px-16 xl:px-32"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
