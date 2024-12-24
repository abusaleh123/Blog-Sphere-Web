import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllReviews = () => {
        const [allReview, setAllReview] = useState([]);


        useEffect(() => {
            axios.get('http://localhost:5000/all-reviews')
            .then(res => {
                console.log(res.data);
                setAllReview(res.data)
            })
        },[])

    return (
        <div className="mt-10 w-10/12 mx-auto">

<div className='text-center'>
            <h2 className="text-6xl font-bold text-gray-800 mb-4">All Reviews</h2>
    <p className="text-gray-600 mb-4">
      Hear from our valued readers about how our blogs have inspired and helped them.
    </p>
    <div className='text-center mb-12'>
    <Link  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} to={'/addReview'} className='btn btn-ghost text-white text-lg '> Add Review</Link>
</div>
            </div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center gap-6">
    
{
    allReview.map( review => (
        <>
             <div className=" border backdrop-blur-lg border-[#5451C4] shadow-lg shadow-purple-100 rounded-lg p-6 hover:shadow-lg transition duration-300 h-full">
        <img
          src={review.photo}
          alt="User Avatar"
          className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
        <p className="text-sm text-gray-500">{review.occupation}</p>
        <p className="text-gray-600 mt-4 h-20">
          {review.review}
        </p>
      </div>
        </>
    ))
}
</div>
         
        </div>
    );
};

export default AllReviews;