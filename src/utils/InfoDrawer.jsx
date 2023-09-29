/* eslint-disable react/prop-types */
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import logo from "../assets/spagreen logo.png";
import { GrClose } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAddIcCall } from "react-icons/md";
import img1 from "../assets/Meetair_Android-150x150.jpg";
import { AiOutlineInstagram, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";

const InfoDrawer = ({ drawer, toggleDrawer }) => {
  return (
    <div>
      <Drawer
        open={drawer}
        onClose={toggleDrawer}
        direction="right"
        className="h-screen overflow-y-auto scroll-0"
        size={400}
        lockBackgroundScroll={true}
        overlayOpacity={0.7}
      >
        <section className="p-8">
          <div className="flex justify-between">
            <img src={logo} alt="" className="w-[150px] h-[30px]" />
            <button
              onClick={toggleDrawer}
              className="border p-[9px] text-2xl bg-[#f5f5f5] cursor-pointer"
            >
              <GrClose />
            </button>
          </div>

          <p className="text-[#6D6D6D] my-8 text-justify">
            We have a skilled team of engineers who have deep knowledge on
            latest technology. We achieved the elite author position on the
            Envato marketplace.
          </p>

          <div className="">
            <h3 className="text-[24px] font-[700] text-primary pb-5">
              Our Products
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => (
                <div key={i} className="border">
                  <img
                    src={img1}
                    alt=""
                    width={100}
                    height={100}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="">
            <h3 className="text-[24px] font-[700] text-primary py-5">
              Contacts
            </h3>
            <div className="flex flex-col gap-y-2">
              <p className="flex  gap-4">
                <IoLocationOutline className="text-2xl text-secondary w-8" />
                Lake City, Khilkhet, Dhaka, BD
              </p>
              <p className="flex  gap-2">
                <AiOutlineMail className="text-xl text-secondary w-8" />
                sales@spagreen.net
              </p>
              <p className="flex  gap-2">
                <MdOutlineAddIcCall className="text-2xl text-secondary w-8" />
                +880 9678 290 290
              </p>
            </div>
          </div>

          <div className="flex gap-2 mt-8">
            <p className=" w-[30px] h-[30px] p-2 bg-[#4CCEF9] text-white rounded-full flex justify-center items-center">
              <FaTwitter className="text-xl" />
            </p>
            <p
              href="#"
              className="p-2 w-[30px] h-[30px] bg-[#FF753B] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <AiOutlineInstagram />
            </p>
            <p
              href="#"
              className="p-2 w-[30px] h-[30px] bg-[#0077b5] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <FaLinkedinIn />
            </p>

            <p
              href="#"
              className="p-2 w-[30px] h-[30px] bg-[#cd201f] text-white rounded-full flex justify-center items-center"
              aria-label="Reddit"
            >
              <FaYoutube />
            </p>
            <p
              href="#"
              className=" w-[30px] h-[30px] p-2 bg-[#4CCEF9] text-white rounded-full flex justify-center items-center"
            >
              <FaTwitter className="text-xl" />
            </p>
          </div>
        </section>
      </Drawer>
    </div>
  );
};

export default InfoDrawer;
