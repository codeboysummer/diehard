import React from "react";
import { AlignJustifyIcon, Search, } from "lucide-react";

const Navbar = () => {
  return (
    <div className="h-screen w-screen  bg-gray-100">
      <div className="flex h-16 w-full items-center justify-between pl-20 pr-20">
        <div className="flex">
          <MenuIcon />
          <SearchComponent />
        </div>
        <Badge />
        <Badge />
      </div>
    </div>
  );
};

export default Navbar;

function MenuIcon() {
  return (
    <div className=" mr-5 rounded-lg bg-white p-2 shadow-md">
      <AlignJustifyIcon />
    </div>
  );
}
function SearchComponent() {
  return (
    <>
      <div className=" flex min-w-fit items-center rounded-md bg-white pr-1   shadow-md shadow-md outline-none focus:outline-none">
        <input type="text" className=" mr-2   rounded-md border-none pr-2" />
        <div className=" cursor-pointer rounded-lg bg-black  p-1">
          <Search color={"white"} />
        </div>
      </div>
    </>
  );
}

function Badge() {
  return (
    <>
      <div className=" p-.5 flex h-12 w-40  items-center  justify-around rounded-2xl bg-white shadow-md">
        <img
          className=" border-black-10px h-10 w-10 rounded-full"
          src="/psg.png"
          alt="hr"
        />
        <p className="  font-inter font-bold">PSG</p>
      </div>
    </>
  );
}
function User() {}
function Bell() {}
function Cupcake() {
  
}

function Icon(children: JSX.Element) {
  return <div className=" bg-white p-2 shadow-md">{children}</div>;
}
