import { MdAdminPanelSettings } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaUsers } from "react-icons/fa";
import { changedToggle, toggled } from "../../global/globalState";
import { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import { BsFillCreditCard2BackFill } from "react-icons/bs";
import { MdOutlineManageHistory } from "react-icons/md";

const AdminSider = () => {
  const toggle = useSelector((state: any) => state.toggle);
  const dispatch = useDispatch();
  const [state, setState] = useState<boolean>(false);
  const onToggle = () => {
    setState(!state);
  };

  return (
    <>
      <div className="w-[100px] h-screen bg-white">
        <div className={`${toggle ? "w-[50px]" : "w-[85px]"} h-screen fixed`}>
          <div
            className="w-full flex flex-col items-center mt-3"
            onClick={() => {
              onToggle();
            }}
          >
            {!state ? (
              <MdAdminPanelSettings
                className="text-4xl hover:cursor-pointer"
                onClick={() => {
                  dispatch(toggled());
                }}
              />
            ) : (
              <MdAdminPanelSettings
                className="text-4xl hover:cursor-pointer"
                onClick={() => {
                  dispatch(changedToggle());
                }}
              />
            )}
          </div>
          <div className="w-full flex flex-col items-center">
            <Link to="/admin">
              {!toggle ? (
                <div className="font-bold mt-8 max-sm:text-[13px]">View </div>
              ) : (
                <FaUsers className="text-3xl mt-9" />
              )}
            </Link>
            <Link to="/admin/credit">
              {!toggle ? (
                <div className="font-bold mt-8 max-sm:text-[13px]">Credit </div>
              ) : (
                <BsFillCreditCard2BackFill className="text-3xl mt-9" />
              )}
            </Link>
            <Link to="/admin/history">
              {!toggle ? (
                <div className="font-bold mt-8 max-sm:text-[13px]">History</div>
              ) : (
                <MdOutlineManageHistory className="text-3xl mt-9" />
              )}
            </Link>
          </div>
          <div className="flex flex-col items-center">
            <div className="absolute bottom-4 font-black hover:cursor-pointer hover:px-3 hover:py-2 hover:rounded-full hover:bg-black hover:text-white transition-all duration-300">
              {!toggle ? "LogOut" : <TbLogout2 className="text-2xl" />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSider;
