import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';

const RecentBlogsCard = ({rec}) => {
    const {user} = useContext(AuthContext);
    const {title, short_description, long_description, category, photo } = rec;
    console.log(rec);
 let date = moment().format(" Do MMM YYYY,  h:mm:ss a");
 const blog_id = rec._id;
const email = user?.email
    const newWishList = {title,    photo, email, category, short_description, long_description, date, blog_id};

    const handleWisList = () => {
        axios.post('http://localhost:5000/wishList', newWishList)
        .then( res => {
            console.log(res.data);
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
        <div className=" mx-auto">
        <div className="flex h-full border gap-6 items-center rounded-xl p-6">
        <div className="w-8/12">
             <img className="rounded-xl w- h-[275px] object-cover" src={photo} alt="" />
         </div>
         <div className="w-9/12">
             <h1 className="text-4xl font-bold mb-4"> {title}</h1>
             <p className="text-gray-500"> {short_description}</p>
             <p className="text-gray-500 font-bold mt-2"><span className="font-bold text-black">Category: </span>{category}</p>
             <div className="flex gap-4 mt-4">
                 <Link to={user ? `/blogs/${rec._id}` : `/login`} style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn text-white text-lg ">Blog Details</Link>
                 <Link  onClick={user &&  handleWisList}  to={user ||  `/login`} style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn text-white text-lg ">WishList</Link>
             </div>
         </div>
        </div>
     </div>
    );
};

export default RecentBlogsCard;