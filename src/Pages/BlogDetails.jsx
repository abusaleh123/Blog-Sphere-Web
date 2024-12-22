import { useLoaderData } from "react-router-dom";


const BlogDetails = () => {
    const blogDetails = useLoaderData();
    console.log(blogDetails);
    return (
        <div>
            Blog Details
        </div>
    );
};

export default BlogDetails;