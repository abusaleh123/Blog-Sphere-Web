import React from 'react';
import bg from '../../src/assets/Images/addBlogsbg.jpg'




const AddBlogs = () => {
    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className="bg-white py-10    flex items-center justify-center ">
       <div className='border-2 w-full lg:w-5/12 lg:p-20 rounded-xl backdrop-blur-md'   >
      <div className="w-full lg:w-full border border-white-600 backdrop-blur-xl p-8 rounded-lg shadow-lg">
      <div >
          <form  className="space-y-4 gap-6">
              <h2 style={{
 background: "linear-gradient(to top, #5350C3 10%, #8784F8 79%)",
 WebkitBackgroundClip: "text",
 WebkitTextFillColor: "transparent"
 }} className="lg:text-5xl   rounded-xl   font-bold text-center col-span-1 md:col-span-2 mb-4">
                  Add Blog Form
              </h2>

     
             
              
 
              <div className="">
                  <label htmlFor="title" className="block mb-2">
                      Blog Title:
                  </label>
                  <input
                      type="text"
                      id="title"
                      name="title"
                      placeholder="Enter game title"
                      className="w-full p-2 border rounded-lg shadow-sm  bg-white/20   hover:border-[#6663D6]  focus:border-[#6663D6]   focus:outline-none"
                      required
                  />
              </div>


              <div className="">
                  <label htmlFor="cover" className="block mb-2">
                    Blog Image (URL):
                  </label>
                  <input
                      type="url"
                      id="cover"
                      name="cover"
                      placeholder="Enter game cover URL"
                      className="w-full p-2 border rounded-lg shadow-sm  bg-white/20  hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                      required
                  />
              </div>

    
              <div className="">
                  <label htmlFor="review" className="block mb-2">
                    Short Description:
                  </label>
                  <input
                      id="review"
                      name="review"
                      
                      placeholder="Write your Short Description"
                      className="w-full p-2 border rounded-lg shadow-sm  bg-white/20   hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                      required
                 />
              </div>
    
              <div className="">
                  <label htmlFor="review" className="block mb-2">
                    Long Description:
                  </label>
                  <input
                      id="review"
                      name="review"
                      
                      placeholder="Write your Long Description"
                      className="w-full p-2 border rounded-lg shadow-sm  bg-white/20   hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                      required
                 />
              </div>

          
        

          
              <div className="">
                  <label htmlFor="category" className="block mb-2">
                   Category
                  </label>
                  <select
                      id="category"
                      name="category"
                      className="w-full p-2 border rounded-lg shadow-sm  bg-white/20    hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                      required
                  >
                      <option className='text-black' disabled selected value="disabled">Select Category</option>
                      <option className='text-black' value="Action">Web Development and Design</option>
                      <option className='text-black' value="RPG">Gaming and Entertainment
                      </option>
                      <option className='text-black' value="Adventure">Adventure</option>
                      <option className='text-black' value="Puzzle">Gaming and Entertainment
                      </option>
                      <option className='text-black' value="Sports">Health and Wellness
                      </option>
                      <option className='text-black' value="Racing">Tech Trends and Gadgets
                      </option>
                      <option className='text-black' value="Run">Travel and Adventure





</option>
                  </select>
              </div>

              

          
              <div className="col-span-1 md:col-span-2">
                  <button
                  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} 
                      type="submit"
                      className="w-full mx-auto mt-6 text-white  btn btn-ghost border-white text-md  md:text-lg font-bold py-2 rounded-lg hover:border transition"
                  >
                      Submit Review
                  </button>
              </div>
          </form>
      </div>
     </div>
     </div>
  </div>
    );
};

export default AddBlogs;