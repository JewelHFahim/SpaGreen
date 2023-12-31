import { FaUsers } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa6";
import { BiCommand } from "react-icons/bi";
import img1 from "../../assets/spa_clients-01.png";
import img2 from "../../assets/spa_clients-02.png";
import img3 from "../../assets/spa_clients-03.png";
import img4 from "../../assets/spa_clients-04.png";
import img5 from "../../assets/spa_clients-05.png";
// import img6 from "../../assets/spa_clients-06.png";
import img7 from "../../assets/spa_clients-07.png";
import img8 from "../../assets/our mission.jpg";
import img9 from "../../assets/our vission.jpg";
import "./AboutUS.css";

const AboutUs = () => {

  const images = [
    { img: img7 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    // { img: img6 },
    { img: img1 },
  ];
const responsivePadding = "p-5 md:px-[40px] lg:px-[60px] xl:px-[120px]";
const responsiveMargine = "md:py-[40px] lg:py-[70px] xl:py-[100px]"
  return (
    <section className="">

      <section className={`flex flex-col xl:flex-row justify-between gap-4  ${responsivePadding} ${responsiveMargine}`}>

        <div className="xl:w-[45%] text-primary">
          <h1 className="text-[24px] md:text-[30px] lg:text-[40px] font-semibold leading-[50px]">
            The Evolution of Software Experience
          </h1>
          <p className="lg:text-[18px] mt-6 text-justify">
            SpaGreen Creative is a top software company in Bangladesh. SpaGreen
            Creative has been providing premium software services worldwide
            since 2018. Web application, Android app, and iOS app development
            services, in particular. We enjoy tackling difficult projects.
          </p>
          <p className=" lg:text-[18px] my-4 text-justify">
            Working with a variety of businesses throughout our career has been
            our greatest satisfaction. We deliver excellent services to our
            clients as a result of our hard work.
          </p>
          <p className=" lg:text-[18px] font-semibold text-justify">
            We have a skilled team of engineers who have deep knowledge on
            latest technology. We achieved the elite author position on the
            Envato marketplace.
          </p>
        </div>

        <div className="xl:w-[55%] xl:pl-[50px] flex flex-col gap-y-5 md:gap-y-0 lg:gap-y-0 xl:gap-y-0 md:flex-row lg:flex-row xl:flex-row justify-center items-center">

          <div className="flex flex-col gap-y-5 md:gap-y-[30px] lg:gap-y-[60px] w-full md:w-1/2 lg:w-1/2 xl:w-1/2">

            <div className="flex flex-col gap-y-3 p-5  bg-[#F9F9F9]">
              <div className=" w-[50px] h-[50px] p-2 rounded-full bg-green-200 text-secondary flex justify-center items-center">
                <FaUsers className="text-[30px]" />
              </div>
              <h2 className="text-[20px] text-primary font-medium">Our Team</h2>
              <p className="text-primary">
                Having a network of fellow entrepreneurs and learning from their
                experiences keeps us aware of the real world.
              </p>
            </div>

            <div className="flex flex-col gap-y-3 p-5  bg-[#F9F9F9]">
              <div className=" w-[50px] h-[50px] p-2 rounded-full bg-green-200 text-secondary flex justify-center items-center">
                <BiCommand className="text-[30px]" />
              </div>
              <h2 className="text-[20px] text-primary font-medium">
                Our Community
              </h2>
              <p className="text-primary">
                Having a network of fellow entrepreneurs and learning from their
                experiences keeps us aware of the real world. Entrepreneurs and learning
              </p>
            </div>

          </div>

          <div className="flex flex-col gap-y-3 p-5  bg-[#F9F9F9] w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <div className=" w-[50px] h-[50px] p-2 rounded-full bg-green-200 text-secondary flex justify-center items-center">
              <FaRegHandshake className="text-[30px]" />
            </div>
            <h2 className="text-[20px] text-primary font-medium">
              Our Partners
            </h2>
            <p className="text-primary">
              Its an honor to be recognized as a partner by the organisations we
              have collaborated with.
            </p>
          </div>
        </div>

      </section>

      {/* Our Clients */}
      <div className={`bg-green-50 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 ${responsivePadding} ${responsiveMargine}`}>
        {images.map((img, i) => (
          <div key={i} className="servedClients w-[100px] xl:w-[150px] my-5 xl:my-10">
            <img src={img.img} alt="" className="object-cover" />
          </div>
        ))}
      </div>

      {/* Our Mission */}
      <section className={`bg-[#F9F9F9] ${responsivePadding} ${responsiveMargine}`}>

        <h1 className="text-[24px] md:text-[30px] lg:text-[42px] text-primary font-semibold text-center ">
          Our Mission
        </h1>

        <div className="flex flex-col xl:flex-row justify-between items-center">

          <div className="xl:w-1/2">
            <img src={img8} alt="" className="object-cover" />
          </div>

          <div className="xl:w-1/2 text-[17px] leading-8 p-5 text-primary">
            <p>
              SpaGreen Creative is the company to ensure a strong future through
              software development, with a focus on communication and
              networking.
            </p>

            <p className="my-7">
              We give priority to cutting-edge information skills/experiences as
              well as excellent human resources. We promote business with a
              strong spirit of always fulfilling customers’ requests. Our
              company also creates what customers require to realize their
              glamorous dreams. As a result, we contribute to the creation of a
              prosperous society. These are our driving forces.
            </p>

            <p>
              We have a team who have vast expertise to build custom software.
              Therefore, we help organizations to scale and achieve a
              competitive advantage by providing powerful and adaptable web and
              mobile solutions that meet the ultimate need of the clients
              worldwide.
            </p>
          </div>

        </div>

      </section>

      {/* Our Vision */}
      <section className={`${responsivePadding} ${responsiveMargine}`}>

        <h1 className="text-[24px] md:text-[30px] lg:text-[42px] text-primary font-semibold text-center ">
          Our Vision
        </h1>

        <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-5  lg:gap-0 xl:gap-0 mt-5 md:mt-5 lg:mt-0 xl:mt-0">

          <div className="xl:w-1/2 xl:text-[17px] leading-8 xl:p-5 text-primary">
            <p>
              We want to build a long term collaboration with clients all over
              the world by providing flexible partnership models, secured
              solutions, and ultimate trust.We like brands that are ready to
              start working on the future now, as well as people that always
              strive to do things better. We give priority to goal based work
              environment that ensures minimal timeframe with maximum service
              for a project. In our work journey we always try to maintain and
              follow these steps.
            </p>

            <p className="mt-5 mb-3">
              Create an action plan to reduce the cost, effort, duration, and
              risk of software projects by 10% than the previous year.
            </p>

            <p>
              Keeping transparency through performance data and detailed
              evaluations open to scrutiny at any times.
            </p>
          </div>

          <div className=" xl:w-1/2">
            <img src={img9} alt="" className="object-cover" />
          </div>
        </div>

      </section>
      

      {/* Our Philosophy & Our Strategy */}
      <section className={`bg-[#F9F9F9] ${responsivePadding} ${responsiveMargine}`}>

        <div className="flex flex-col xl:flex-row justify-between items-center">

          <div className="xl:w-1/2 xl:text-[17px] leading-8 p-5 text-primary">
            <h1 className="text-[24px] md:text-[30px] lg:text-[42px] text-primary font-semibold mb-6">
              Our Philosophy
            </h1>

            <p>
              We are constantly thinking about how we can improve our process,
              our equipment, and our social media impact so that we can lift the
              world from mediocrity to greatness as a software and application
              development firm.
            </p>

            <p className="my-4">
              We adheres to five core values of honesty, integrity, respect,
              perseverance, and leadership.
            </p>

            <p>
              We accomplish our goals through collaboration, and we maintain
              uncompromising integrity. We encourage flexibility and creativity.
            </p>
          </div>

          <div className="xl:w-1/2 xl:text-[17px] leading-8 p-5 text-primary">
            <h1 className="text-[24px] md:text-[30px] lg:text-[42px] text-primary font-semibold mb-6">
              Our Strategy
            </h1>

            <p>
              We are constantly thinking about how we can improve our process,
              our equipment, and our social media impact so that we can lift the
              world from mediocrity to greatness as a software and application
              development firm.
            </p>

            <p className="my-4">
              We adheres to five core values of honesty, integrity, respect,
              perseverance, and leadership.
            </p>

            <p>
              We accomplish our goals through collaboration, and we maintain
              uncompromising integrity. We encourage flexibility and creativity.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default AboutUs;
