import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";


const Contact = () => {
  const {theme} = useContext(AuthContext)


    const onSubmit = async (event) => {
      event.preventDefault();
      const form = event.target;
      const formData = new FormData(event.target);
  
      formData.append("access_key", "df35083d-5d68-4a60-b076-562e9f65985f");
  
      const object = Object.fromEntries(formData);
      const json = JSON.stringify(object);
  
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
      }).then((res) => res.json());
  
      if (res.success) {
          Swal.fire({
               icon: "success",
               title: "Message Sent Successfully",
               text: "Your message has been sent to the authorities. ",
                
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
        form.reset()
      }
    };
      return (
          <div className={`  ${theme === 'dark' ? 'bg-black': 'bg-[#FCFCFF]'} lg:pt-20  pb-10`}>
              <section id="contact" class=" p-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class={`lg:text-6xl md:text-4xl text-2xl  font-bold ${theme === 'dark' ? 'text-white': 'text-gray-800'} mb-4`}>Contact Us</h2>
      <p class={`text-lg ${theme === 'dark' ? 'text-white/60' : 'text-gray-600'}  mb-6`}>Have any questions or feedback? We would love to hear from you!</p>
  
      <form onSubmit={onSubmit} method="POST" class="space-y-4">
      <div className="md:flex gap-6 ">
  
  
      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="text" placeholder="Your Name" name="name" className="input focus:outline-none input-bordered" required />
          </div>
      <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Your Email" name="email" className="input input-bordered focus:outline-none " required />
          </div>
          </div>
      
        <textarea name="message" placeholder="Your Message" class="w-full p-3  focus:outline-none  border border-gray-300 rounded-lg" rows="6" required></textarea>
        <button  style={{ background: "linear-gradient(to top, #5350C3 10%, #8784F8 80%)"}} type="submit" class="w-full py-3 text-lg font-bold bg-blue-500 text-white rounded-lg hover:bg-blue-600">Send Message</button>
      </form>
  
    </div>
  </section>
  
          </div>
      );
  };
  
  export default Contact;