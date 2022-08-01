import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "@splidejs/react-splide/css";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const HomePageShop = ({ data }) => {
  return (
  <>
  <div className="container"> 
    <div className="row mb-2">
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
   
  {
    data.map(product=>(
        <SwiperSlide key={product.id}>
            <Link href={`/container/${product.id}`}> 
<div className=" mb-4 mb-lg-0 gx-3 mt-2 cursor-home-shop">
        <div className="card text-black">
          <Image
            width={306}
            height={229}
            src={product.image.ima1}
            className="card-img-top"
            alt="iPhone"
          />
          <div className="card-body card-info">
            <div className="text-center mt-1 ">
              <h4 className="card-title">{product.title}</h4>
              <h5 className="text-dark mb-1 pb-3">{product.content.text5}</h5>
              <h6 className="card-title mb-1 pb-3">{product.content.text2}</h6>
              <h6 className="card-title mb-1 pb-3">{product.content.text3}</h6>
              <h6 className="card-title mb-1 pb-3">{product.content.text6}</h6>
            </div>

         
          </div>
        </div>
      </div>
      </Link>
      </SwiperSlide>
    ))
  }
   </Swiper>
    </div>
  </div>
  </>
  );
};
export default HomePageShop;
