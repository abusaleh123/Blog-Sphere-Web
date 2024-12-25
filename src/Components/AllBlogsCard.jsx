import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
// import { motion } from "framer-motion";

const AllBlogsCard = ({blog}) => {
    const {user} = useContext(AuthContext)
    const {title, photo, category, short_description, long_description} = blog;
const email = user?.email;
 let date = moment().format(" Do MMM YYYY,  h:mm:ss a");
 const blog_id = blog._id;
//  console.log(blog_id);
// console.log(date);
    const newWishList = {title,    photo, email, category, short_description, long_description, date, blog_id};

    const handleWisList = () => {
        axios.post('https://new-blog-assignment-11-server.vercel.app/wishList', newWishList)
        .then( res => {
            // console.log(res.data);
            Swal.fire({
                icon: "success",
                title: "Wish List Add Successful!",
                text: "You Are Successfully Added Wish List",
              
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
        })
    }
   
    return (
        <div className=" mx-auto h-full">
        <div 
        animate={{ x: 10}}
        transition={{ duration: 1 }}
        className="lg:flex h-full border gap-6  justify-center mx-auto  items-center rounded-xl p-6">
        <div className="lg:w-8/12">
             <img className="rounded-xl mb-4 lg:mb-0 lg:h-[275px] object-cover" src={photo} alt="" />
         </div>
         <div className="lg:w-9/12 flex flex-col items-start">
             <h1 className="md:text-4xl text-start lg:text-start text-2xl font-bold mb-4"> {title}</h1>
             <p className="text-gray-500 text-start lg:text-start "> {short_description}</p>
             <p className="text-gray-500 mb-4 lg:mb-0 font-bold mt-2 lg:text-start"><span className="font-bold text-black ">Category: </span>{category}</p>
             <div className="flex gap-4 justify-center lg:justify-start lg:mt-4">
                 <Link to={user ? `/blogs/${blog._id}` : `/login`} style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn text-white text-lg ">Blog Details</Link>
                 <Link  onClick={user &&  handleWisList}  to={user ||  `/login`} style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn text-white text-lg ">WishList</Link>
             </div>
         </div>
        </div>
     </div>
    );
};

export default AllBlogsCard;