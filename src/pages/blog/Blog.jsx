import "./Blog.css";
import { HiArrowLongRight } from "react-icons/hi2";
import img1 from "../../assets/Why-yoori-is-the-best-choice.jpg";
import img2 from "../../assets/What-is-the-extra-benefit-of-Vuejs.jpg";
import img3 from "../../assets/eCommerce-Advantages.jpg";
import img4 from "../../assets/Best-eCommerce-CMS-1.jpg";
import img5 from "../../assets/Web-Agency.jpg";
import img6 from "../../assets/Saas-Business.jpg";

const Blog = () => {
  const datas = [
    {
      img: img1,
      writer: "Jewel Hossain Fahim",
      title: "Why YOORI is Best Choice for eCommerce Business?",
      des: "YOORI is an e-commerce script built with Laravel and Vue.js, which are both popular open-source technologies. Laravel is a powerful PHP framework that is often used for building web applications, and Vue.js is a JavaScript framework that is often used for building user interfaces. Here are some reasons why YOORI might be a good choice […]",
    },
    {
      img: img2,
      writer: "Jewel Hossain Fahim",
      title: "What Is The Extra Benefit of Vue.js Instead HTML/jQuery",
      des: "Vue.js is a JavaScript framework that is often used for building user interfaces, specifically for building web-based applications. It offers several benefits over using HTML and jQuery alone, such as: Overall, Vue.js is a powerful and flexible JavaScript framework that offers many benefits over using HTML and jQuery alone. It’s easy to learn and use, […]",
    },
    {
      img: img3,
      writer: "Jewel Hossain Fahim",
      title:
        "Why You Should Consider Ecommerce for Your Business? 7 Advantages of eCommerce Explained",
      des: "E-commerce has become a lot more accessible in recent years, which means that it’s now easier than ever for small businesses to sell their products online. In fact, there are now over 2.5 million eCommerce websites online — and that number is growing every single day. If you’ve been thinking about selling your products online […]",
    },
    {
      img: img4,
      writer: "Jewel Hossain Fahim",
      title: "How to Choose the Best eCommerce CMS for Your Business?",
      des: "Ecommerce is no longer the domain of just a few select businesses. It has become such a massive industry that it now accounts for over 10% of all retail sales worldwide. That’s why more and more businesses are turning to ecommerce to drive their sales and increase their profits. But launching an ecommerce website isn’t […]",
    },
    {
      img: img5,
      writer: "Jewel Hossain Fahim",
      title: "5 Best Things to look for When Searching for the Web Agency",
      des: "Websites are the soul of each online project; you must be conscious! It must provide pertinent info and enjoyable viewing to all its consumers, achieved over quality web development and designing services. With advancements in internet advertising and web technologies, the market is currently over-flooded through avowedly top web companies. So, selecting a good website […]",
    },
    {
      img: img6,
      writer: "Jewel Hossain Fahim",
      title: "How to Start a SAAS Business in 2022?",
      des: "To start a SaaS business, you have to know about the SaaS business, which helps to make the business successful.Software as a service is the best information technology business model. The online business is going to a big revolution to the subscription-based system where you can get a monthly recurring commission. Below you will get […]",
    },
  ];
  const responsivePadding = "p-5 md:px-[40px] lg:px-[60px] xl:px-[120px]";

  return (
    <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 ${responsivePadding}`}>
      {datas.map((item, i) => (
        <section key={i} className="border shadow-md hover:scale-[1.03] transform duration-200 hover:shadow-lg">
          <div className="relative">
            <img src={item.img} alt="" className="w-full h-full object-cover" />
            <p className="px-4 py-2 bg-secondary text-white uppercase font-semibold w-[200px] absolute -bottom-4 left-6">
              Uncategorized
            </p>
          </div>
          <div className="p-5">
            <p className="text-secondary font-medium mt-5">_{item.writer}</p>
            <h1 className="text-[20px] lg:text-[30px] text-primary font-semibold my-4">
              {item.title}
            </h1>
            <p className="leading-[30px]">{item.des}</p>
            <button className="flex items-center gap-2 my-4 font-medium text-secondary">
              Learn More <HiArrowLongRight />
            </button>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Blog;
