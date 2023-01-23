import React from "react";
import {
  Search,
  PersonStandingIcon,
  BellIcon,
  UserIcon,
  Menu,
} from "lucide-react";

const Navbar = () => {
  return (
    <div className=" fixed top-0 h-screen w-screen  bg-gray-100">
      <div className="flex h-16 w-full items-center justify-between pl-20 pr-20">
        <div className="flex">
          <MenuIcon />
          <SearchComponent />
        </div>
        <Badge />
        <div className=" flex w-64 items-center justify-around">
          <Bell />
          <Cupcake />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

function MenuIcon() {
  return (
    <div className=" mr-5 rounded-lg bg-white p-2 shadow-md">
      <Menu />
    </div>
  );
}
function SearchComponent() {
  return (
    <>
      <div className=" flex min-w-fit items-center rounded-md bg-white pr-1    shadow-md outline-none focus:outline-none">
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
function User() {
  return (
    <Icon>
      <div className="flex w-20 items-center justify-between p-1">
        <img src="/psg.png" alt="" className="h-5 w-5 rounded-md" />{" "}
        <p className=" p-.5 font-bold">Abdul</p>
      </div>
    </Icon>
  );
}

function Bell() {
  return (
    <Icon>
      <BellIcon />
    </Icon>
  );
}

function Cupcake() {
  return (
    <Icon>
      <PersonStandingIcon />
    </Icon>
  );
}

function Icon({ children }: { children: React.ReactNode }) {
  return <div className=" rounded-lg bg-white p-2 shadow-md">{children}</div>;
}
