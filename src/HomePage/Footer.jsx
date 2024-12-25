import React from 'react';
import logo from '../assets/Images/blogger.png'
import { Link } from 'react-router-dom';
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
     




<footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 md:px-10">
        {/* Logo and Description */}
        <div>
       <img className='w-16' src={logo} alt="" />
          <p className="mt-3 text-sm">
          Stay connected with insightful blogs, latest updates, and creative ideas. Explore topics, follow us, and keep learning every day!
          </p>
          <p className="mt-5 text-xs">&copy; 2020 Blog Sphere. All Rights Reserved.</p>
        </div>

        {/* Links Section */}
        <div>
          <h2 className="text-lg font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Links
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <Link to={'/'}>Home</Link>
            <li><Link to={'/addBlogs'}>Add Blogs</Link></li>
            <li>All Blogs</li>
            <li>Featured Blogs</li>
            <li>Wish List</li>
          </ul>
        </div>

        {/* Others Section */}
        <div>
          <h2 className="text-lg font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Others
          </h2>
          <ul className="mt-3 space-y-2 text-sm">
            <Link >Terms of Service</Link>
            <li>Privacy Policy</li>
            <li>Something goes here</li>
            <li>Add Reviews</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h2 className="text-lg font-semibold border-b-2 border-blue-500 inline-block pb-1">
            Others
          </h2>
          <p className="mt-3 text-sm">Follow us on Social Media</p>
          <div className="flex space-x-3 items-center  mt-4 ">
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
         <p className="text-sm mt-6">Md Abu Saleh Noor</p>
        </div>
      </div>
    </footer>


        </div>
    );
};

export default Footer;