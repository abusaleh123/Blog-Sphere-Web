import moment from "moment";
import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blogDetails = useLoaderData();
    // console.log(blogDetails);
    // const blogDetails = useLoaderData();
  const [comments, setComments] = useState([]);
 let date = moment().format(" D MM YY");
//  console.log(date);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (!newComment.trim()) return;

    const commentData = {
      id: Date.now(), // Temporary unique ID for comments
      userName: "Current User", // Replace with actual user data
      profilePic: "profile-pic-url", // Replace with actual profile picture URL
      comment: newComment,
    };

    // Add the new comment to the state
    setComments([...comments, commentData]);

    // Clear the textarea
    setNewComment("");
  };
    return (
      <div className="max-w-6xl mx-auto p-4 space-y-20 gap-6">
      {/* Blog Details Section */}
      <div className="flex-1 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{blogDetails.title}</h1>
        <p className="text-gray-600 mb-4">{blogDetails.description}</p>
        <p className="text-sm text-gray-500">
          Written by{" "}
          <span className="font-semibold">{blogDetails.authorName}</span> on{" "}
          <span>{blogDetails.publicationDate}</span>
        </p>
        <div className="mt-6">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            id="updateButton"
          >
            Update Blog
          </button>
        </div>
      </div>

      {/* Comments Section */}
      <div className="flex-[0.4] bg-gray-100 shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>

        {/* Conditional Comment Area */}
        <div id="commentArea" className="mb-6">
          <textarea
            className="w-full border border-gray-300 rounded-lg p-3 mb-4"
            placeholder="Write your comment here..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          ></textarea>
          <button
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={handleCommentSubmit}
          >
            Submit Comment
          </button>
        </div>

        {/* Comments List */}
        <div id="commentsList" className="space-y-4">
          {comments.map((comment) => (
            <div key={comment.id} className="flex items-start space-x-4">
              <img
                src={comment.profilePic}
                alt="User Profile"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold">{comment.userName}</p>
                <p className="text-gray-600">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    );
};

export default BlogDetails;