import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import RecentBlogsCard from "../RecentBlogsCard";
import { motion } from "framer-motion";

const RecentBlogs = () => {
    const {user, setLoading} = useContext(AuthContext);
    const [recent, setRecent] = useState([])
    // useEffect(() => {
    //     axios.get('http://localhost:5000/home-blogs')
    //     .then(res => {
    //         console.log(res.data);
    //         setRecent(res.data);
    //         setLoading(true)
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // },[])




    const [loading, setLoadingState] = useState(true); // Manage loading state

    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:5000/home-blogs')
                .then(res => {
                    setRecent(res.data);
                    setLoadingState(false); // Stop loading after data fetch
                    setLoading(false);
                })
                .catch(error => {
                    console.log(error);
                    setLoadingState(false); // Stop loading on error
                });
        }, 2000); // Simulated delay (2 seconds)
    }, []);




    return (
        <div className="flex flex-col items-center text-center
         lg:mt-20 mt-10">
            <div className="">
                <motion.h1 
                 initial={{ opacity: 0, x: 0 }} 
                 animate={{ opacity: 1, x: 0 }}  
                 transition={{
                   duration: 1.5,       
                   ease: "easeInOut",     
                   repeat: Infinity,       
                   repeatType: "reverse", 
                 }} 
                  
                  
                className="text-6xl font-bold">Recent Blog Posts</motion.h1>
                <motion.p
                  initial={{ opacity: 0, x: 0 }} 
                  animate={{ opacity: 1, x: 0 }}  
                  transition={{
                    duration: 1.5,       
                    ease: "easeInOut",     
                    repeat: Infinity,       
                    repeatType: "reverse", 
                  }} 
                className="text-gray-500 mt-3"> Explore the latest blog posts with concise summaries, trending topics, and insightful content, all updated for your interest</motion.p>
            </div>
            <div className="mt-16 w-11/12 mx-auto text-center h-full items-center grid grid-cols-1 lg:grid-cols-2 gap-10">
                {
                    recent.map(rec => <RecentBlogsCard key={rec._id} rec={rec}></RecentBlogsCard>)
                }
            </div>
            <p className="mt-20 border-t w-10/12 mx-auto"></p>
        </div>
    );
};

export default RecentBlogs;