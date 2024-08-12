import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";

const CreditScreen = () => {
  const user = useSelector((state: any) => 
    
    state.user);
    console.log(user);
  const Schema = yup.object({
    studentName: yup.string().required(),
    amount: yup.number().required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(Schema),
  });

  const onHandleSubmit = handleSubmit(async (res: any) => {
    console.log("first");
    Swal.fire({
      text: `${res.studentName}'s account has been successfully credited with the sum of ${res?.amount}`,
      icon: "success",
      // timerProgressBar: true
      timer: 3000
    });
  });
  return (
    <>
      <div className="flex justify-center items-center w-full h-full bg-green-500">
        <form
          className="w-[300px] max-sm:w-[250px] h-[250px] bg-white rounded-md flex flex-col items-center justify-center"
          onSubmit={onHandleSubmit}
        >
          <div className="w-[90%] border h-[40px] rounded-md mb-3">
            <div className="font-bold -mt-3 ml-3 ">Name: </div>
            <input
              type="text"
              className="w-full h-[20px] -mt-[6px] overflow-hidden pl-3  outline-none text-[14px] "
              placeholder="example@gmail.com"
              {...register("studentName")}
            />

            {errors.studentName?.message && (
              <div className="flex justify-end text-[11px] text-red-600">
                Provide Name
              </div>
            )}
          </div>
          <div className="w-[90%] border h-[40px] rounded-md mt-3">
            <div className="font-bold -mt-3 ml-3 ">Amount: </div>
            <input
              type="number"
              className="w-full h-[20px] -mt-[6px] overflow-hidden pl-3  outline-none text-[14px] "
              placeholder="₦"
              {...register("amount")}
            />
            {errors.amount?.message && (
              <div className="flex justify-end text-[11px] text-red-600">
                Provide an amount
              </div>
            )}
          </div>

          <div className="mt-6">
            <button
              className="px-4 py-2 rounded-md text-white bg-green-500 transition-all duration-500 hover:scale-110"
              type="submit"
            >
              Credit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreditScreen;
