import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
    return (
    //     <div className="mx-auto h-full border gap-6 flex flex-col lg:flex-row justify-center items-center rounded-xl p-6 animate-pulse">
    //     <div className="lg:w-8/12">
    //       <Skeleton className="rounded-xl" height={275} width="100%" />
    //     </div>
    //     <div className="lg:w-9/12 flex flex-col items-start">
    //       <Skeleton className="mb-4" height={40} width="80%" />
    //       <Skeleton className="mb-2" height={20} width="90%" />
    //       <Skeleton className="mb-4" height={20} width="50%" />
    //       <div className="flex gap-4 justify-center lg:justify-start lg:mt-4 w-full">
    //         <Skeleton className="rounded" height={40} width={120} />
    //         <Skeleton className="rounded" height={40} width={120} />
    //       </div>
    //     </div>
    //   </div>


    <div className="border backdrop-blur-lg border-[#5451C4] shadow-lg shadow-purple-100 rounded-lg p-6 h-full animate-pulse">
    <Skeleton circle={true} height={80} width={80} className="mx-auto mb-4" />
    <Skeleton height={20} width="60%" className="mx-auto mb-2" />
    <Skeleton height={15} width="40%" className="mx-auto mb-4" />
    <Skeleton height={15} width="80%" className="mx-auto mb-2" />
    <Skeleton height={15} width="70%" className="mx-auto" />
  </div>
    );
};

export default Loading;