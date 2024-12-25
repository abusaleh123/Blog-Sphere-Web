import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import bg from '../assets/Images/blog-detailsbg.jpg'

import axios from 'axios';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const WishList = () => {
    const {user, setLoading} = useContext(AuthContext)
     const [wish, setWish] = useState([]);

   const axiosSecure = useAxiosSecure();
   
   
   
    useEffect(() => {
        if (user && user.email) {
            axiosSecure.get(`/wishList?email=${user.email}`)
                .then(res => {
                    console.log(res.data);
                    // setLoading(true);
                    setWish(res.data);
                    setLoading(true)
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }, [user.email]);


    const handleDelete = (id) => {
       

        
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            axios.delete(`http://localhost:5000/wishList/${id}`)
            .then(res => {
                console.log(res.data);
                // Filter the local state and remove the deleted item
                const newData = wish.filter(item => item._id !== id);
                setWish(newData);
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
            })
            .catch(error => {
                console.log(error);
            });
          }
        });
        
    };
       
       const columns = [
           {
               name: 'Photo',
               selector: row => <img className='w-16 md:w-40 rounded-xl p-2 mb-2' src={row.photo} alt="Photo" />,
               sortable: true,
           },
           {
               name: 'Title',
               selector: row => row.title,
               sortable: true,
               cell: row => <span style={{ fontWeight: 'bold' }}>{row.title}</span>,
           },
           {
               name: 'Category',
               selector: row => row.category,
               sortable: true,
               cell: row => <span style={{ fontWeight: 'bold' }}>{row.category}</span>
           },
           {
               name: 'Email',
               selector: row => row.email,
               sortable: true,
               cell: row => <span className='' style={{ fontWeight: 'bold ' }}>{row.email}</span>
           },
           {
               name: 'Date And Time',
               selector: row => row.date,
               sortable: true,
               cell: row => <span className='' style={{ fontWeight: 'bold ' }}>{row.date}</span>
           },
           {
               name: 'Details and Delete',
               selector: row => row.date,
               sortable: true,
               cell: row => <div className=''> 
               <Link   to={`/blogs/${row.blog_id}`} className='btn mr-2 text-white md:text-lg' style={{ fontWeight: 'bold ',  background: "linear-gradient(to top, #5350C3 10%, #8784F8 79%)" }}>Details</Link>
               <button onClick={() => handleDelete(row._id)} className='btn bg-red-600 text-white md:text-lg hover:bg-red-500' style={{ fontWeight: 'bold ' }}>Delete</button>
               </div>
           },

           // {
           //     name: 'Long Description (letter)',
           //     selector: row => descriptionLength,
           //     sortable: true,
           //     cell: row => <span className='text-xl' style={{ fontWeight: 'bold ' }}>{descriptionLength}</span>
           // },
         
          
       ];
   
   
       const customStyles = {
           headCells: {
               style: {
                   backgroundColor: '#f4f4f4',  
                   color: '#333',  
                   fontWeight: 'bold',  
                   fontSize: '16px',  
                   padding: '10px', 
                
                   textAlign: 'left',  
                  marginTop: '40px'
               },
           },
           cells: {
               style: {
                   padding: '8px',  
                   textAlign: 'left',  
               },
           },
       };
       const data =  Array.isArray(wish) ? wish : [wish];
    //   
    return (
        <div style={{backgroundImage: `url(${bg})`}} className='py-10' >
            <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto space-y-10 mt-0  ">

        
           
           <div className="flex items-center justify-center mb-10 ">
                    <h1 className="lg:text-6xl text-2xl font-bold mt-14">Blogs WishList
                    </h1>
                </div>
        <DataTable
        className='space-y-4 text-xl  shadow-xl '
            columns={columns}
            data={data}
         
            customStyles={customStyles}
            responsive 
            highlightOnHover 
            
        />
          </div>
    </div>
    );
};

export default WishList;