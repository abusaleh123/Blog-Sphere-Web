import axios from "axios";
import { useEffect, useState } from "react";
import AllBlogsCard from "../Components/AllBlogsCard";


const AllBlogs = () => {
    const [allBlogs, setAllBlogs] = useState([]);
    const [filter, setFilter] = useState('');
    const [search, setSearch] = useState('');

console.log(filter);

useEffect(() => {
    const fetchAllBlogs = async () => {
        const {data} = await axios.get(`http://localhost:5000/all-blogs?filter=${filter}&&search=${search}`)
        setAllBlogs(data);
        
    }
    fetchAllBlogs()

},[filter, search])

const handleReset = () => {
    setFilter('')
    setSearch('')
}

    return (
        <div className="flex items-center justify-center flex-col mt-10  ">
             <div className="flex items-center justify-center mb-10 ">
                    <h1 className="lg:text-6xl text-2xl font-bold">All Blogs</h1>
                </div>
           
<div className="flex  items-center gap-6">
            <div className="mx-auto  text-center flex items-center justify-center">
               
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
                      <option className='text-black' value="Travel and Adventure">Travel and Adventure





</option>
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
            <div className="mt-16 w-11/12 mx-auto grid grid-cols-2 gap-10">
                {
                    allBlogs.map(blog => <AllBlogsCard key={blog._id} blog={blog}></AllBlogsCard>)
                }
            </div>

        </div>
    );
};

export default AllBlogs;