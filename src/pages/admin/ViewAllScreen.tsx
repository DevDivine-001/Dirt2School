import image from "../../assets/bottle.jpg";

const Component = () => {
  return (
    <div className="flex items-center justify-center bg-[red] flex-col">
      <div className="flex h-[180px] border w-[99%] flex-col items-center justify-center rounded-lg bg-green-500">
        <div className="w-[80px] h-[80px] rounded-full border ">
          <img
            src={image}
            alt="Image"
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="font-bold text-white max-sm:text-[13px]">
          KossyUzoigwe
        </div>
        <div className="text-[12px] font-bold max-sm:text-[10px]">
          kossyuzoigwe@gmail.com
        </div>
        <div className="font-bold text-white">₦2,000</div>
      </div>
    </div>
  );
};

const ViewAllScreen = () => {
  return (
    <div className="grid grid-cols-3 gap-2 xl:grid-cols-3  max-md:grid-cols-2 max-sm:grid-cols-1">
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
      <Component />
    </div>
  );
};

export default ViewAllScreen;
