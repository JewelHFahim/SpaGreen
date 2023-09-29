import "./Experience.css";

const Experience = () => {
  const datas = [
    {
      title: "Our Mission",
      des: "Our company also creates what customers require to realize their glamorous dreams.",
    },
    {
      title: "Our Vision",
      des: "Brands that are ready to work on the future, striving to do things better, are appealing to us.",
    },
    {
      title: "Our Philosophy",
      des: "We adheres to five core values of honesty, integrity, respect, perseverance, and leadership.",
    },
    {
      title: "Our Strategy",
      des: "We follow tailor made strategies before starting our projects to reduce complexity and meet the deadline.",
    },
  ];

  return (
    <section className="pb-10 lg:pb-14">

      <div className="experience-container px-5 md:px-[40px] lg:px-[120px] text-primary font-Inter py-5 md:py-8 lg:py-12">
        <h1 className="text-[24px] md:text-[30px] lg:text-[42px]  font-semibold lg:leading-[50px] lg:w-[50%]">
          The Evolution of Software Experience
        </h1>
        <p className="mt-5 md:mt-8 lg:mt-10 lg:w-[50%] lg:leading-[30px]">
          SpaGreen Creative is a
          <span className="text-secondary font-semibold"> top software company in Bangladesh. </span>
          SpaGreen Creative has been providing premium software services
          worldwide since 2018. Web application, Android app, and iOS app
          development services, in particular. We enjoy tackling difficult
          projects. Working with a variety of businesses throughout our career
          has been our greatest satisfaction. We deliver excellent services to
          our clients as a result of our hard work. We have a skilled team of
          engineers who have deep knowledge on latest technology. We achieved
          the elite author position on the Envato marketplace.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-5 md:px-[40px] lg:px-[120px] gap-5 ">
        {datas.map((data, i) => (
          <div key={i} className="p-5 hover:bg-slate-100 transform duration-150 rounded-lg vision_mission shadow-md">
            <h2 className="text-[20px] text-gray-400">{data.title}</h2>
            <p className="mt-4 text-primary">{data.des}</p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Experience;
