import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const TestimonialSkeleton = () => {
  return (
    <section className="bg-white py-6">
      <div className="mx-auto px-4 text-center">
        <div className="border backdrop-blur-lg border-[#5451C4] shadow-lg shadow-purple-100 rounded-lg p-6 hover:shadow-lg transition duration-300 h-full">
          {/* Skeleton for image */}
          <Skeleton circle height={80} width={80} className="mx-auto mb-4" />
          
          {/* Skeleton for name */}
          <Skeleton height={20} width="60%" className="mx-auto mb-2" />

          {/* Skeleton for occupation */}
          <Skeleton height={15} width="40%" className="mx-auto mb-4" />
          
          {/* Skeleton for review text */}
          <Skeleton count={3} height={20} width="80%" className="mx-auto mb-4" />
        </div>
      </div>
    </section>
  );
};
export default TestimonialSkeleton