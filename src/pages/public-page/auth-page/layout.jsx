import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="w-full h-screen flex overflow-hidden">
      <div className="w-3/5 h-full bg-custom-gradient relative ">
        <div className="absolute bottom-[582px] left-0">
          <div className="w-[482px] h-[482px] xl:w-[582px] xl:h-[582px] border border-[#0575E6] rounded-full absolute -left-[208px] top-[326px] xl:-left-[108px] xl:top-[226px] "></div>
          <div className="w-[482px] h-[482px] xl:w-[582px] xl:h-[582px] border border-[#0575E6] rounded-full absolute -left-[123.22px] top-[353.21px] xl:-left-[23.22px] xl:top-[253.21px]"></div>
        </div>
        <div className="text-white absolute right-[145px] top-[252px]  xl:right-[10vw] xl:top-[30vh] 2xl:right-[245px] 2xl:top-[352px] space-y-[20px]">
          <h1 className="text-[40px] font-sf-bold leading-[56px]">
            Sohuutritue
          </h1>
          <p className="text-base font-sf-medium">
            lorem ipsum dolor sit amet consextetur
          </p>
          <button className="border border-none bg-gradient1  hover:bg-blue-600 rounded-[30px] px-[30px] py-[8px] font-sf-light">
            Xem thêm
          </button>
        </div>
      </div>
      <div className=" w-2/5 p-1 xl:p-6 flex items-center xl:items-start xl:pt-[10vh]">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
