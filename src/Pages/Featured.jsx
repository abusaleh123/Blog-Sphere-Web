import axios from 'axios';
import React, { useEffect, useState } from 'react';
import FeaturedCard from '../Components/FeaturedCard';
import bg from '../assets/Images/blog-detailsbg.jpg'
import { Helmet } from 'react-helmet';

const Featured = () => {
        const [featured, setFeatured] = useState([])
            // console.log(featured);
      useEffect(() => {
        axios.get('https://new-blog-assignment-11-server.vercel.app/featuredBlogs')
        .then(res => {
            console.log(res.data);
            setFeatured(res.data);
        })
        .catch(error => {
            console.log(error);
        })
      },[])


    
    return (
        <div style={{backgroundImage: `url(${bg})`}} className='py-10'>
               <Helmet>
                <meta charSet="utf-8" />
                <title>Blog Sphere || Featured Blogs</title>
             
            </Helmet>
              <div className="flex items-center justify-center mb-10 ">
                    <h1 className="lg:text-6xl text-2xl font-bold mt-14">Featured Blogs
                    </h1>
                </div>

           <div >
           {
                featured.map(feature => <FeaturedCard key={feature._id} feature={feature}></FeaturedCard>)
            }
           </div>
          </div>
    );
};

export default Featured;