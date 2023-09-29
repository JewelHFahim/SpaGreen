import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import "./ClientReview.css";
import img1 from "../../../assets/zahir-4u.jpg";
import img2 from "../../../assets/caparkapa.jpg";

const ClientReview = () => {
  const datas = [
    {
      name: "Zahir4U, India",
      title: "CEO of the Company",
      img: img1,
    },
    {
      name: "Peter Castle, UK",
      title: "MD of the Company",
      img: img2,
    },
    {
      name: "Zahir4U, India",
      title: "CEO of the Company",
      img: img1,
    },
    {
      name: "Peter Castle, UK",
      title: "MD of the Company",
      img: img2,
    },
  ];



  return (
    <div className="ClientReview px-0 md:px-[40px] lg:px-[120px] py-14 lg:py-[100px]">
      <h1 className="text-[24px] md:text-[30px] lg:text-[42px] font-semibold text-primary text-center">
        Client Feedback Inspired us <br />
        To Do Someting Great Together
      </h1>

      <>
        <Swiper
      breakpoints={{
        768: {
          width: 768,
          slidesPerView: 1,
        },
      }}
     
          spaceBetween={80}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          className={`mt-8 lg:mt-16 px-5 md:px-8 lg:px-14 pb-10 reviewSlider`}
        >
          {datas.map((data, i) => (
            <SwiperSlide key={i}>
              <div className=" bg-white bg-opacity-[40%] shadow-xl relative flex justify-center w-full h-[36vh] z-0">
                <div className=" p-10 mt-[-20px] bg-white absolute w-[104%] shadow-lg">
                  <div className="flex items-center gap-8">
                    <img
                      src={data.img}
                      width={90}
                      height={90}
                      alt=""
                      className="rounded-full"
                    />
                    <div>
                      <h2 className="text-primary text-[22px] font-semibold">
                        {data.name}
                      </h2>
                      <p className="text-[#7A7A7A]">{data.title}</p>
                    </div>
                  </div>
                  <p className="mt-5">
                    &quot; Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Animi ipsa natus suscipit sit ea totam. Voluptate
                    voluptas expedita eaque accusamus aperiam maiores,
                    temporibus laborum&quot;
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
};

export default ClientReview;
