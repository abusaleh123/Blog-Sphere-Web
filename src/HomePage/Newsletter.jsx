import { Bounce, toast, ToastContainer } from "react-toastify";


const Newsletter = () => {
    const handlePrevent = e=> {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value.trim()
        if(email){
            toast.success('Thank you for subscribing to our newsletter')
        }
        else{
            toast.error('Enter Your Email First')
        }
     
        form.reset('')
    }
    return (
        <div className="flex flex-col text-center items-center lg:mt-28 mt-10 mb-10">
     <div>
        <h1 className="lg:text-5xl font-bold mb-2">Subscribe to our Newsletter</h1>
        <p className="text-lg text-gray-500 w-3/4 text-center mx-auto mb-10">Subscribe to our email newsletter to get the latest posts delivered right to your email.</p>
     </div>
     <div className="flex border hover:border-[#6663D6]  focus:border-[#6663D6] shadow-xl rounded-xl   p-1">
        <form onSubmit={handlePrevent} action="">
        <label htmlFor="">
       
       <input
    type="email"
    name="email"
    placeholder="Your Email"
    className="input w-72   border-none focus:outline-none  max-w-xl" />
  
  <button  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} className="btn btn-ghost w-28 text-white text-lg ">Subscribe</button>
  
    </label>
  
        </form>
     </div>
        <p className="mt-20 mb-20 border-t w-10/12 mx-auto"></p>
     <ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
transition={Bounce}
/>
        </div>
    );
};

export default Newsletter;