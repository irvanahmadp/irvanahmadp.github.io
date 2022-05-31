import { FC, ReactNode } from "react";

type CardsContainer = {
  children: ReactNode;
};

const CardsContainer: FC<CardsContainer> = ({ children }) => {
  return (
    <div className="m-auto grid grid-cols-1 gap-8 overflow-x-auto md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8">
      {children}
    </div>
  );
};

export default CardsContainer;
