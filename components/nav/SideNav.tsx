import { useEffect, useState } from "react";
import { WidthContext } from "@/lib/context/useContext";
import { useContext } from "react";
import { motion } from "framer-motion";
import { AiFillHome } from "react-icons/ai";
import { FiDribbble, FiGitlab, FiZap } from "react-icons/fi";
import Tooltip from "../shared/tooltip";

const SideNav = () => {
  const { isExpanded,setIsExpanded } = useContext(WidthContext);
  const [width, setWidth] = useState(isExpanded ? 96 : 20);

  const sidebarData = [
    { text: "home", icon: <AiFillHome className="" color="white" size={22} /> },
    { text: "Upcoming", icon: <FiDribbble color="white" size={22} /> },
    { text: "home", icon: <FiGitlab color="white" size={22} /> },
    { text: "more", icon: <FiZap color="white" size={22} /> },
  ];

  useEffect(() => {
    setWidth(isExpanded ? 300 : 50);
  }, [isExpanded]);

  return (
    <motion.div
    
   
      initial={{ width: 14 }}
      animate={{ width: width }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className=" fixed  left-0 m-3 mt-20 flex h-5/6 flex-col justify-around   rounded-xl  bg-white pt-6 pb-2 shadow-md"
    >
      {sidebarData.map((item, index) => (
        <SidebarItem key={item.text} text={item.text} icon={item.icon} />
      ))}
    </motion.div>
  );
};

export default SideNav;

function SidebarItem({ icon, text }: { icon: JSX.Element; text: string }) {
  const { isExpanded } = useContext(WidthContext);
  const [margin, setmargin] = useState(0);
  useEffect(() => {
    setmargin(isExpanded ? 40 : 0);
  }, [isExpanded]);

  return (
    <motion.div
      initial={{ margin: margin }}
      animate={{ margin: margin }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={`${
        isExpanded ? "m-10" : "m-0"
      } flex h-12  w-full items-center transition-all 2s ease-in-out justify-around rounded-xl bg-[#3ca9e9] hover:bg-black`}
    >
      {icon}
      {isExpanded && <p className="  font-bold   text-white ">{text}</p>}
    </motion.div>
  );
}
