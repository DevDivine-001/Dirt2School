import image from "../../assets/Screenshot 2023-11-15 0834443.png";
import { AiFillDelete } from "react-icons/ai";
import { useSelector } from "react-redux";
import useDarkMode from "../../hook/useDarkMode";
import { useState } from "react";
import { Switch } from "@headlessui/react";
const AdminHistoryScreen = () => {
  const [colorTheme, setTheme]: any = useDarkMode();
  const [darkSide, setDarkSide] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarMode = (checked: any) => {
    setTheme(colorTheme);
    console.log(setTheme);
    setDarkSide(checked);
  };

  const boards = useSelector((state: any) => state.boards);
  console.log("boards =", boards);
  return (
    <>
      <div className="flex w-full h-auto flex-col max-w-9 mx-auto p-1 flex-wrap bg-white dark:bg-[#000] rounded-lg gap-[10px] border-[silver] border-[1px]">
        <header className="bg-[#fff] shadow-md rounded-md sticky top-0 dark:bg-[#000] dark:text-[#ffff]">
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm font-bold sm:text-sm text-md md:text-sm"
            >
              Name
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm font-bold sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm font-bold sm:text-sm text-md md:text-sm"
            >
              Amount
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm font-bold sm:text-sm text-md md:text-sm"
            >
              Status
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm font-bold sm:text-sm text-md md:text-sm"
            >
              Action
            </li>

            <Switch
              checked={darkSide}
              onChange={toggleDarMode}
              className={`${darkSide ? "bg-[#ffff]" : "bg-gray-200"}
        relative inline-flex h-6 w-11 items-center border-[1px] border-[silver]
        rounded-full 
        `}
            >
              <span
                className={`${darkSide ? "translate-x-6" : "translate-x-1"}
        inline-block h-4 w-4 transform
        rounded-full bg-[#000] transition`}
              />
            </Switch>
          </div>
        </header>

        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />

        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />

        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />

        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />
        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />
        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />
        <div className={`${darkSide ? "text-[#ffff]" : "text-[#000]"}`}>
          <div className="flex justify-between items-center max-w-6xl mx-auto p-5 bg-[]">
            <div className="flex items-center justify-center  h-[70px] bg-[] space-x-1">
              <img src={image} alt="" className="h-9 w-9" />
              <div>
                <li
                  className="items-center flex flex-wrap text-[10px]
          text-sm  sm:text-sm text-md md:text-sm"
                >
                  Jack
                </li>
                <li
                  className="items-center  justify-center flex flex-wrap text-[10px]
          text-sm sm:text-sm text-md md:text-sm max-sm:hidden"
                >
                  Id:36752890
                </li>
              </div>
            </div>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Date
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              $35,00
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Receive
            </li>
            <li
              className="items-center  justify-center flex flex-wrap 
          text-sm  sm:text-sm text-md md:text-sm"
            >
              Details
            </li>
            <AiFillDelete className="text-[30px]" />
          </div>
        </div>
        <hr className="mx-auto bg-black dark:bg-white w-full" />
      </div>
    </>
  );
};
export default AdminHistoryScreen;
