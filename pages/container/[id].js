import React,{useState} from "react";
import products from "../../data/ShopDeutsch.json";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
const Product = ({ product }) => {
   
  return (
    <div>
      <div className="container-fluid ProductPgBgColor">
        <div className="container mt-10">
          <div className="row mt-10">
            <div className="col-lg-7 col-md-12 col-sm-12 mt-10">
              <div>
                <Swiper
                  style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                  }}
                  loop={true}
                  navigation={true}
                  
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima4} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima5} />
                  </SwiperSlide>
                </Swiper>
                <Swiper
                 
                  loop={true}
                  spaceBetween={5}
                  slidesPerView={5}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima1} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima2} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima3} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima4} />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img className="product-page-img" src={product?.image?.ima5} />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-sm-12 p-5 bg-white border mt-10">
              asdasd
            </div>
          </div>
          <div className="mt-3 mb-3 pb-5 ">asdas</div>
        </div>
      </div>
    </div>
  );
};

export default Product;

export const getStaticPaths = async () => {
  const paths = products.map((pro) => {
    return {
      params: { id: pro.id },
    };
  });
  return {
    paths,
    fallback: true,
  };
};
export const getStaticProps = async (context) => {
  const product = products.find((pro) => pro.id === context.params.id);

  return {
    props: {
      product,
    },
  };
};
