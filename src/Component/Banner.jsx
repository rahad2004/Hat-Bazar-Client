import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const banners = [
  {
    title: "Fresh Vegetables Everyday",
    image: "https://t3.ftcdn.net/jpg/01/63/13/30/360_F_163133061_TlMOMqgxAvBuwzLAjxOQ8v1FQ3OexfRG.jpg",
    category: "Vegetable",
  },
  {
    title: "Get Premium Meat at Best Price",
    image: "https://t3.ftcdn.net/jpg/02/09/64/32/360_F_209643298_Y7jHHYlAQo0kj9y4nT6hL8GXIT8Tevl3.jpg",
    category: "Meat",
  },
  {
    title: "Pure Cow Milk – Healthy Choice",
    image: "https://thumbs.dreamstime.com/b/farm-milk-banner-ads-splashing-liquid-green-grassland-d-illustration-141918652.jpg",
    category: "Milk",
  },
];

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3500 }}
        pagination={{ clickable: true }}
        loop={true}
        className="mb-6 rounded-lg overflow-hidden"
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-linear-65 from-[#0000004b] to-[#0000004b] flex items-center justify-center">
                <h2 className="text-white text-2xl md:text-4xl font-bold text-center">
                  {item.title}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
