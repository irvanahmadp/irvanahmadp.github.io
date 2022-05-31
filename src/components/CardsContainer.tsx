import { FC, ReactNode } from "react";

type CardsContainer = {
  children: ReactNode;
};

const CardsContainer: FC<CardsContainer> = ({ children }) => {
  return (
    <div className="m-auto grid grid-cols-1 overflow-x-auto md:grid-cols-2 lg:grid-cols-3">
      {children}
    </div>
  );
};

export default CardsContainer;
