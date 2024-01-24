import Image from "next/image";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
export default function Home() {
  return (
    <main className="max-sm:flex max-sm:flex-col max-sm:items-center bg-white">
      <Profile />
      <Skills />
    </main>
  );
}
