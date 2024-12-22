import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Base from "../Components/Base";
import AddBlogs from "../Pages/AddBlogs";
import AllBlogs from "../Pages/AllBlogs";
import Featured from "../Pages/Featured";
import WishList from "../Pages/WishList";


const router = createBrowserRouter( [
    {
        path: '/',
        element: <Home></Home>
    } ,
    {
        path: '/',
        element: <Base></Base>,
        children: [
            {
                path: '/addBlogs',
                element: <AddBlogs></AddBlogs>

            },
            {
                path: '/allBlogs',
                element: <AllBlogs></AllBlogs>

            },
            {
                path: '/featured',
                element:<Featured></Featured>

            },
            {
                path: '/wishList',
                element: <WishList></WishList>

            },
           
        ]
    }
])

export default router;