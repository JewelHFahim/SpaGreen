import img1 from "../../../assets/himg1.svg";
import img2 from "../../../assets/himg2.svg";
import img3 from "../../../assets/himg3.svg";
import img4 from "../../../assets/himg4.svg";
import img5 from "../../../assets/himg5.svg";
import img6 from "../../../assets/himg6.svg";
import "./HeaderSection.css"

const HeaderSection = () => {
  return (
    <header className="headersection-container lg:h-screen flex flex-col lg:flex-row pt-5 lg:pt-0 px-5 md:px-10 lg:px-[120px] justify-between items-center font-Inter">

      <section className="w-full lg:w-1/2 text-center lg:text-left">

        <h1 className="text-[24px] md:text-[30px] lg:text-[42px] text-primary uppercase font-bold">
          Powerfull
          <span className="font-[200] mx-2">
            Product <br /> Oriented
          </span>
          Development
        </h1>

        <p className="text-[#7A7A7A] lg:text-[20px] lg:w-[80%] mt-5">
          Hire a team who can prepare your tech stack and software delivery
          process for a bright future, to gain a solid market lead.
        </p>

        <div className="bg-white shadow-lg rounded-lg text-[#161616] p-5 mt-12 lg:w-[85%]">
          <p>
            Empowering <span className="font-bold text-primary">5,0000+ </span>
            Businesses with Innovation
          </p>
          <div className="flex justify-center lg:justify-start items-center gap-5 mt-3">
            <img src={img1} alt="" className="w-[40px] h-[40px]"/>
            <img src={img2} alt="" className="w-[40px] h-[40px]"/>
            <img src={img3} alt="" className="w-[40px] h-[40px]"/>
            <img src={img4} alt="" className="w-[40px] h-[40px]"/>
            <img src={img5} alt="" className="w-[40px] h-[40px]"/>
          </div>
        </div>

      </section>

      <section className="w-full lg:w-1/2">
        <img src={img6} alt="" />
      </section>

    </header>
  );
};

export default HeaderSection;
