import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';
import moment from 'moment';
import Swal from 'sweetalert2';
import axios from 'axios';
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Zoom } from 'react-awesome-reveal';
const RecentBlogsCard = ({rec}) => {
    const {user, theme} = useContext(AuthContext);
    const {title, short_description, long_description, category, photo } = rec;
    // console.log(rec);
 let date = moment().format(" Do MMM YYYY,  h:mm:ss a");
 const blog_id = rec._id;
const email = user?.email
    const newWishList = {title,    photo, email, category, short_description, long_description, date, blog_id};

    const handleWisList = () => {
        axios.post('https://new-blog-assignment-11-server.vercel.app/wishList', newWishList)
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
    <div className="mx-auto h-full">
        <Zoom className='h-full'>
    <PhotoProvider className='h-full'>
      <motion.div
      
        className="lg:flex h-full border gap-6 justify-center mx-auto items-center rounded-xl p-6"
      >

        <div className="lg:w-8/12">
          <PhotoView src={photo}>
            <img
              className="rounded-xl mb-4 lg:mb-0 lg:h-[275px] object-cover cursor-pointer"
              src={photo}
              alt={title}
            />
          </PhotoView>
        </div>

        <div className={`lg:w-9/12 flex ${theme === 'dark' ? 'text-white': 'text-black'} flex-col items-start`}>
          <h1 className="md:text-4xl text-start lg:text-start text-2xl font-bold mb-4">
            {title}
          </h1>
          <p className={` ${theme === 'dark' ? 'text-white/60': 'text-gray-500'} text-start lg:text-start`}>{short_description}</p>
          <p className={` ${theme === 'dark' ? 'text-white/60': 'text-gray-500'} mb-4 lg:mb-0 font-bold mt-2 lg:text-start`}>
            <span className={`font-bold ${theme === 'dark' ? 'text-white': 'text-black'} text-black`}>Category: </span>
            {category}
          </p>
          <div className="flex gap-4 justify-center lg:justify-start lg:mt-4">
            <Link
              to={user ? `/blogs/${rec._id}` : `/login`}
              style={{
                background: 'linear-gradient(to top, #5350C3 10%, #8784F8 80%)',
              }}
              className="btn text-white text-lg"
            >
              Blog Details
            </Link>
            <Link
              onClick={user && handleWisList}
              to={user || `/login`}
              style={{
                background: 'linear-gradient(to top, #5350C3 10%, #8784F8 80%)',
              }}
              className="btn text-white text-lg"
            >
              WishList
            </Link>
          </div>
        </div>
      </motion.div>
    </PhotoProvider>
    </Zoom>
  </div>


    );
};

export default RecentBlogsCard;