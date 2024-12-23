import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
const WishListCard = ({wishListAdd}) => {
    // console.log(wishListAdd);
    const [wish, setWish] = useState([])


    
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
    


 
    const data = Array.isArray(wishListAdd) ? wishListAdd : [wishListAdd];
    return (
        <div className="lg:w-8/12 md:w-10/12 w-11/12 mx-auto space-y-20 mt-10  ">
           
        
            <DataTable
            className='space-y-4 text-xl  shadow-xl '
                columns={columns}
                data={data}
             
                customStyles={customStyles}
                responsive 
                highlightOnHover 
            />
        </div>
    );
};

export default WishListCard;