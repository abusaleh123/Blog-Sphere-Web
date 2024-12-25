
import bg from '../../src/assets/Images/addBlogsbg.jpg'
import axios from 'axios';
import Swal from 'sweetalert2';
import { AuthContext } from '../Provider/AuthProvider';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
const AddReviews = () => {
    const navigate = useNavigate()

    const handleAddReview = e => {
        e.preventDefault();
    
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const occupation = form.occupation.value;
        const review = form.review.value;
    
    
 

        // console.log(title, photo, occupation, review);

        let date = moment().format(" Do MMM YYYY,  h:mm:ss a");
        const newReview = {name,  photo, occupation, review, date};

axios.post('https://new-blog-assignment-11-server.vercel.app/all-reviews', newReview)
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
    navigate('/all-reviews')
})
.catch(error => {
    // console.log(error);
})
        
    }






    return (
         <div style={{backgroundImage: `url(${bg})`, backgroundSize: 'cover'}} className="bg-white py-10    flex items-center justify-center ">
              <div className='border-2 w-full lg:w-5/12 lg:p-20 rounded-xl backdrop-blur-md'   >
             <div className="w-full lg:w-full border border-white-600 backdrop-blur-xl p-8 rounded-lg shadow-lg">
             <div >
                 <form onSubmit={handleAddReview}  className="space-y-4 gap-6">
                     <h2 style={{
        background: "linear-gradient(to top, #5350C3 10%, #8784F8 79%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent"
        }} className="lg:text-5xl   rounded-xl   font-bold text-center col-span-1 md:col-span-2 mb-4">
                         Add Review Form
                     </h2>
       
            
                    
                     
        
                     <div className="">
                         <label htmlFor="title" className="block mb-2">
                             Name
                         </label>
                         <input
                             type="text"
                             id="name"
                             name="name"
                             placeholder="Enter Your Name"
                             className="w-full p-2 border rounded-lg shadow-sm  bg-white/20   hover:border-[#6663D6]  focus:border-[#6663D6]   focus:outline-none"
                             required
                         />
                     </div>
       
       
                     <div className="">
                         <label htmlFor="cover" className="block mb-2">
                           Your Image (URL):
                         </label>
                         <input
                             type="url"
                             id="photo"
                             name="photo"
                             placeholder="Enter Your Image URL"
                             className="w-full p-2 border rounded-lg shadow-sm  bg-white/20  hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                             required
                         />
                     </div>
       
           
                     <div className="">
                         <label htmlFor="review" className="block mb-2">
                          Occupation
                         </label>
                         <input
                         type='text'
                             id="occupation"
                             name="occupation"
                             
                             placeholder="Write your Occupation"
                             className="w-full p-2 border rounded-lg shadow-sm  bg-white/20   hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                             required
                        />
                     </div>
           
                     <div className="">
                         <label htmlFor="review" className="block mb-2">
                           Review
                         </label>
                         <input
                         type='text'
                             id="review"
                             name="review"
                             
                             placeholder="Write your Review"
                             className="w-full p-2 border rounded-lg shadow-sm  bg-white/20   hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                             required
                        />
                     </div>
       
                 
               
       
                 
       
                     
       
                 
                     <div className="col-span-1 md:col-span-2">
                         <button
                         style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} 
                             type="submit"
                             className="w-full mx-auto mt-6 text-white  btn btn-ghost border-white text-md  md:text-lg font-bold py-2 rounded-lg hover:border transition"
                         >
                             Add Review
                         </button>
                     </div>
                 </form>
             </div>
            </div>
            </div>
         </div>
    );
};

export default AddReviews;