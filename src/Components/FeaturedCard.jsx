



import React from 'react';
import DataTable from 'react-data-table-component';

const FeaturedCard = ({ feature }) => {
    // Example column definitions

    const {long_description, short_description} = feature;
    const descriptionLength = long_description ? long_description.length : 0;
    const shortDescription = short_description ? short_description.length : 0;
   

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
            name: 'Short Description (letter)',
            selector: row => shortDescription,
            sortable: true,
            cell: row => <span className='text-xl' style={{ fontWeight: 'bold ' }}>{shortDescription}</span>
        },
        {
            name: 'Long Description (letter)',
            selector: row => descriptionLength,
            sortable: true,
            cell: row => <span className='text-xl' style={{ fontWeight: 'bold ' }}>{descriptionLength}</span>
        },
      
       
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
    


 
    const data = Array.isArray(feature) ? feature : [feature];

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

export default FeaturedCard;


