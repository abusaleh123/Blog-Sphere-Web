import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Base from "../Components/Base";
import AddBlogs from "../Pages/AddBlogs";
import AllBlogs from "../Pages/AllBlogs";
import Featured from "../Pages/Featured";
import WishList from "../Pages/WishList";
import Register from "../Pages/RegisterLogin/Register";
import Login from "../Pages/RegisterLogin/Login";
import BlogDetails from "../Pages/BlogDetails";
import PrivateRoute from "../Provider/PrivateRoute";
import UpdateBlog from "../Pages/UpdateBlog";
import AllReviews from "../HomePage/AllReviews";
import AddReviews from "../Pages/AddReviews";
import ErrorPage from "../Pages/ErrorPage";
import ContactUs from "../Pages/ContactUs";


const router = createBrowserRouter( [
    {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorPage></ErrorPage>
    } ,
   
    {
        path: '/',
        element: <Base></Base>,
   
        children: [
            {
                path: '/addBlogs',
                element: <PrivateRoute>
                    <AddBlogs></AddBlogs>
                </PrivateRoute>

            },
            {
                path: '/allBlogs',
                element: <AllBlogs></AllBlogs>

            },
            {
                path: '/featured',
                element:<Featured></Featured>,
               

            },
            {
                path: '/wishList',
                element: <PrivateRoute>
                    <WishList></WishList>
                </PrivateRoute>
                

            },
            {
                path: '/contact',
                element: <PrivateRoute>
                  <ContactUs></ContactUs>
                </PrivateRoute>
                

            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/blogs/:id',
                element: <BlogDetails></BlogDetails>,
                loader: ({params}) => fetch(`https://new-blog-assignment-11-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/updateBlog/:id',
                element: <PrivateRoute>
                    <UpdateBlog></UpdateBlog>
                </PrivateRoute>,
                loader: ({params}) => fetch(`https://new-blog-assignment-11-server.vercel.app/blogs/${params.id}`)
            },
            {
                path: '/all-reviews',
                element: <AllReviews></AllReviews>
            },
            {
                path: '/addReview',
                element: <AddReviews></AddReviews>
            }
           
        ]
    }
])

export default router;