import logo from "../../assets/spagreen logo.png";
import basis from "../../assets/basis.svg";
import envato from "../../assets/envato.svg";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-[#021327] px-5 md:px-[40px] lg:px-[120px] py-[40px] lg:py-[60px]">

      <div className=" lg:p-6 mx-auto">

        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <a href="#">
                <img className="w-auto h-7" src={logo} alt="" />
              </a>

              <p className="max-w-sm text-[#B1B5D3] text-[14px] mt-6">
                We help businesses run more efficiently and profitably by
                defining, designing, testing, and deploying software apps.
              </p>

              <div className="flex gap-32 lg:gap-4 mt-8">
                <img src={basis} alt="" width={80} height={24} />
                <img src={envato} alt="" width={90} height={16} />
              </div>

              <div className="flex mt-6 -mx-2">
                <a
                  href="#"
                  className="mx-2 w-[30px] h-[30px] bg-[#4CCEF9] text-white rounded-full flex justify-center items-center"
                  aria-label="Reddit"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="mx-2 w-[30px] h-[30px] bg-[#FF753B] text-white rounded-full flex justify-center items-center"
                  aria-label="Reddit"
                >
                  <AiOutlineInstagram />
                </a>
                <a
                  href="#"
                  className="mx-2 w-[30px] h-[30px] bg-[#0077b5] text-white rounded-full flex justify-center items-center"
                  aria-label="Reddit"
                >
                  <FaLinkedinIn />
                </a>

                <a
                  href="#"
                  className="mx-2 w-[30px] h-[30px] bg-[#cd201f] text-white rounded-full flex justify-center items-center"
                  aria-label="Reddit"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
              <div className="flex flex-col gap-2">
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Services
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Product Design
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Web Development
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Mobile App Development
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  DevOps
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Cloud Solutions
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Products
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  YOORI eCommerce
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  OVOO TV & Movie
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  MeetAir Meeting App
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  IT Now - Inventory
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  ONNO News & Magazine
                </a>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="text-gray-700 uppercase dark:text-white">
                  Company
                </h3>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  About us
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Case studies
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="block mt-2 text-sm text-[#B1B5D3] hover:text-white"
                >
                  Site Map
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="flex flex-col lg:flex-row justify-between items-center lg:pr-[95px] text-[14px] mt-20">

          <p className="text-center text-[#B1B5D3]">
            © 2023 SpaGreen Creative. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4 text-[#B1B5D3] ">
            <a href="" className="hover:text-white">Privacy Policy</a>
            <a href="" className="hover:text-white">Terms</a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
