import { FaInstagram } from "react-icons/fa";
import { PiBasketballLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="flex mt-24 pb-10">
      <div className=" mt-[11px] ">
        <h1 className="text-3xl text-right leading-9 tracking-[1.5px] font-Raleway font-semibold">
          Contact
        </h1>
        <h3 className="font-Raleway font-medium leading-6">
          ardikadriu156@gmail.com
        </h3>
        <div className="flex justify-end mt-[11px]">
          <div className=" text-right flex w-[72px] justify-between">
            <FaInstagram />
            <PiBasketballLight size={17} />
            <FaGoogle />
          </div>
        </div>
      </div>
      <div className=" h-[102px] w-[2px] bg-black ml-4 flex justify-center">
        <div className="">
          <div className="w-2 h-2 rounded-md bg-purple-950 mt-14"></div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
