import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css'; 
import "swiper/css";
import "swiper/css/bundle";
import patientAvatar from "../../assets/images/patient-avatar.png";
import avatar1 from "../../assets/images/avatar-01.jpg";
import avatar2 from "../../assets/images/avatar-02.jpg";
import avatar3 from "../../assets/images/avatar-03.jpg";
import avatar4 from "../../assets/images/avatar-04.jpg";
import avatar5 from "../../assets/images/avatar-05.jpg";
import { HiStar } from "react-icons/hi";

const Testimonial = () => {
  return (
    <div className="mt-[30px] lg:mt-[55px] bg-[#f5f3ff]">
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={avatar1}
                alt=""
                className="h-[50px] w-[50px] object-cover rounded-lg"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Aarav Sharma
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I had an excellent experience with MedConnect! The booking
              process was seamless, and my doctor was attentive and caring.
              Highly recommend!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={avatar2}
                alt=""
                className="h-[50px] w-[50px] object-cover rounded-lg"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Priya Patel
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "MedConnect has made managing my health so much easier. The app is
              user-friendly, and I love being able to access my medical records
              anytime."
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={avatar3}
                alt=""
                className="h-[50px] w-[50px] object-cover rounded-lg"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Rohan Gupta
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "The staff at MedConnect were professional and supportive. My
              appointment went smoothly, and I felt well taken care of. Thank
              you!"
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={avatar4}
                alt=""
                className="h-[50px] w-[50px] object-cover rounded-lg"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Vikram Rao
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "I appreciate the prompt service and the professionalism of the
              staff at MedConnect. They really took the time to address all my
              concerns. Highly satisfied!
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-[30px] px-5 rounded-3">
            <div className="flex items-center gap-[13px]">
              <img
                src={avatar5}
                alt=""
                className="h-[50px] w-[50px] object-cover rounded-lg"
              />
              <div>
                <h4 className="text-[18px] leading-[30px] font-semibold text-headingColor">
                  Sneha Verma
                </h4>
                <div className="flex items-center gap-[2px]">
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                  <HiStar className="text-yellowColor w-[18px] h-5"></HiStar>
                </div>
              </div>
            </div>
            <p className="text-[16px] leading-7 mt-4 text-textColor font-[400]">
              "MedConnect made my doctor's appointment so easy! The interface is
              intuitive, and the doctors are highly skilled. I felt very well
              cared for."
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
