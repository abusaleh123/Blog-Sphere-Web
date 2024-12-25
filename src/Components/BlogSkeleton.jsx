import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const BlogSkeleton = () => {
  return (
    <div className="mx-auto">
    <div className="lg:flex h-full border gap-6  justify-center mx-auto  items-center rounded-xl p-6">
      {/* Skeleton for image */}
      <div className="w-8/12">
        <Skeleton height={275} width={300} className="rounded-xl lg:w-[355px] w-[300px]"  />
      </div>
      <div className="w-9/12">
        {/* Skeleton for title */}
        <Skeleton height={30} width="80%" className="mb-4" />

        {/* Skeleton for short description */}
        <Skeleton height={20} width="90%" className="mb-4" />

        {/* Skeleton for category */}
        <Skeleton height={20} width="60%" className="mb-4" />

        {/* Skeleton for buttons */}
        <div className="flex gap-4 mt-4">
          <Skeleton height={40} width={120} />
          <Skeleton height={40} width={120} />
        </div>
      </div>
    </div>
  </div>
  );
};

export default BlogSkeleton;