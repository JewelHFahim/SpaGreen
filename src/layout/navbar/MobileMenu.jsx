/* eslint-disable react/prop-types */
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./MobileMenu.css";

const MobileMenu = ({ drawer, toggleDrawer }) => {
  
  const menus = [
    { title: "Home", path: "/" },
    { title: "About Us", path: "/about-us" },
    {
      title: "Projects",
      path: "/",
      submenu: [
        { stitle: "Yoori Ecommerce" },
        { stitle: "Oxoo Movie" },
        { stitle: "Ovoo Movie" },
        { stitle: "Meetair" },
        { stitle: "Onno News" },
        { stitle: "ITNOW" },
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
    { title: "Blog", path: "/blog" },
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
    { title: "Contact", path: "/contact" },
  ];

  const [openSubmenus, setOpenSubmenus] = useState({});
  const toggleSubmenu = (title) => {
    setOpenSubmenus({
      ...openSubmenus, [title]: !openSubmenus[title],
    });
  };

 

  return (
    <div>
      <Drawer
        open={drawer}
        onClose={toggleDrawer}
        direction="left"
        className="h-screen"
        size={300}
        lockBackgroundScroll={true}
        overlayOpacity={0.7}
      >
        <section className="p-8 text-primary">
          <div className="flex justify-end text-[25px]">
            <button onClick={toggleDrawer}>
              <BsArrowLeft />
            </button>
          </div>

          <div className="">
      <ul className="menu font-semibold">
        {menus.map((menu, index) => (
          <li key={index}>
            {menu.submenu ? (
              <details open={openSubmenus[menu.title]} onClick={() => toggleSubmenu(menu.title)}>
                <summary className="my-2 border-b rounded-none hover:text-secondary">{menu.title}</summary>
                <ul>
                  {menu.submenu.map((subItem, subIndex) => (
                    <li key={subIndex}>
                      <a href="">{subItem.stitle}</a>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <a href={menu.path} className="border-b rounded-none my-2 hover:text-secondary">{menu.title}</a>
            )}
          </li>
        ))}
      </ul>
    </div>

        </section>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
