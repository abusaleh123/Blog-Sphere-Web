import moment from "moment";
import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import bg from '../assets/Images/blog-detailsbg.jpg'
import useAxiosSecure from "../Hooks/useAxiosSecure";


const BlogDetails = () => {
    const blogDetails = useLoaderData();
    const {user} = useContext(AuthContext);
    const {id} = useParams();
    console.log(id);
    // console.log(email);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
const axiosSecure = useAxiosSecure()
console.log(blogDetails.id);




const handleCommentSubmit = (e) => {
  e.preventDefault();
  const email = user.email;
  const user_name = user.displayName;
  const user_profile = user.photoURL;
  const blogs_id = blogDetails._id;

  const brandNewComment = { blogs_id, email, user_name, user_profile, newComment };

  axios
    .post("http://localhost:5000/comments", brandNewComment)
    .then((result) => {
      console.log(result);
      setNewComment(""); // Clear the textarea
      fetchComments(); // Refresh the comments list
    })
    .catch((error) => {
      console.error( error);
    });
};

useEffect(() => {
  fetchComments();
}, []);

const fetchComments = () => {
axiosSecure
    .get(`/comments/${blogDetails._id}`)
    .then((res) => {
      setComments(res.data);
    })
    .catch((error) => {
      console.error(error);
    });
};

  
    return (
      <div  style={{backgroundImage :`url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center'}} className=" rounded-xl backdrop-blur-md mx-auto p-4 space-y-20 gap-6">
   <div className="max-w-6xl mx-auto">
    <div className="flex flex-col justify-center  gap-2  shadow-md rounded-lg p-6">
      <div className="border p-10 rounded-xl backdrop-blur-lg">
        <img className="rounded-xl w-full  object-cover" src={blogDetails.photo} alt="" />
      </div>
      <div className="flex-1 mt-6 ">
        <h1 className="text-3xl font-bold mb-4">{blogDetails.title}</h1>
        <p className="text-gray-600 mb-4"> <span className="text-black font-bold">Short Description : </span> {blogDetails.short_description}</p>
        <p className="text-gray-600 mb-4"> <span className="text-black font-bold">Long Description : </span> {blogDetails.long_description}</p>
        <p className="text-md text-gray-500">
          <p className="text-gray-500 font-bold mt-2 mb-2"><span className="font-bold text-black">Category: </span>{blogDetails.category}</p>
          Written by{" "}
          <span className="font-bold">{blogDetails.name}</span> on{" "}
          <span className="font-bold">{blogDetails.date}</span>
        </p>
        <div className="mt-6">
         {
            user.email === blogDetails.email ? <Link to={`/updateBlog/${blogDetails._id}`}
            style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)"}}
              className="btn  btn-ghost text-white text-lg font-bold py-2 px-4 rounded"
              id="updateButton" 
            >
              Update Blog
            </Link>  :  
            <>
            <h1 className="text-red-500">You Cannot update others Blog</h1></>
         }
        </div>
      </div>
    </div>

 
      <div className="flex-[0.4] backdrop-blur-lg bg-transparent    rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

    
        <div id="commentArea" className="mb-6">
         {
          user?.email === blogDetails.email ? <>
            <h1 className="text-red-500">You Cannot Comment on your own blog</h1>
          </> : <>
           <textarea
            className="w-full border   hover:border-[#6663D6]  focus:border-[#6663D6]   focus:outline-none  rounded-lg p-3 mb-4"
            placeholder="Write your comment here..."
            value={newComment}
            name="comment"
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
           style={{ background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)"}}
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCommentSubmit}
          >
            Submit Comment
          </button>
          </>
         }
        </div>

        <div id="commentsList" className="space-y-4 ">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4 border p-4 rounded-xl">
              <img
                src={comment.user_profile}
                alt="User Profile"
                className="w-16 h-16 object-cover rounded-full "
              />
              <div>
                <p className="font-semibold">{comment.user_name}</p>
                <p className="text-gray-600">{comment.newComment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
    
    );
};

export default BlogDetails;