import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AllBlogsCard from "../Components/AllBlogsCard";
import { AuthContext } from "../Provider/AuthProvider";
import BlogSkeleton from "../Components/BlogSkeleton";
import { Helmet } from "react-helmet";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');
    const {loading, setLoading, theme} = useContext(AuthContext);




useEffect(() => {
    const fetchAllBlogs = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`https://new-blog-assignment-11-server.vercel.app/all-blogs?filter=${filter}&&search=${search}`);
        setAllBlogs(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchAllBlogs();
  }, [filter, search]);

  const handleReset = () => {
    setFilter('');
    setSearch('');
  };


    return (
        <div className={` flex items-center ${theme === 'dark' ? 'bg-black' : 'bg-white'} justify-center flex-col pt-10 pb-10 `}>
             <Helmet>
                <meta charSet="utf-8" />
                <title>Blog Sphere || All Blogs</title>
             
            </Helmet>
             <div className="flex items-center justify-center mb-10 ">
                    <h1 className="lg:text-6xl md:text-4xl text-2xl font-bold">All Blogs</h1>
                </div>
           
<div className="flex flex-col-reverse md:flex-row items-center gap-6">
            <div className="mx-auto  text-center flex items-center justify-center ">
               
            <select
                      id="category"
                      name="category"
                      value={filter}
                      className="w-full p-2 border rounded-lg shadow-sm  bg-white/20    hover:border-[#6663D6] focus:border-[#6663D6] focus:outline-none"
                      onChange={(e) => setFilter(e.target.value)}
                  >
                      <option className='text-black'  selected value="disabled">Filter By Category</option>
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
            <div className="flex gap-1">
            <label className="input input-bordered flex items-center">
  <input onChange={e => setSearch(e.target.value)} value={search} type="text" className="grow" placeholder="Search" />

</label>
<button 
onChange={e => setSearch(e.target.value)}
style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)"}} className="btn text-white text-lg">Search</button>
<button onClick={handleReset} className="btn md:ml-6 bg-red-500 text-white">Reset</button>
            </div>
         
            </div>
            <div className="mt-16 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-1  xl:grid-cols-2 gap-10">
            {loading
          ? Array.from({ length: 6 }).map((_, index) => <BlogSkeleton key={index} />) // Show skeleton loaders while loading
          : allBlogs.map((blog) => <AllBlogsCard key={blog._id} blog={blog} />)}
            </div>

        </div>
    );
};

export default AllBlogs;