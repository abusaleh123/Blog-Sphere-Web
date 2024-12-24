import React from 'react';

const ReviewCard = ({rev}) => {
    return (
        <div>
            <section className="bg-white py-6 ">
  <div className=" mx-auto px-4 text-center ">
   
    <div className="">
      {/* Testimonial 1 */}
      <div className=" border backdrop-blur-lg border-[#5451C4] shadow-lg shadow-purple-100 rounded-lg p-6 hover:shadow-lg transition duration-300 h-full">
        <img
          src={rev.photo}
          alt="User Avatar"
          className="w-20 h-20 mx-auto mb-4 rounded-full object-cover"
        />
        <h3 className="text-lg font-semibold text-gray-800">{rev.name}</h3>
        <p className="text-sm text-gray-500">{rev.occupation}</p>
        <p className="text-gray-600 mt-4 h-20">
          {rev.review}
        </p>
      </div>

     
   
   
     
    </div>
  </div>
</section>

        </div>
    );
};

export default ReviewCard;