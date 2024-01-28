import Profilemobile from "./Mobilecomponents/Profilemobile";
import Skillsmobile from "./Mobilecomponents/Skillsmobile";
import Experiencemobile from "./Mobilecomponents/Experiencemobile";
import Firstsection from "./section/Firstsection";
import Secondsection from "./section/Secondsection";
import Contactmobile from "./Mobilecomponents/Contactmobile";
import Navbar from "./Mobilecomponents/Navbar";
export default function Home() {
  return (
    <main className="max-sm:flex max-sm:flex-col max-sm:items-center bg-white flex">
      <Navbar />
      <Profilemobile />
      <Skillsmobile />
      <Experiencemobile />
      <Contactmobile />

      <Firstsection />
      <Secondsection />
    </main>
  );
}
