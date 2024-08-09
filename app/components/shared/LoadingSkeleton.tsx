import { FC } from "react";

interface LoadinProps {
  oneProduct?: boolean;
}
const LoadingSkeleton:FC<LoadinProps> = ({oneProduct = false}) => {
    return (
      <>
        {oneProduct ? (
          <div className="skeleton h-[150px] w-full"></div>
        ) : (
          <div className="flex w-full flex-col gap-4">
            <div className="skeleton h-32 w-full"></div>
            <div className="skeleton h-4 w-28"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
          </div>
        )}
      </>
    );
  };
  
  export default LoadingSkeleton;  