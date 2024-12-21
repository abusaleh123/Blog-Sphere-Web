import { createBrowserRouter } from "react-router-dom";
import Home from "../HomePage/Home/Home";
import Base from "../Components/Base";
import AddBlogs from "../Pages/AddBlogs";


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

            }
        ]
    }
])

export default router;