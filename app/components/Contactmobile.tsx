import { FaInstagram } from "react-icons/fa";
import { PiBasketballLight } from "react-icons/pi";
import { FaGoogle } from "react-icons/fa";
const Contactmobile = () => {
  return (
    <div className=" sm:hidden mt-10  mb-5">
      <h1 className="text-center font-Raleway text-3xl font-semibold">
        Contact
      </h1>
      <h2 className="font-Mohave mt-2">ardikadriu156@gmail.com</h2>
      <div className="flex justify-between mt-3">
        {" "}
        <FaInstagram />
        <PiBasketballLight size={17} />
        <FaGoogle />
      </div>
    </div>
  );
};

export default Contactmobile;
