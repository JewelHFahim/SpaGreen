import "./Summery.css";
import img1 from "../../../assets/Clients-Presentation-02-1-1024x563.png";
import img2 from "../../../assets/Clients-Presentation-02-1-768x422.png";
import img3 from "../../../assets/Clients-Presentation-02-1-600x330.png";
import img4 from "../../../assets//Clients-Presentation-02-1-300x165.png";
import icon1 from "../../../assets/Experience.svg";
import icon2 from "../../../assets/Project-Delivered.svg";
import icon3 from "../../../assets/Happy-Clients.svg";
import icon4 from "../../../assets/100-Countries.svg";
import icon5 from "../../../assets/Team-Members.svg";

const Summery = () => {
  const datas = [
    {
      title: "4+ YEAR OF EXPERIENCE",
      icon: icon1,
    },
    {
      title: "300+ POJECT DELIVERED",
      icon: icon2,
    },
    {
      title: "4K+ HAPPY CLIENTS",
      icon: icon3,
    },
    {
      title: "100+ COUNTRIES",
      icon: icon4,
    },
    {
      title: "20+ EXPERTS",
      icon: icon5,
    },
  ];

  return (
    <section className="summery-container py-10 my-5 md:my-8 lg:my-10">


      <h1 className=" text-[24px] md:text-[30px] lg:text-[42px] font-semibold text-center lg:leading-[50px] ">
        We are Trusted <br /> 100+ Countries Worldwide
      </h1>

      <div className="flex justify-center items-center mt-16">
        <img src={img1} alt="" className="hidden lg:block" />
        <img src={img2} alt="" className="hidden md:block lg:hidden" />
        <img
          src={img3}
          alt=""
          className="hidden sm:block md:hidden lg:hidden"
        />
        <img src={img4} alt="" className=" sm:hidden md:hidden lg:hidden" />
      </div>

      <div className="flex justify-center items-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full md:[80%] lg:w-[60%] px-5 lg:px-0">
          {datas.map((data, idx) => (
            <div key={idx} className="border border-transparent hover:border hover:border-secondary flex flex-col justify-center items-center p-4 transform duration-200 cursor-text">
              <img src={data.icon} alt="" className="w-[40px]" />
              <p className="text-[14px] font-semibold text-primary text-center pt-2">{data.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Summery;
