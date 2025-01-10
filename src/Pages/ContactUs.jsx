import Swal from "sweetalert2";


const ContactUs = () => {


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
          <div className="bg-[#FCFCFF] lg:mt-16 mt-10 mb-10 min-h-screen">
              <section id="contact" class=" p-8">
    <div class="max-w-4xl mx-auto text-center">
      <h2 class="lg:text-6xl md:text-4xl text-2xl  font-bold text-gray-800 mb-4">Contact Us</h2>
      <p class="text-lg text-gray-600 mb-6">
      Welcome to our Contact page! We’re excited to hear from you. Whether you have a suggestion, feedback, or a question about our blog, this is the place to reach out. We believe in creating a community where your voice matters, and your input helps us grow and improve. Our team is dedicated to providing you with the best experience, and we’re here to address any concerns or inquiries you may have. Simply fill out the form below with your message, and we’ll get back to you as soon as possible. Whether it’s a suggestion for a new topic, feedback on our posts, or a question about our content, we’re eager to connect. If you have any suggestions or questions, don’t hesitate to message us. Your thoughts and opinions are invaluable, and we look forward to hearing from you!</p>
  
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
  
  export default ContactUs;