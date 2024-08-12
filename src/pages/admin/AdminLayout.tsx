import { Outlet } from "react-router-dom";
import AdminSider from "./AdminSider";
import { useSelector } from "react-redux";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineManageHistory } from "react-icons/md";
import { useState } from "react";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";

const AdminLayout = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const [show, setShow] = useState<boolean>(false);
  const onShow = () => {
    setShow(!show);
  };

  const [change, setChange] = useState<boolean>(false);
  const onChanged = () => {
    console.log(onChanged);
    
    setChange(change);
  };
  return (
    <>
      <div className="w-full flex justify-between h-full">
        <div className="max-sm:justify-end max-sm:flex w-full absolute hidden">
          <div
            className=" absolute top-2 right-14"
            onClick={() => {
              onShow();
            }}
          >
            <GiHamburgerMenu className=" fixed text-2xl text-black hover:cursor-pointer hover:scale-125 transition-all duration-500" />
            {show ? (
              <div className="absolute top-6 w-[140px] right-0 flex flex-col items-center rounded-md h-auto bg-gray-200">
                <Link to="/admin">
                  <div className="flex items-center">
                    <FaUsers className="text-2xl my-2 hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
                    <div className="ml-2">Users</div>
                  </div>
                </Link>
                <Link to="/admin/credit">
                  <div className="flex items-center">
                    <BsFillCreditCard2BackFill className="text-2xl my-2 hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
                    <div className="ml-2">Credit</div>
                  </div>
                </Link>

                <Link to="/admin/history">
                  <div className="flex items-center">
                    <MdOutlineManageHistory className="text-2xl my-2 hover:cursor-pointer transition-all duration-300 hover:scale-[1.2]" />
                    <div className="ml-2">History</div>
                  </div>
                </Link>
                <div className="my-[6px] flex items-center">
                  <TbLogout2 className="text-2xl" />
                  <div className="ml-2">Logout</div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
        <div className={`${toggle ? "w-[50px]" : "w-[85px]"} max-sm:hidden `}>
          <AdminSider />
        </div>
        <div className="w-full h-screen ">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
