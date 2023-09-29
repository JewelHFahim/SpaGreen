import { BiSearch } from "react-icons/bi";
import logo from "../../assets/spagreen logo.png";
import { TfiViewGrid } from "react-icons/tfi";
import { BsWhatsapp } from "react-icons/bs";
import { GrMenu } from "react-icons/gr";
import { IoMdArrowDropdown } from "react-icons/io";
import { useEffect, useRef, useState } from "react";
import InfoDrawer from "../../utils/InfoDrawer";
import ToggleSearch from "../../utils/ToggleSearch";
import { AiOutlineClose } from "react-icons/ai";
import MobileMenu from "./MobileMenu";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {

  const [state] = useState(false)
  const navRef = useRef()

  useEffect(() => {
      
    const body = document.body

    // Disable scrolling
    const customBodyStyle = ["overflow-hidden", "lg:overflow-visible"]
  
    if (state) body.classList.add(...customBodyStyle)
    // Enable scrolling
    else body.classList.remove(...customBodyStyle)

    // Sticky strick
    const customStyle = ["sticky-nav", "fixed", "border-b"]

    window.onscroll = () => {
        if (window.scrollY > 80) navRef.current.classList.add(...customStyle)
        else navRef.current.classList.remove(...customStyle)
    }
  }, [state])


  // Side Info Drawer
  const [drawer, setDrawer] = useState(false);
  const toggleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  // Serach Drawer
  const [isOpen, setIsOpen] = useState(false);
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  //Sub Menu
  const [subMenu, setSubmenu] = useState(false);
  const handleSubmenu = (index) => {
    setSubmenu(index);
  };

  const menus = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    {
      title: "Projects",
      path: "",
      submenu: [
        { stitle: "Yoori Ecommerce" },
        { stitle: "Oxoo Movie" },
        { stitle: "Ovoo Movie" },
        { stitle: "Meetair" },
        { stitle: "Onno News" },
        { stitle: "IT NOW" },
      ],
    },
    {
      title: "Service",
      path: "/",
      submenu: [
        { stitle: "UI/UX DESIGN" },
        { stitle: "WEB DEVELOPMENT" },
        { stitle: "MOBILE DEVELOPMENT" },
        { stitle: "DEVOPS" },
        { stitle: "CLOUD SOLUTIONS" },
      ],
    },
    { title: "Blog", path: "/" },
    {
      title: "Case Study",
      path: "/",
      submenu: [
        { stitle: "Yoori Ecommerce" },
        { stitle: "Oxoo Movie" },
        { stitle: "Onno News" },
        { stitle: "Ovoo Movie" },
      ],
    },
    { title: "Contact", path: "/" },
  ];

  

  return (
    <nav ref={navRef} className="flex justify-between items-center px-5 md:px-[40px] lg:px-[60px] xl:px-[120px] py-5 md:py-[30px] lg:py-0 xl:py-0 navbar bg-white z-[999]">
      {/* Mobile Menu Btn */}
      <div className="lg:hidden">
        <button onClick={toggleDrawer}>
          <GrMenu className="text-2xl" />
        </button>
        <MobileMenu drawer={drawer} toggleDrawer={toggleDrawer} />
      </div>

      {/* Logo */}
      <div>
        <a href="/"><img src={logo} alt="logo" width={150} height={100} /></a>
      </div>

      {/* Menu */}
      <div className="hidden lg:block xl:block">
        <ul className="flex text-primary relative maninMenu">
          {menus.map((menu, i) => (
            <li key={i}>
              <details open>
                <summary onMouseOver={() => handleSubmenu(i)} className="flex">
                  <Link to={menu.path} className="flex font-semibold lg:px-3 lg:py-6 xl:px-8 xl:py-8 cursor-pointer transform duration-500 hoverAnimation">{menu.title}
                  {menu.submenu && <IoMdArrowDropdown className="text-xl" />}</Link>
                </summary>

                {menu.submenu && subMenu === i && (
                  <ul className="absolute mt-[1px] bg-white w-[230px] cursor-pointer p-4 ml-[-25px]">
                    {menu.submenu.map((sb, i) => (
                      <li
                        key={i}
                        className="font-[600] py-2 hover:text-secondary transform duration-300 hover:pl-[2px] uppercase text-[14px]"
                      >
                        <a href="" >{sb.stitle}</a>
                      </li>
                    ))}
                  </ul>
                )}

              </details>
            </li>
          ))}
        </ul>
      </div>

      {/* Whats App */}
      <div className=" items-center gap-2 hidden md:flex lg:hidden xl:hidden">
        <BsWhatsapp className="text-secondary" />
        <p>+880 1911209322</p>
      </div>

      {/* Buttons */}
      <div className="hidden gap-x-5 lg:flex xl:flex text-primary">
        <button
          onClick={() => {
            toggleModal();
          }}
        >
          {!isOpen ? (
            <BiSearch className="text-[28px]" />
          ) : (
            <AiOutlineClose className="text-[28px]" />
          )}
        </button>
        <button onClick={toggleDrawer}>
          <TfiViewGrid className="text-[22px]" />
        </button>

        {/* InfoDrawer */}
        <InfoDrawer drawer={drawer} toggleDrawer={toggleDrawer} />
        {/* Search Drawer */}
        <div className="absolute top-[90px] right-[165px]">
          <ToggleSearch isOpen={isOpen} toggleModal={toggleModal} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
