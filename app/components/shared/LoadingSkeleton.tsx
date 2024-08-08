const LoadingSkeleton = () => {
    return (
      <div className="card bg-base-300 shadow-xl">
        <div className="bg-slate-950 min-h-[150px]"></div>
        <div className="card-body">
          <div className="bg-slate-800 min-w-[70%] min-h-[24px]"></div>
          <div className="bg-slate-800 min-w-[100%] min-h-[150px]"></div>
        </div>
      </div>
    );
  };
  
  export default LoadingSkeleton;  