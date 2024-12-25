import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer"; 
import { AuthContext } from "../Provider/AuthProvider";
import ReviewSkeleton from "../Components/ReviewSkeleton";
import { Helmet } from "react-helmet";

const AllReviews = () => {
  const { loading, setLoading } = useContext(AuthContext);
  const [allReview, setAllReview] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const { ref: observerRef, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true); 
    }
  }, [inView]);

  useEffect(() => {
    axios
      .get("https://new-blog-assignment-11-server.vercel.app/all-reviews")
      .then((res) => {
        setLoading(false);
        setAllReview(res.data);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, [setLoading]);

  return (
    <div className="mt-10 w-10/12 mx-auto py-10">
         <Helmet>
                <meta charSet="utf-8" />
                <title>Blog Sphere || All Reviews</title>
             
            </Helmet>
      <div className="text-center">
        <h2 className="text-6xl font-bold text-gray-800 mb-4">All Reviews</h2>
        <p className="text-gray-600 mb-4">
          Hear from our valued readers about how our blogs have inspired and helped them.
        </p>
        <div className="text-center mb-12">
          <Link
            style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)" }}
            to={"/addReview"}
            className="btn btn-ghost text-white text-sm md:text-lg"
          >
            Add Review
          </Link>
        </div>
      </div>

      <div
        ref={observerRef} 
        className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-center gap-6 ${
          isVisible ? "animate-fadeIn" : "opacity-0"
        }`} 
      >
        {loading
          ? Array.from({ length: 6 }).map((_, index) => <ReviewSkeleton key={index} />)
          : allReview.map((review) => (
              <div
                key={review._id}
                className="border backdrop-blur-lg border-[#5451C4] shadow-lg shadow-purple-100 rounded-lg p-6 hover:shadow-lg transition duration-300 h-full"
              >
                <img
                  src={review.photo}
                  alt="User Avatar"
                  className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
                <p className="text-sm text-gray-500">{review.occupation}</p>
                <p className="text-gray-600 mt-4 h-20">{review.review}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default AllReviews;

