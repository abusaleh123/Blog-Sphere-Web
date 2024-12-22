import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AllBlogsCard = ({blog}) => {
    const {user} = useContext(AuthContext)
    const {title, photo, category, short_description, long_description} = blog;
const email = user.email;
// console.log(email);
    const newWishList = {title, email,  photo, category, short_description, long_description};

    const handleWisList = () => {
        axios.post('http://localhost:5000/wishList', newWishList)
        .then( res => {
            console.log(res.data);
            Swal.fire({
                icon: "success",
                title: "Wish List Add Successful!",
                text: "You Are Successfully Added Wish List",
              
                confirmButtonText: 'Close',
             
                showCancelButton: false,
                customClass: {
                  confirmButton: 'custom-confirm-button',
                
                  popup: 'custom-popup', 
                  title: 'custom-title', 
                  icon: 'custom-icon' ,
                  
                },
                buttonsStyling: true
              });
        })
    }
   
    return (
        <div className=" mx-auto">
           <div className="flex h-full border gap-6 items-center rounded-xl p-6">
           <div className="">
                <img className="rounded-xl w-[2000px] h-fit" src={photo} alt="" />
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-4"> {title}</h1>
                <p className="text-gray-500"> {short_description}</p>
                <p className="text-gray-500 font-bold mt-2"><span className="font-bold text-black">Category: </span>{category}</p>
                <div className="flex gap-4 mt-4">
                    <Link to={user ? `/blogs/${blog._id}` : `/login`} style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn text-white text-lg ">Blog Details</Link>
                    <button onClick={() => handleWisList(blog._id)} style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn text-white text-lg ">WishList</button>
                </div>
            </div>
           </div>
        </div>
    );
};

export default AllBlogsCard;