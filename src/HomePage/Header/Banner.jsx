import banner from '../../assets/Images/banner.jpg'


import { motion } from "framer-motion";

// Import Swiper styles


const Banner = () => {
    return (
        <div>
      
{/* Banner 1 */}
<div className='w-11/12 mx-auto md:hidden'>
<h1 className="lg:text-6xl text-2xl font-bold text-[#29294B] md:w-3/4 text-center mx-auto  lg:mt-12  mt-4">
<span style={{
 background: "linear-gradient(to top, #5350C3 0%, #8784F8 59%)",
 WebkitBackgroundClip: "text",
 WebkitTextFillColor: "transparent"
 }}>Exploring </span> Ideas, Sharing Stories, and Celebrating  Perspectives That Enrich Lives Every {' '}
  <motion.span
 animate={{
        // y:50,
        color:['#4287f5', '#ce42f5']
  }}
  transition={{
    duration: 2,
    ease: "easeInOut",
    repeat: Infinity
   
  }}
        className="md:text-6xl "
  >
     Day
  </motion.span>{" "}</h1>
<p className="mt-6 md:w-8/12 lg:text-lg  text-center mx-auto font-bold text-[#A9A9B8]">A platform dedicated to discovering fresh ideas, sharing inspiring stories, and celebrating diverse perspectives that bring value and meaning to everyday life, fostering creativity, connection, and a deeper understanding of the world.</p>


<p className="mt-20 border-t w-10/12 mx-auto"></p>
</div>
{/* Banner 1 End */}



{/* Banner2 */}
<div className=' mx-auto hidden md:block'>
  {/* parent */}
  <div style={{backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className=''> 
 <div className='py-72 text-center  inset-0 bg-black/80'>
 <p className='text-4xl mb-0 p-0 text-gray-400'>Everything you need</p>
 <h1 className="text-8xl mt-0 p-0 text-white font-semibold">
 welcome to <span className="text-[#5B58CB] text-9xl font-extrabold"> our blog</span></h1>
 <p className="text-lg mt-2 text-white"><span className='text-[#5B58CB] font-bold '>Home</span> / bloge-sphere</p>
 </div>
  </div>

</div>









        </div>
    );
};

export default Banner;