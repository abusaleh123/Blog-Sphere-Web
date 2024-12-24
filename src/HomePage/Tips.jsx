import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';
import { Link } from 'react-router-dom';

const Tips = () => {


    const [review, setReviews] = useState([]);

console.log(review);
    useEffect(() => {
        axios.get('http://localhost:5000/limit-reviews')
        .then(res => {
            console.log(res.data);
            setReviews(res.data)
        })
    },[])


 
      



    return (
        <div className='w-10/12 mx-auto'>
            <div className='text-center'>
            <h2 className="md:text-6xl text-2xl font-bold text-gray-800 mb-4">What Our Readers Say</h2>
    <p className="text-gray-600 mb-4">
      Hear from our valued readers about how our blogs have inspired and helped them.
    </p>
            </div>
            <div className='text-center'>
    <Link  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} to={'/addReview'} className='btn btn-ghost text-white text-lg '> Add Review</Link>
</div>
        

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
{
    review.map(rev => <ReviewCard key={rev._id} rev={rev}></ReviewCard>)
}
</div>

<div className='text-center'>
    <Link  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} to={'/all-reviews'} className='btn btn-ghost text-white text-lg w-2/4'> View All Review</Link>
</div>
<p className="mt-20 mb-20 border-t w-10/12 mx-auto"></p>

        </div>
    );
};

export default Tips;