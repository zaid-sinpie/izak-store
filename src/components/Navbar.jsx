import { Nav } from "./Helper/Helper";

const Navbar = () => {
  const navbarlist = [
    {
      title: "Explore",
      link: "#",
    },
    {
      title: "Orders",
      link: "#",
    },
    {
      title: "Contact",
      link: "#",
    },
    {
      title: "Offer",
      link: "#",
    },
  ];
  return (
    <header className="flex justify-between w-full items-center p-3 bg-[#ffeb77]">
      <h1 className="text-[24px]">IZAK</h1>
      <nav className="text-[16px]">
        <Nav list={navbarlist} />
      </nav>
    </header>
  );
};

export default Navbar;
