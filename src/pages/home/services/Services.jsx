import "./Services.css";
import img1 from "../../../assets/Web-Development-4-300x191.jpg";
import img2 from "../../../assets/Mobile-App-Development-2.jpg";
import img3 from "../../../assets/UI-UX.jpg";
import img4 from "../../../assets/Dev-Ops-2.jpg";
import img5 from "../../../assets/Cloud-Solutions.jpg";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      des: "A strong online presence is crucial for businesses to gain recognition. Our web developers can help with the toughest challenges.",
      img: img1,
    },
    {
      title: "Mobile App Development",
      des: "Our Apps are built with latest technology, easy to navigate, fast loading and user-friendly. Maintenance and support services are offered.",
      img: img2,
    },
    {
      title: "Product Design",
      des: "Our dedicated UI/UX designers will create a great-looking and functional website for you.",
      img: img3,
    },
    {
      title: "DevOps",
      des: "SpaGreen provides product delivery solutions by integrating DevOps and performance testing.",
      img: img4,
    },
    {
      title: "Cloud Solutions",
      des: "We can help your product become more scalable by moving it to the cloud. You will be able to scale your product as needed.",
      img: img5,
    },
  ];

  return (
    <section className=" px-5 md:px-[40px] lg:px-[120px] bg-[#F8F8F8] py-20">
      <section className="  font-Inter text-center">
        <h3 className="text-slate-400">Our Services</h3>
        <h1 className="text-[24px] md:text-[30px] lg:text-[42px] text-primary font-semibold  leading-[50px]">
          We Offer a Wide <br /> Variety of IT Services
        </h1>
      </section>

      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        {services.map((data, i) => (
          <div
            key={i}
            className="text-center text-primary shadow-lg rounded-[4px] overflow-hidden relative service"
          >
            <div className="p-10">
              <h2 className="text-[22px] font-semibold">{data.title}</h2>
              <p className="mt-4">{data.des}</p>
            </div>

            <div className="textPart">
              <h2 className="text-[22px] font-semibold">{data.title}</h2>
              <p className="mt-4">{data.des}</p>
            </div>

            <img
              src={data.img}
              alt=""
              className="object-cover w-full h-full service-img"
            />
          </div>
        ))}
      </section>
    </section>
  );
};

export default Services;
