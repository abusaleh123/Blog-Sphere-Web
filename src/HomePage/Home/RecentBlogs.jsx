import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import RecentBlogsCard from "../RecentBlogsCard";


const RecentBlogs = () => {
    const {user} = useContext(AuthContext);
    const [recent, setRecent] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/home-blogs')
        .then(res => {
            console.log(res.data);
            setRecent(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    },[])
    return (
        <div className="flex flex-col items-center text-center
         lg:mt-20">
            <div className="">
                <h1 className="text-6xl font-bold">Recent Blog Posts</h1>
                <p className="text-gray-500 mt-3"> Explore the latest blog posts with concise summaries, trending topics, and insightful content, all updated for your interest</p>
            </div>
            <div className="mt-16 w-11/12 mx-auto grid grid-cols-2 gap-10">
                {
                    recent.map(rec => <RecentBlogsCard key={rec._id} rec={rec}></RecentBlogsCard>)
                }
            </div>
            <p className="mt-20 border-t w-10/12 mx-auto"></p>
        </div>
    );
};

export default RecentBlogs;