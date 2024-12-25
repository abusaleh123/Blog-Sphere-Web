import React, { useContext } from 'react';
import bg from '../../src/assets/Images/addBlogsbg.jpg'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import moment from 'moment';
import { Helmet } from 'react-helmet';




const AddBlogs = () => {
const {user}  = useContext(AuthContext)



  

    const handleAddBlogs = e => {
        e.preventDefault();
    
        const form = e.target;
        const title = form.title.value;
        const photo = form.photo.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        const category = form.category.value;
        const name = user.displayName;
 

        // console.log(title, photo, short_description, long_description, category);
        const email = user.email;
        let date = moment().format(" Do MMM YYYY,  h:mm:ss a");
        const newBlog = {title, photo, short_description, long_description, category, email, date, name};

axios.post('https://new-blog-assignment-11-server.vercel.app/blogs', newBlog)
.then(res => {
    // console.log(res.data);

    if(res.data.insertedId){
        Swal.fire({
            icon: "success",
            title: "Blog Add Successful!",
            text: "You Are Successfully Added A Blog",
         
            confirmButtonText: 'Close',
         
            showCancelButton: false,
            customClass: {
              confirmButton: 'custom-confirm-button',
            
              popup: 'custom-popup', 
              title: 'custom-title', 
              icon: 'custom-icon' ,
              
            },
            buttonsStyling: true
          });
          form.reset()
    }
})
.catch(error => {
    // console.log(error);
})
        
    }




    return (
        <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className="bg-white py-10    flex items-center justify-center ">
               <Helmet>
                <meta charSet="utf-8" />
                <title>Blog Sphere || Add Blogs</title>
             
            </Helmet>
       <div className='border-2 w-full md:w-9/12 lg:w-8/12 xl:w-5/12 lg:p-20 rounded-xl backdrop-blur-md'   >
      <div className="w-full lg:w-full border border-white-600 backdrop-blur-xl p-8 rounded-lg shadow-lg">
      <div >
          <form onSubmit={handleAddBlogs}  className="space-y-4 gap-6">
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
                      id="photo"
                      name="photo"
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
                  type='text'
                      id="short_description"
                      name="short_description"
                      
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
                  type='text'
                      id="long_description"
                      name="long_description"
                      
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
                      <option className='text-black' value="Web Development and Design">Web Development and Design</option>
                      <option className='text-black' value="Gaming and Entertainment">Gaming and Entertainment
                      </option>
                      <option className='text-black' value="Health and Wellness">Health and Wellness
                      </option>
                      <option className='text-black' value="Tech Trends and Gadgets">Tech Trends and Gadgets
                      </option>
                      <option className='text-black' value="Travel and Adventure">Travel and Adventure</option>
                      <option className='text-black' value="Business">Business</option>
                      <option className='text-black' value="LifeStyle">LifeStyle</option>
                      <option className='text-black' value="Finance">Finance</option>
                  </select>
              </div>

              

          
              <div className="col-span-1 md:col-span-2">
                  <button
                  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} 
                      type="submit"
                      className="w-full mx-auto mt-6 text-white  btn btn-ghost border-white text-md  md:text-lg font-bold py-2 rounded-lg hover:border transition"
                  >
                      Submit Blog
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