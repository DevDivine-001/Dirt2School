import { useState } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useDispatch } from "react-redux";
import { logOut } from "../../global/globalState";
import { useSelector } from "react-redux";
import { LiaSchoolSolid } from "react-icons/lia";
import { GiHamburgerMenu } from "react-icons/gi";
const MainHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);

  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };
  const [scroll, setScroll] = useState<boolean>(false);
  const onScroll = () => {
    setScroll(!scroll);
    if (window.scrollY >= 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };
  window.addEventListener("scroll", onScroll);
  return (
    <>
      <div className="w-full h-[60px] max-sm:h-[50px] flex justify-center items-center bg-green-500 text-black ">
        <div
          className="w-full h-full justify-between flex transition-all duration-300 px-7 items-center fixed"
          // style={{
          //   width: "100%",
          //   height: "60px",
          //   backdropFilter: "blur(4px)",
          // }}
        >
          <div className="w-[45px] h-[45px] max-sm:w-[40px] max-sm:h-[40px]  rounded-full border flex items-center justify-center border-white ">
            <LiaSchoolSolid className="text-4xl text-white max-sm:text[2xl hover:text-gray-100 duration-300 transition-all cursor-pointer bg-[blue]" />
          </div>
          <div
            className="flex items-center justify-center relative cursor-pointer bg-[blue]"
            onClick={() => {
              onShow();
            }}
          >
            <div className="mr-2 max-sm:hidden max-sm:mr-1 font-bold text-white">
              {user.studentName ? user.studentName : user.email}
            </div>
            <div className="hidden max-sm:block">
              <GiHamburgerMenu className="text-2xl hover:cursor-pointer hover:scale-[1.1] transition-all duration-300 text-white" />
            </div>
            {!show ? (
              <div className="">
                <MdOutlineKeyboardArrowDown className="max-sm:hidden flex transition-all duration-500 text-white bg-[red]" />
              </div>
            ) : (
              <div className="">
                <MdOutlineKeyboardArrowDown className="rotate-180 max-sm:hidden flex transition-all duration-500 text-white" />
              </div>
            )}
            {show ? (
              <div className=" flex flex-col items-center absolute mt-7 top-0 bg-gray-300 w-[150px]  rounded-md h-[75px] right-1">
                <div className="text-black  font-bold my-2 hover:text-gray-500 duration-300 transition-all">
                  Update Profile
                </div>
                <button
                  className="absolute mt-9 text-black rounded-full w-full hover:text-gray-500 duration-300 transition-all  hover:cursor-pointer font-bold "
                  onClick={() => {
                    dispatch(logOut());
                  }}
                >
                  LogOut
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainHeader;
