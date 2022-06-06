import { FC, ReactNode } from "react";
import classnames from "classnames";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container: FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={classnames(
        className,
        "mx-auto w-full max-w-screen-2xl px-4 md:px-16 xl:px-32"
      )}
    >
      {children}
    </div>
  );
};

export default Container;
