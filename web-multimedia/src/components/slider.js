import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import image1 from '../images/marvels.jpg'; // Import your images
import image2 from '../images/mad-max-furiosa.jpg';
import './slider.css'; // Import CSS for slider styling
import { Pagination, Navigation } from 'swiper/modules';
function MySwiper() {


  return (
    <div className="swiper-container">
   <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={image1} alt="Slide 1" className="swiper-image" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image2} alt="Slide 2" className="swiper-image" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default MySwiper;
