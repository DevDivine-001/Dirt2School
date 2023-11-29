const AdminHistoryScreen = () => {
  return (
    <>
      {/* <div className="flex w-full h-auto justify-center items-center flex-col">
        <div className="w-[95%] h-full bg-white mt-5 rounded-md justify-between flex items-center">
          <div className="w-[20%]  flex items-center justify-center ">
            ID
          </div>
          <div className="w-[20%]  flex items-center justify-center ">
            Date
          </div>
          <div className="w-[10%]  flex items-center justify-center ">
            Bags
          </div>
          <div className="w-[20%] flex items-center justify-center ">
            Recipient
          </div>
          <div className="w-[30%]  flex items-center justify-center ">
            Email
          </div>
        </div>
        <div className="w-[95%] h-full bg-white mt-5 rounded-md justify-between flex items-center">
          <div className="w-[20%]  flex items-center justify-center  text-[13px]">
            63463891937939230
          </div>
          <div className="w-[20%]  flex items-center justify-center  text-[14px] ">
            11th-Nov-23
          </div>
          <div className="w-[10%]  flex items-center justify-center ">
            2
          </div>
          <div className="w-[20%] flex items-center justify-center ">
            Kossyrisochukwu
          </div>
          <div className="w-[30%]  flex items-center justify-center text-[13px] ">
            kossyuzoigwe@gmail.com
          </div>
        </div>
      </div> */}
      <div className="flex justify-center items-center w-full ">
        <div className="flex justify-between items-center w-[95%] mt-[14px]">
          <table className="w-full flex justify-between mt-2">
            <table className="max-md:hidden block">
              <th>ID</th>
              <tr className="text-[14px] ">654e1a5c80ef728332e40e01</tr>
              <tr className="text-[14px] ">654e1a5c80ef728332e40e01</tr>
              <tr className="text-[14px] ">654e1a5c80ef728332e40e01</tr>
              <tr className="text-[14px] ">654e1a5c80ef728332e40e01</tr>
              <tr className="text-[14px] ">654e1a5c80ef728332e40e01</tr>
            </table>
            <table className="">
              <th>Date</th>
              <tr className="text-[14px] max-sm:text-[10px]">10/11/2023</tr>
              <tr className="text-[14px] max-sm:text-[10px]">10/11/2023</tr>
            </table>
            <table className="max-md:hidden block">
              <th>Recipient</th>
              <tr className="text-[14px] max-sm:text-[10px]">
                Kossyrisochukwu
              </tr>
              <tr className="text-[14px] max-sm:text-[10px]">
                Kossyrisochukwu
              </tr>
            </table>
            <table>
              <th>Email</th>
              <tr className="text-[14px] max-sm:text-[10px]">
                kossyuzoigwe@gmail.com
              </tr>
              <tr className="text-[14px] max-sm:text-[10px]">
                kossyuzoigwe@gmail.com
              </tr>
            </table>
            <table className="flex items-center flex-col">
              <th>Bags</th>
              <tr className="text-[14px] max-sm:text-[10px]">2</tr>
              <tr className="text-[14px] max-sm:text-[10px]">2</tr>
            </table>
            <table className="flex items-center flex-col">
              <th>Amount</th>
              <tr className="text-[14px] max-sm:text-[10px]">
                <span className="mr-1 ">₦</span>4,000
              </tr>
              <tr className="text-[14px] max-sm:text-[10px]">
                <span className="mr-1 ">₦</span>4,000
              </tr>
            </table>
          </table>
        </div>
      </div>
    </>
  );
};

export default AdminHistoryScreen;
