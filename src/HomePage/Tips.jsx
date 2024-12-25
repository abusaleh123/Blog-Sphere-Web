import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import TestimonialSkeleton from '../Components/TestimonilaSkeleton';

const Tips = () => {


    const [review, setReviews] = useState([]);
    const {loading, setLoading} = useContext(AuthContext)

// console.log(review);
    useEffect(() => {
        axios.get('https://new-blog-assignment-11-server.vercel.app/limit-reviews')
        .then(res => {
            // console.log(res.data);
            setReviews(res.data);
            setLoading(false)
        })
    },[])


 
      



    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-center'>
            <h2 className="lg:text-6xl md:text-4xl text-2xl font-bold text-gray-800 mb-4">What Our Readers Say</h2>
    <p className="text-gray-600 mb-4">
      Hear from our valued readers about how our blogs have inspired and helped them.
    </p>
            </div>
            <div className='text-center flex justify-center gap-2'>
    <Link  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} to={'/addReview'} className='btn btn-ghost text-white text-sm md:text-lg '> Add Review</Link>

    <div className='text-center'>
    <Link  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} to={'/all-reviews'} className='btn btn-ghost text-white text-sm md:text-lg '> View All Review</Link>
</div>

</div>
        

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 h-full">
{loading ? Array.from({length: 6 }).map((_, index) => <TestimonialSkeleton key={index}/>) :
    review.map(rev => <ReviewCard key={rev._id} rev={rev}></ReviewCard>)
}
</div>


<p className="mt-20 mb-20 border-t w-10/12 mx-auto"></p>

        </div>
    );
};

export default Tips;