import React, { useContext } from 'react';
import logo from '../assets/Images/blogger.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AuthContext } from '../Provider/AuthProvider';

const Footer = () => {
  const {theme} = useContext(AuthContext)
    return (
        <div>
     




<footer className={`${theme === 'dark' ? 'bg-black' :'bg-white'} text-white py-10`}>
      <div className="container mx-auto text-2xl text-gray-600 lg:flex  md:grid md:grid-cols-2 justify-between  gap-8 px-5 md:px-10">
        {/* Logo and Description */}
        <div className={`mb-4  ${theme === 'dark' ? 'text-white/50' : ''} lg:w-1/4`}>
       <img className='w-16' src={logo} alt="" />
          <p className="mt-3  text-lg">
          Stay connected with insightful blogs, latest updates, and creative ideas. Explore topics, follow us, and keep learning every day!
          </p>
          <p className="mt-5 text-lg">&copy; 2020 Blog Sphere. All Rights Reserved.</p>
        </div>

        {/* Links Section */}
        <div className={`mb-4  ${theme === 'dark' ? 'text-white/50' : ''}`}>
          <h2 className={`text-2xl   ${theme === 'dark' ? 'text-white/80' : ''} font-bold border-b-2  inline-block pb-1`}>
           Pages
          </h2>
          <ul className="mt-3 space-y-2 text-lg">
            <Link to={'/'}>Home</Link>
            <li><Link to={'/addBlogs'}>Add Blogs</Link></li>
            <li>All Blogs</li>
            <li>Featured Blogs</li>
            <li>Wish List</li>
          </ul>
        </div>

        {/* Others Section */}
        <div className={`mb-4  ${theme === 'dark' ? 'text-white/50' : ''}`}>
          <h2 className={`text-2xl ${theme === 'dark' ? 'text-white/80' : ''} font-bold border-b-2  inline-block pb-1`}>
          Categories
          </h2>
          <ul className="mt-3 space-y-2 text-lg">
            <Link >Web Development and Design</Link>
            <li>Gaming and Entertainment</li>
            <li>Health and Wellness</li>
            <li>Tech Trends and Gadgets</li>
            <li>Travel and Adventure</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className={`text-lg  ${theme === 'dark' ? 'text-white/50' : ''}`}>
          <h2 className={`text-2xl  ${theme === 'dark' ? 'text-white/80' : ''} font-bold border-b-2  inline-block pb-1`}>
            Others
          </h2>
          <p className="mt-3 text-lg font-bold">Follow us on Social Media</p>
          <div className="flex space-x-3 items-center   mt-4 ">
            <a href="https://www.facebook.com/mdabusalehnoor9" target='_blank' className="text-blue-500">
            <FaFacebook className='text-2xl' />
            </a>
            <a href="https://www.instagram.com/mdabusalehnoor9/" target='_blank' className="text-pink-500">
            <FaInstagram  className='text-2xl'/>
            </a>
            <a href="https://www.linkedin.com/" target='_blank' className="text-red-500">
            <FaYoutube className = "text-2xl" />
            </a>
            <a href="#" className="text-blue-700">
            <FaLinkedin className = "text-2xl"  />
            </a>
          </div>
         <p className="text-lg mt-6">Md Abu Saleh Noor</p>
        </div>
      </div>
    </footer>


        </div>
    );
};

export default Footer;