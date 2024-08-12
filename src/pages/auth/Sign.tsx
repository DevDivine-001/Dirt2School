import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { useParams } from "react-router-dom";
import LoadingScreen from "./LoadingScreen";
import { signinApi,  } from "../../apis/authApi";
import { useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { mainUser } from "../../global/globalState";
const Sign = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { token }: any = useParams();
  const [checked, setChecked] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const Schema = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    // reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (data: any) => {
    

    
    
    setLoading(true);
    const { email, password } = data;
    signinApi({ email, password }).then((res) => {
      if (res) {
        navigate("/");
        // const decode: any = jwtDecode(res);
        dispatch(mainUser(res));
        // console.log("This is : ", decode.id);
        setLoading(false);
      }
    });
  });

  // useEffect(() => {
  //   if (token) {
  //     verifiedApi(token);
  //   }
  // }, []);

  const [eye, setEye] = useState<boolean>(false);
  const onEye = () => {
    setEye(!eye);
  };
  return (
    <>
      <div>
        {loading && <LoadingScreen />}
        <form onSubmit={onHandleSubmit}>
          <div className="mt-[15px] relative rounded-md"></div>
          <div className="mt-[25px] relative rounded-md">
            <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
              Enter Email:
            </div>
            <div className="min-w-[290px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
              <input
                type="text"
                placeholder="example@gmail.com"
                className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
                {...register("email")}
              />
            </div>
            {errors.email?.message && (
              <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
                Please provide a valid email address
              </div>
            )}
          </div>
          <div className="mt-[25px] relative rounded-md ">
            <div
              className="absolute top-[30%] right-6 hover:scale-[1.2] transition-all duration-500 hover:cursor-pointer"
              onClick={() => {
                onEye();
              }}
            >
              {!eye ? <FaEye /> : <FaEyeSlash />}
            </div>
            <div className="absolute bg-white px-1 text-[13px] max-sm:text-[10px] max-sm:mt-[-8px] font-semibold ml-[15px] mt-[-10px] text-gray-500">
              Enter Password:
            </div>
            <div className="min-w-[290px] h-[40px] border flex justify-center items-center rounded-full overflow-hidden">
              <input
                type={`${!eye ? "password" : "text"}`}
                placeholder="JohnDoe123"
                className="w-full h-full outline-none  pl-5 placeholder:text-[13px] text-[13px]"
                {...register("password")}
              />
            </div>
            {errors.password?.message && (
              <div className="text-[11px] text-red-500 flex justify-end items-center mt-[-4px] font-semibold">
                Please provide a password
              </div>
            )}
          </div>
          <div className="flex text-[13px] font-semibold items-center mt-2">
            <input
              type="checkbox"
              onClick={(e: any) => {
                setChecked(e.target.checked);
              }}
            />
            <div className=" ml-4  ">Remember me</div>
          </div>{" "}
          <div className="w-full flex items-center justify-center mt-3 mb-3">
            <button
              className={`px-5 py-2 text-white text-[14px] transition-all duration-500 ${
                checked ? "bg-green-400" : "bg-gray-400"
              } rounded-sm rounded-tl-[20px] rounded-br-[20px]  font-semibold `}
              type="submit"
              disabled={!checked}
            >
              Signin
            </button>
          </div>
          {/* <div>Have an account? <Link to="/signin">Signin</Link></div> */}
        </form>
      </div>
    </>
  );
};

export default Sign;
