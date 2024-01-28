import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sm:hidden mt-4">
      <ul className="flex gap-5 font-Mohave font-semibold active:red ">
        <Link href={"#Profile"}>
          {" "}
          <li>Profile</li>
        </Link>

        <Link href={"#Skills"}>
          {" "}
          <li>Skills</li>
        </Link>

        <Link href={"#Experience"}>
          <li>Portofolio</li>
        </Link>

        <Link href={"#Contact"}>
          <li>Contact</li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
