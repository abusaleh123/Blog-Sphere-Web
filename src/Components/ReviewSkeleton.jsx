import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ReviewSkeleton = () => {
    return (
        <div className="border backdrop-blur-lg border-[#5451C4] shadow-lg shadow-purple-100 rounded-lg p-6 h-full animate-pulse">
        <Skeleton circle={true} height={80} width={80} className="mx-auto mb-4" />
        <Skeleton height={20} width="60%" className="mx-auto mb-2" />
        <Skeleton height={15} width="40%" className="mx-auto mb-4" />
        <Skeleton height={15} width="80%" className="mx-auto mb-2" />
        <Skeleton height={15} width="70%" className="mx-auto" />
      </div>
    );
};

export default ReviewSkeleton;