

const Newsletter = () => {
    return (
        <div className="flex flex-col text-center items-center lg:mt-28 mt-10 mb-10">
     <div>
        <h1 className="lg:text-5xl font-bold mb-2">Subscribe to our Newsletter</h1>
        <p className="text-lg text-gray-500 w-3/4 text-center mx-auto mb-10">Subscribe to our email newsletter to get the latest posts delivered right to your email.</p>
     </div>
     <div className="flex">
        <label htmlFor="">
       
     <input
  type="text"
  placeholder="Type here"
  className="input py-7   max-w-xl" />

<button className="btn btn-ghost  border border-black  ">Submit</button>

  </label>

     </div>
        </div>
    );
};

export default Newsletter;