import { useState } from "react";
import { Link } from "react-scroll/modules";
import { NavLink } from "react-router-dom";
import Menue from "./Menue";
import { LiaSchoolSolid } from "react-icons/lia";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 50) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  window.addEventListener("scroll", onShow);

  return (
    <div>
      {show ? (
        <div className="w-full h-[70px] fixed flex items-center transition-all duration-700 justify-center z-20  text-black bg-white">
          <div className="w-[90%] h-[100%] flex items-center justify-center z-20 ">
            <div className="flex w-[100%] h-[100%] justify-between items-center">
              <div className="w-[50px] h-[50px] max-sm:w-[40px] max-sm:h-[40px]  rounded-full border flex items-center justify-center border-green-500 ">
                <LiaSchoolSolid className="text-4xl text-green-500 max-sm:text[2xl" />
              </div>

              <div className="flex gap-10 max-md:gap-7 md:text-[14px] sm:text-[14px] text-[16px] max-sm:hidden">
                <Link
                  to="home"
                  //  activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Home
                  </nav>
                </Link>
                <Link
                  to="aboutus"
                  //  activeClass="active"
                  smooth={true}
                  offset={400}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    About Us
                  </nav>
                </Link>
                <Link
                  to="services"
                  //  activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Services
                  </nav>
                </Link>
                {/* <Link
                  to="company"
                  // activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">Company</nav>
                </Link> */}
                <Link
                  to="blog"
                  // activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Blog
                  </nav>
                </Link>
                <Link
                  to="contact"
                  //  activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Contact
                  </nav>
                </Link>
              </div>
              <Link to="/register">
                <button
                  className="w-[120px] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out text-white before:bg-lime-500 before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black border-[1px]
            border-[] bg-[whitesmoke]
            px-2 h-10 text-[13px] font-medium max-sm:hidden"
                >
                <Link to="/register">  Get Started</Link>
                </button>
              </Link>

              <div className="hidden  mt-[220px] max-sm:block">
                <Menue />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full h-[70px] fixed flex items-center transition-all duration-700 justify-center z-20 text-white">
          <div className="w-[90%] h-[100%] flex items-center justify-center z-20 ">
            <div className="flex w-[100%] h-[100%] justify-between items-center">
              <div className="w-[50px] h-[50px] rounded-full border flex items-center justify-center">
                <LiaSchoolSolid className="text-4xl" />
              </div>

              <div className="flex gap-10 max-md:gap-7 md:text-[14px] sm:text-[14px] text-[16px] max-sm:hidden">
                <Link
                  to="home"
                  //  activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Home
                  </nav>
                </Link>
                <Link
                  to="aboutus"
                  //  activeClass="active"
                  smooth={true}
                  offset={400}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300 ">
                    About Us
                  </nav>
                </Link>
                <Link
                  to="services"
                  //  activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Services
                  </nav>
                </Link>
                {/* <Link
                  to="company"
                  // activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer">Company</nav>
                </Link> */}
                <Link
                  to="blog"
                  // activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Blog
                  </nav>
                </Link>
                <Link
                  to="contact"
                  //  activeClass="active"
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  <nav className="hover:cursor-pointer hover:underline transition-all duration-300">
                    Contact
                  </nav>
                </Link>
              </div>
              <NavLink to="register">
                <button
                  className="w-[120px] rounded-[3px] relative flex justify-center items-center gap-1 hover:text-[black)] hover:before:translate-x-[105%]
            overflow-hidden before:transition-transform
            before:duration-[1s] ease-in-out text-white before:bg-lime-500 before:absolute
            before:top-0 before:left-0 before:w-full before:h-full
            transition-colors duration-[1s] before:z-[-1] z-[1]
            hover:text-black border-[1px]
            border-[] bg-[whitesmoke]
            px-2 h-10 text-[13px] font-medium max-sm:hidden"
                >
                  Get Started
                </button>
              </NavLink>

              <div className="hidden  mt-[220px] max-sm:block">
                <Menue />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
// ml-[128px]
export default Header;
