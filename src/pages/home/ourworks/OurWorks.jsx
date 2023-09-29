import img1 from "../../../assets/Yoori-1.png";
import img2 from "../../../assets/Oxoo-UP.png";
import img3 from "../../../assets/Onno-1.png";
import img4 from "../../../assets/MeetAir-1.png";
import img5 from "../../../assets/Ovoo-UP.png";
import { BsArrowRight } from "react-icons/bs";

const OurWorks = () => {
  return (
    <div className=" lg:mt-20 px-5 md:px-[40px] lg:px-[120px]">

      <div className="text-center">
        <h1 className="text-[30px] lg:text-[42px] font-semibold text-primary">
          Our Works
        </h1>
        <p className="text-[#7A7A7A] lg:w-[70%] mx-auto my-5">
          Our premium products are specially designed to tackle your daily
          design/development issues. We know your daily struggles and come up
          with a solution that works.
        </p>
      </div>

      <section className="flex flex-col lg:flex-row justify-between items-center bg-[#F9F9F9] mt-8 lg:mt-16 p-5">
        <div className="lg:w-1/2">
          <img src={img1} alt="" />
        </div>

        <div className="lg:w-1/2">

          <h1 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-primary">
            YOORI- The complete eCommerce Solution
          </h1>

          <p className="mt-10  text-primary leading-[28px]">
            YOORI is a complete eCommerce solution for the most common shopping
            platforms. Web app, admin panel, mobile app, user app and a delivery
            app - all are perfectly build to provide the best eCommerce
            experience for single and multivendor businesses. Region specific
            payment gateways make it more unique while features like multiple
            language, hd quality image, category selection, and secured payment
            processing make Yoori perfect.
          </p>

          <div className="flex gap-[40px] mt-[40px]">
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              License Sold <br />
              <span className="text-primary text-[24px] lg:text-[32px]">472+</span>
            </p>
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              User Rating <br />
              <span className="text-primary text-[24px] lg:text-[32px]">4.6</span>
            </p>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <button className="border border-primary hover:border-secondary hover:text-secondary transform duration-150 px-6 lg:px-10 py-1 lg:py-2 lg:text-[24px] font-[500] rounded-md">
              Download
            </button>
            <BsArrowRight className="text-[20px] lg:text-[30px] text-[#7A7A7A]" />
          </div>
        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#F9F9F9] mt-8 lg:mt-16 p-5">

        <div className="lg:w-1/2">
          <h1 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-primary">
            OXOO - Live TV & Movie Platform
          </h1>
          <p className="mt-5 lg:mt-10 text-primary leading-[28px]">
          OXOO TV is an extention of OXOO & OVOO.You can use this script to make Android TV & Android TV Box Support. It is build for making the best Smart TV Experience. User can navigate movie,Serie and Live TV form All kind of Android OS Based Smart TV. Furthermore you can manage your web and app content together from a single panel.
          </p>

          <div className="flex gap-[40px] mt-[40px]">
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              License Sold <br />
              <span className="text-primary text-[24px] lg:text-[32px]">1500+</span>
            </p>
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              User Rating <br />
              <span className="text-primary text-[24px] lg:text-[32px]">4.46</span>
            </p>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <button className="border border-primary hover:border-secondary hover:text-secondary transform duration-150 px-6 lg:px-10 py-1 lg:py-2 lg:text-[24px] font-[500] rounded-md">
              Download
            </button>
            <BsArrowRight className="text-[20px] lg:text-[30px] text-[#7A7A7A]" />
          </div>

        </div>

        <div className="lg:w-1/2">
          <img src={img2} alt="" />
        </div>
      </section>

      <section className="flex flex-col lg:flex-row justify-between items-center bg-[#F9F9F9] mt-8 lg:mt-16 p-5">
        <div className="lg:w-1/2">
          <img src={img3} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-primary">
          ONNO - A Complete Web and Mobile Platform for News and Magazine
          </h1>
          <p className="mt-5 lg:mt-10 text-primary leading-[28px]">
          ONNO is complete News & Magazine CMS to easily start your online news & magazine platform. The web app is built with laravel while the mobile app for android and iOS is built with Flutter. ONNO has most powerful admin panel for managing article, videos, polls, widgets. ONNO is a multipurpose application for blogging, business, portfolio, media, community, nonprofit website, and many more.
          </p>

          <div className="flex gap-[40px] mt-[40px]">
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              License Sold <br />
              <span className="text-primary text-[24px] lg:text-[32px]">382+</span>
            </p>
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              User Rating <br />
              <span className="text-primary text-[24px] lg:text-[32px]">4.86</span>
            </p>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <button className="border border-primary hover:border-secondary hover:text-secondary transform duration-150 px-6 lg:px-10 py-1 lg:py-2 lg:text-[24px] font-[500] rounded-md">
              Download
            </button>
            <BsArrowRight className="text-[20px] lg:text-[30px] text-[#7A7A7A]" />
          </div>

        </div>
      </section>

      <section className="flex flex-col-reverse lg:flex-row justify-between items-center bg-[#F9F9F9] mt-8 lg:mt-16 p-5">
        <div className="lg:w-1/2">
          <h1 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-primary">
          MeetAir - Video Conference App for live class, meeting, online training
          </h1>
          <p className="mt-5 lg:mt-10 text-primary leading-[28px]">
          MeetAir is complete video meeting system to easily start your online meeting platform. It has most powerful admin panel for manage meeting, history, notification, analytics, app configuration and many more. MeetAir was built with one of the best mobile development systems — Flutter. The app is compatible with both Android and iOS systems.
          </p>

          <div className="flex gap-[40px] mt-[40px]">
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              License Sold <br />
              <span className="text-primary text-[24px] lg:text-[32px]">646+</span>
            </p>
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              User Rating <br />
              <span className="text-primary text-[24px] lg:text-[32px]">4.9</span>
            </p>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <button className="border border-primary hover:border-secondary hover:text-secondary transform duration-150 px-6 lg:px-10 py-1 lg:py-2 lg:text-[24px] font-[500] rounded-md">
              Download
            </button>
            <BsArrowRight className="text-[20px] lg:text-[30px] text-[#7A7A7A]" />
          </div>
        </div>

        <div className="lg:w-1/2">
          <img src={img4} alt="" />
        </div>
      </section>
      
      <section className="flex flex-col lg:flex-row justify-between items-center bg-[#F9F9F9] mt-8 lg:mt-16 p-5">
        <div className="lg:w-1/2">
          <img src={img5} alt="" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-primary">
          OVOO - Live TV and movie portal cms
          </h1>
          <p className="mt-5 lg:mt-10 text-primary leading-[28px]">
          OVOO is a powerful, flexible and user-friendly Live TV & Movie Portal CMS with advanced video contents management system. It’s easy to use & install. It has been created to provide a unique experience to movie lovers & movie site owners. To observe of ISP needed we have made ovoo to use as multipurpose video cms.
          </p>

          <div className="flex gap-[40px] mt-[40px]">
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              License Sold <br />
              <span className="text-primary text-[24px] lg:text-[32px]">1115+</span>
            </p>
            <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
              User Rating <br />
              <span className="text-primary text-[24px] lg:text-[32px]">4.1</span>
            </p>
          </div>

          <div className="flex items-center gap-8 mt-6">
            <button className="border border-primary hover:border-secondary hover:text-secondary transform duration-150 px-6 lg:px-10 py-1 lg:py-2 lg:text-[24px] font-[500] rounded-md">
              Download
            </button>
            <BsArrowRight className="text-[20px] lg:text-[30px] text-[#7A7A7A]" />
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurWorks;
