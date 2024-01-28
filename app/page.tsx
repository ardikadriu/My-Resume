import Profilemobile from "./components/Profilemobile";
import Skillsmobile from "./components/Skillsmobile";
import Experiencemobile from "./components/Experiencemobile";
import Firstsection from "./section/Firstsection";
import Secondsection from "./section/Secondsection";
import Thirdsection from "./section/Thirdsection";
import Contactmobile from "./components/Contactmobile";
export default function Home() {
  return (
    <main className="max-sm:flex max-sm:flex-col max-sm:items-center bg-white flex">
      <Profilemobile />
      <Skillsmobile />
      <Experiencemobile />
      <Contactmobile />

      <Firstsection />
      <Secondsection />
    </main>
  );
}
