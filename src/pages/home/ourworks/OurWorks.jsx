import img1 from "../../../assets/Yoori-1.png";
import img2 from "../../../assets/Oxoo-UP.png";
import img3 from "../../../assets/Onno-1.png";
import img4 from "../../../assets/MeetAir-1.png";
import img5 from "../../../assets/Ovoo-UP.png";
import { BsArrowRight } from "react-icons/bs";

const OurWorks = () => {
  const ourWorks = [
    {
      title: "YOORI- The complete eCommerce Solution",
      des: "YOORI is a complete eCommerce solution for the most common shopping platforms. Web app, admin panel, mobile app, user app and a delivery app - all are perfectly build to provide the best eCommerce experience for single and multivendor businesses. Region specific payment gateways make it more unique while features like multiple language, hd quality image, category selection, and secured payment processing make Yoori perfect.",
      licence: "472+",
      rating: " 4.6",
      img: img1,
      left: true,
    },
    {
      title: "OXOO - Live TV & Movie Platform",
      des: "OXOO TV is an extention of OXOO & OVOO.You can use this script to make Android TV & Android TV Box Support. It is build for making the best Smart TV Experience. User can navigate movie,Serie and Live TV form All kind of Android OS Based Smart TV. Furthermore you can manage your web and app content together from a single panel.",
      licence: "1500+",
      rating: "4.44",
      img: img2,
      left: false,
    },
    {
      title: "ONNO - A Complete Web and Mobile Platform for News and Magazine",
      des: "ONNO is complete News & Magazine CMS to easily start your online news & magazine platform. The web app is built with laravel while the mobile app for android and iOS is built with Flutter. ONNO has most powerful admin panel for managing article, videos, polls, widgets. ONNO is a multipurpose application for blogging, business, portfolio, media, community, nonprofit website, and many more.",
      licence: "382+",
      rating: "4.86",
      img: img3,
      left: true,
    },
    {
      title:
        "MeetAir - Video Conference App for live class, meeting, online training",
      des: "MeetAir is complete video meeting system to easily start your online meeting platform. It has most powerful admin panel for manage meeting, history, notification, analytics, app configuration and many more. MeetAir was built with one of the best mobile development systems — Flutter. The app is compatible with both Android and iOS systems.",
      licence: "646+",
      rating: "4.9",
      img: img4,
      left: false,
    },
    {
      title: "OVOO - Live TV and movie portal cms",
      des: "OVOO is a powerful, flexible and user-friendly Live TV & Movie Portal CMS with advanced video contents management system. It&apos;s easy to use & install. It has been created to provide a unique experience to movie lovers & movie site owners. To observe of ISP needed we have made ovoo to use as multipurpose video cms.",
      licence: "1115+",
      rating: "4.1",
      img: img5,
      left: true,
    },
  ];

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

      <div>
        {ourWorks.map((item, i) => (
          <section
            key={i}
            className={`flex flex-col  ${
              item.left ? "lg:flex-row" : " lg:flex-row-reverse"
            } justify-between items-center bg-[#F9F9F9] mt-8 lg:mt-16 p-5`}
          >
            <div className="lg:w-1/2">
              <img src={item.img} alt="" />
            </div>

            <div className="lg:w-1/2">
              <h1 className="text-[20px] md:text-[30px] lg:text-[30px] font-semibold text-primary">
                {item.title}
              </h1>

              <p className="mt-10  text-primary leading-[28px]">{item.des}</p>

              <div className="flex gap-[40px] mt-[40px]">
                <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
                  License Sold <br />
                  <span className="text-primary text-[24px] lg:text-[32px]">
                    {item.licence}
                  </span>
                </p>
                <p className="text-[24px] font-[600] text-[#7A7A7A] leading-[40px]">
                  User Rating <br />
                  <span className="text-primary text-[24px] lg:text-[32px]">
                    {item.rating}
                  </span>
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
        ))}
      </div>
    </div>
  );
};

export default OurWorks;
