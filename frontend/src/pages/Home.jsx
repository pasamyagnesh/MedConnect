import React from "react";
import heroImg01 from "../assets/images/hero-img01.jpg";
// import heroImg02 from "../assets/images/hero-img02.jpg";
import heroImg02 from "../assets/images/hero-img02nobg.png";
import heroImg03 from "../assets/images/hero-img03nobg.png";
// import heroImg03 from "../assets/images/hero-img03.jpg";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      {/*---- hero section----*/}
      <section className="hero__section pt-[60px] 2xl:h-[800px] bg-[#f5f3ff] ">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/*-----hero content-----*/}
            <div>
              <div className="lg:w-[570px]">
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  {/* Connecting You to Better Health */}
                  Get connected, <br /> get cared for.
                </h1>
                <p className="text__para mt-[30px]">
                  MedConnect simplifies your healthcare journey by connecting
                  you with trusted doctors. Easily browse profiles, check
                  availability, and book appointments from the comfort of your
                  home. Whether you need a consultation or specialized care,
                  MedConnect ensures you get the attention you deserve – quickly
                  and conveniently.
                </p>
                <button className="btn">Request an Appointment</button>
              </div>
              {/*---hero counter-----*/}
              <div className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]">
                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-textColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </div>
            </div>
            {/*-----hero content-----*/}
            <div className="flex gap-[30px] justify-end">
              <div>
                <img
                  className="h-{524px] w-[370px] object-cover rounded-md"
                  src={heroImg01}
                  alt=""
                />
              </div>
              <div className="mt-[30px]">
                <img
                  src={heroImg02}
                  alt=""
                  className="w-[270px] h-[270px] object-cover rounded-md mb-[30px]"
                />
                <img
                  src={heroImg03}
                  alt=""
                  className="w-[270px] h-[270px] object-cover rounded-md mb-[30px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*---- hero section end----*/}
      <section className="bg-[#f5f3ff]">
        <div className="container">
          <div className="lg:w-[500px] mx-auto">
            <h2 className="heading text-center">
              Providing the best medical services
            </h2>
            <p className="text__para text-center">
              We connect you with highly qualified doctors to ensure you receive
              top-notch medical care, tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5 border-[2px] border-solid">
              <div className="flex items-center justify-center">
                <img src={icon01} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Doctor
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Easily search and find the right doctor for your healthcare
                  needs with just a few clicks.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 border-[2px] border-solid">
              <div className="flex items-center justify-center">
                <img src={icon02} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Find a Location
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Locate nearby clinics and healthcare centers for convenient
                  access to medical services.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>

            <div className="py-[30px] px-5 border-[2px] border-solid">
              <div className="flex items-center justify-center">
                <img src={icon03} alt="" />
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                  Book Appointment
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  Schedule your appointments effortlessly and secure your spot
                  with your chosen doctor.
                </p>

                <Link
                  to="/doctors"
                  className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      {/*-------services section-------*/}
      <section className="bg-[#f5f3ff]">
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__pata text-center mt-[20px]">
              Explore our comprehensive services tailored to meet your unique
              medical needs.
            </p>
          </div>
          <ServiceList />
        </div>
      </section>
      {/*-------services section end-------*/}

      {/*-----feature section--------*/}
      <section className="bg-[#f5f3ff]">
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/*--------feature content------*/}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get Virtual treatment <br /> Anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View your physicians who are accepting new patients, use
                  the online scheduling tool to select an appoitment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>
            {/*--------feature content end-------*/}

            {/*-----feature image-------*/}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img
                src={featureImg}
                className="w-3/4 h-[570px] object-cover"
                alt=""
              />
              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      {" "}
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center jsutify-center bg-yellowColor rounded py-1 px-[6px] lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>
                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
            {/*-----feature image end-------*/}
          </div>
        </div>
      </section>
      {/*-----feature section end--------*/}

      {/*-----our great doctors-------*/}
      <section className="bg-[#f5f3ff]">
        <div className="container">
          <div className="xl:w-[500px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__pata text-center mt-[20px]">
              Our experienced doctors offer compassionate, personalized care
              across specialties, ensuring you receive the best medical
              attention.
            </p>
          </div>
          <DoctorList />
        </div>
      </section>
      {/*-----our great doctors end-------*/}

      {/*------faq section---------*/}
      <section className="bg-[#f5f3ff]">
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img
                src={faqImg}
                alt=""
                className="h-[675px] w-[470px] rounded-md"
              />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions asked by our beloved customers.
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/*------faq section end---------*/}

      {/*------testimonial---------*/}
      <section className="bg-[#f5f3ff]">
        <div className="container">
          <div className="xl:w-[500px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              We value patient feedback and take pride in our care; here are
              testimonials from those who trust us with their health.
            </p>
          </div>
          <Testimonial />
        </div>
      </section>
      {/*------testimonial end---------*/}
    </>
  );
};

export default Home;
