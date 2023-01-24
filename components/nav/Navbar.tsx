import { WidthContext } from "@/lib/context/useContext";
import { useContext } from "react";
import {
  AiOutlineSearch,
  AiOutlineBell,
  AiOutlineMenu,
  AiOutlineUser,
} from "react-icons/ai";
import { GiHypersonicBolt } from "react-icons/gi";
const Navbar = () => {
  return (
    <div className="   fixed top-0 h-screen w-screen  bg-gray-100">
      <div className="flex h-16 w-full items-center justify-between pl-28 pr-20">
        <div className="flex">
          <MenuIcon />
          <SearchComponent />
        </div>
        <Badge />
        <div className=" flex w-64 items-center justify-around">
          <Icon PropIcon={<AiOutlineBell size={24} />} />
          <Icon PropIcon={<GiHypersonicBolt size={24} />} />
          <Icon PropIcon={<AiOutlineUser size={24} />} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function MenuIcon() {
  const { setIsExpanded, isExpanded } = useContext(WidthContext);
  return (
    <div
      onClick={() => setIsExpanded(!isExpanded)}
      className={`transition 1s ease-in-out mr-5 cursor-pointer rounded-lg bg-${!isExpanded?'white':'black'} p-2 shadow-md transition 1s ease-in-out`}
    >
      <AiOutlineMenu size={22} color={`${isExpanded ? "white" : "black"}`} />
    </div>
  );
}
function SearchComponent() {
  return (
    <>
      <div className=" flex min-w-fit items-center rounded-md bg-white pr-1    shadow-md outline-none focus:outline-none">
        <input type="text" className=" mr-2   rounded-md border-none pr-2" />
        <div className=" cursor-pointer rounded-lg bg-black  p-1">
          <AiOutlineSearch size={20} color={"white"} />
        </div>
      </div>
    </>
  );
}

function Badge() {
  return (
    <>
      <div className="group">
        <div className=" transition-all 1s ease-in-out p-.5 flex h-12 w-40  items-center  justify-around rounded-2xl bg-white shadow-md  group-hover:bg-black">
          <img
            className=" border-black-10px h-10 w-10 rounded-full"
            src="/psg.png"
            alt="hr"
          />
          <p className="group-hover:text-white  font-inter font-bold">PSG</p>
        </div>
      </div>
    </>
  );
}

function Icon({ PropIcon }: { PropIcon: JSX.Element }) {
  return <div className=" cursor-pointer transition 1s ease-in-out rounded-lg bg-white p-2 shadow-md">{PropIcon}</div>;
}
