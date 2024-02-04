import Contact from "../components/Contact";
import Profile from "../components/Profile";
import Skills from "../components/Skills";
const Firstsection = () => {
  return (
    <div className="w-[447px] flex flex-col items-center max-sm:hidden max-md:ml-">
      <Profile />
      <Skills />
      <Contact />
    </div>
  );
};

export default Firstsection;
