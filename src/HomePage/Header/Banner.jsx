import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { motion } from "framer-motion";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
    return (
        <div>
             {/* <Swiper
      effect={'coverflow'}
      grabCursor= {true}
      centeredSlides={true}
      loop={true}
      slidesPerView= {'auto'}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5
      }}
      className='swiper_container'
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
      spaceBetween={50}
     
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img className='min-h-screen' src={photo1} alt="" />

      </SwiperSlide>
      <SwiperSlide> <img className='min-h-screen' src={photo2} alt="" /></SwiperSlide>
      <SwiperSlide>  <img className='min-h-screen' src={photo3} alt="" /></SwiperSlide>
      <SwiperSlide>  <img className='min-h-screen' src={photo4} alt="" /></SwiperSlide>
{/* <div className="slider-controler">
    <div className="swiper-button-prev slider-arrow">

    </div>
</div> */}

    {/* </Swiper> */}

<div className='w-11/12 mx-auto'>
<h1 className="lg:text-6xl font-bold text-[#29294B] w-3/4 text-center mx-auto  lg:mt-12  ">
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
        className="text-6xl "
  >
     Day
  </motion.span>{" "}</h1>
<p className="mt-6 w-8/12 lg:text-lg  text-center mx-auto font-bold text-[#A9A9B8]">A platform dedicated to discovering fresh ideas, sharing inspiring stories, and celebrating diverse perspectives that bring value and meaning to everyday life, fostering creativity, connection, and a deeper understanding of the world.</p>

<p className="mt-20 border-t w-10/12 mx-auto"></p>
</div>







        </div>
    );
};

export default Banner;