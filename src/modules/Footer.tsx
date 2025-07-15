import { FaArrowAltCircleUp } from "react-icons/fa";
import "./footer.css";

const footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Footer w-full flex justify-between py-8 items-center">
      <div>
        <p>By Izabelle Olofsson &copy; 2025</p>
        <p className="png-link text-[0.6rem] font-extralight hidden md:block">
          <a href="https://pngtree.com/freepng/desktop-computer-one-flat-style-work-girl-vector_4754026.html">
            png image from pngtree.com/
          </a>
        </p>
      </div>
      <div className="footer-arrow" onClick={scrollToTop}>
        <FaArrowAltCircleUp />
      </div>
    </div>
  );
};

export default footer;
