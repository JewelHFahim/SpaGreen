import { useState, useEffect } from "react";
import {HiOutlineArrowNarrowUp} from "react-icons/hi"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Add smooth scrolling behavior
    });
  };

  // Function to handle the scroll event and show/hide the button
  const handleScroll = () => {
    if (window.scrollY > 100) {
      // Show the button when the user has scrolled down 100 pixels
      setIsVisible(true);
    } else {
      // Hide the button when the user is at the top of the page
      setIsVisible(false);
    }
  };

  // Attach the scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <button className=" w-[40px] h-[50px] fixed bottom-[20px] right-[20px] text-[30px] p-2 flex justify-center items-center text-secondary shadow-xl rounded-md bg-white" onClick={scrollToTop}>
          <HiOutlineArrowNarrowUp/>
        </button>
      )}
    </div>
  );
}

export default ScrollToTopButton;
