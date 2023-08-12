import brand1 from "../../../../assets/brand/brand-1.jpg";
import brand2 from "../../../../assets/brand/brand-2.jpg";
import brand3 from "../../../../assets/brand/brand-3.jpg";
import brand4 from "../../../../assets/brand/brand-4.jpg";
import brand5 from "../../../../assets/brand/brand-5.jpg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

const TopBrand = () => {
  return (
    <div className="mx-6 p-4">
      <h2 className=" font-bold text-3xl mb-10 text-center ">
        Our <span className="text-teal-400">Brand</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation={{clickable: true}}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <img className="w-full h-56 object-cover" src={brand1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-56 object-cover" src={brand2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-56 object-cover" src={brand3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-56 object-cover" src={brand4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full h-56 object-cover" src={brand5} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TopBrand;
