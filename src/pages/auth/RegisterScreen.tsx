import { Link } from "react-router-dom";
import dirt from "../../assets/bottle.jpg";
import Reg from "./Reg";

const RegisterScreen = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center bg-gray-100  ">
      <div className="w-[93%] h-[93%]  rounded-xl shadow-3xl flex overflow-hidden max-lg:justify-center">
        <div className="w-[65%] bg-green-500 flex rounded-3xl flex-col items-center max-lg:hidden">
          <div className="w-full h-full rounded-3xl ">
            <img src={dirt} className="h-full w-full object-cover" />
          </div>
        </div>
        <div className="w-[35%] flex flex-col items-center justify-center">
          <div className="w-[330px] bg-white h-[330px] rounded-lg flex flex-col items-center">
            <div className="flex w-full justify-between my-2">
              <div className="flex w-full items-center justify-center ">
                <div className="flex my-1">
                  <Link to="/signin">
                    <button
                      className="  bg-green-400 text-white
                     py-2 px-5 ml-2 rounded-sm  font-semibold transition-all rounded-tl-[20px] rounded-br-[20px]  duration-500"
                    >
                      Login
                    </button>
                  </Link>
                  <Link to="/register">
                    <button
                      className="
                   
                        bg-green-400 text-white
                     py-2 px-5 ml-2 rounded-sm  font-semibold transition-all rounded-tl-[20px] rounded-br-[20px] duration-500 "
                    >
                      Register
                    </button>
                  </Link>
                </div>
              </div>
            </div>
                <Reg/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
